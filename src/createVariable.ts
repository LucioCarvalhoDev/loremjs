import createString from "./createString.ts";
import Lexicon from "./repo/Lexicon.ts";
import Pool from "./repo/Pool.ts";
import Register from "./repo/Register.ts";
import Variable from "./Variable.ts";

type Type = "string" | "generic" | "number";

export default function createVariable(type: Type, scope = "global") {
    const nameOptions = Lexicon.query(type, "any", scope).filter(
        val => !Register.global.has(val),
    );

    if (nameOptions.length == 0) {
        throw `Lexicon.scopes.${scope} overflow of tokens with type "${type}"`
    }

    const identifier = nameOptions[Math.floor(Math.random() * nameOptions.length)]
    Register.global.add(identifier);

    if (type == "generic") {
        type = ["string", "number"][Math.floor(Math.random() * 2)] as Type
    }
    let content = '""';
    switch (type) {
        case "string": {
            let sub = "any";
            if (Lexicon.getSubjects(identifier).length > 0) {
                sub = Lexicon.getSubjects(identifier)[0]
            }
            content = `"${createString(sub)}"`;
            break;
        }
        case "number": {
            content = Math.floor(Math.random() * 128) + ""
        }
    }

    return new Variable({ mode: "let", identifier, content })
}
