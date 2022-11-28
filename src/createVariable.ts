import createString from "./createString.ts";
import Lexicon from "./repo/Lexicon.ts";
import Register from "./repo/Register.ts";
import Variable from "./Variable.ts";

type Type = "string" | "generic";

export default function createVariable(tag: Type, scope = "global") {
    const nameOptions = Lexicon.query(tag, scope).filter(
        val => !Register.global.has(val),
    );

    if (nameOptions.length == 0) {
        throw `Lexicon.scopes.${scope} overflow of tokens with tag "${tag}"`
    }

    let identifier = nameOptions[Math.floor(Math.random() * nameOptions.length)]
    Register.global.add(identifier);

    let content = '""';
    switch (tag) {
        case "string":
            content = `"${createString()}"`;
    }

    return new Variable({ mode: "let", identifier, content })
}
