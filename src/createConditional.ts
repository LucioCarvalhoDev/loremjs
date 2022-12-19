import main, { TAB } from "../main.ts";
import createComparation from "./createComparation.ts"
import Register from "./repo/Register.ts";

export default function createConditional(size: number) {
    const localScope = Register.newScope();

    const res = (
        `if (#1) {
#2}`)

    const firstTerm = createComparation();
    const secondTerm = main(Math.max(size * 0.5, 3), { scope: localScope, varCreationChanceCap: 0.05 }).split("\n").filter(line => line != "").map(line => TAB + line + "\n").join("");
    return res
        .replace("#1", firstTerm)
        .replace("#2", secondTerm)
}