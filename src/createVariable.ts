import createString from "./data/string/createString.ts";
import Lexicon from "./repo/Lexicon.ts";
import Register from "./repo/Register.ts";
import Variable from "./Variable.ts";

type Type = "string" | "generic" | "number";

export default function createVariable(type: Type, scope = "global") {
    if (type == "generic") {
        type = ["string", "number"][Math.floor(Math.random() * 2)] as Type
    }
    const possibleIdentifiers = Lexicon.query(type, "any", scope).filter(
        val => !Register.global.has(val),
    );

    if (possibleIdentifiers.length == 0) {
        throw `Lexicon.scopes.${scope} overflow of tokens with type "${type}"`
    }

    const identifier = possibleIdentifiers[Math.floor(Math.random() * possibleIdentifiers.length)]
    //Register.global.add(identifier);


    let content = '""';
    let subject = "any";
    switch (type) {
        case "string": {
            if (Lexicon.getSubjects(identifier).length > 0) {
                subject = Lexicon.getSubjects(identifier)[0]
            }
            content = `"${createString(subject)}"`;
            break;
        }
        case "number": {
            content = Math.floor(Math.random() * 128) + ""
        }
    }

    const res = new Variable({ mode: "let", identifier, content, subject });
    Register.global.set(identifier, res);
    return res;
}
