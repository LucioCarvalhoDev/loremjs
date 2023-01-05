import createString from "./data/string/createString.ts";
import createNumber from "./data/number/createNumber.ts";
import Lexicon from "./repo/Lexicon.ts";
import Register from "./repo/Register.ts";
import Variable from "./Variable.ts";

export type Type = "string" | "number";

export default function createVariable(type: Type | "generic", scope = "global") {
    if (type == "generic") {
        type = ["string", "number"][Math.floor(Math.random() * 2)] as Type
    }
    const possibleIdentifiers = Lexicon.query(type, "any").filter(
        val => !Register.exists(val, scope),
    );

    if (possibleIdentifiers.length == 0) {
        throw `Lexicon.scopes.${scope} overflow of tokens with type "${type}"`
    }

    const identifier = possibleIdentifiers[Math.floor(Math.random() * possibleIdentifiers.length)]

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
            if (Lexicon.getSubjects(identifier).length > 0) {
                subject = Lexicon.getSubjects(identifier)[0]
            }
            content = `${createNumber(subject)}`;
            break;
        }
    }

    const res = new Variable({ mode: "let", identifier, content, subject, dataType: type });
    Register.setOn(res, scope)
    return res;
}
