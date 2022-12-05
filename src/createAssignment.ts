import createOperation from "./createOperation.ts";
import Lexicon from "./repo/Lexicon.ts";
import Register from "./repo/Register.ts";

export default function createAssignment() {
    const possibleVariables = Array.from(Register.global)

    const firstTerm = possibleVariables.splice(Math.floor(Math.random() * possibleVariables.length), 1)[0][1];
    const secondTerm = createOperation("string");
    return `${firstTerm.identifier} = ${secondTerm}`


}