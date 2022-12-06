import createOperation from "./createOperation.ts";
import { chance, pick } from "./lib/random.ts";
import Register from "./repo/Register.ts";

export default function createComparation() {
    let operators = ">,<".split(",");
    let res = "#1 #2 #3";

    let firstTerm = "";
    let secondTerm = pick(operators);
    let thirdTerm = "";

    //return Array.from(Register.global)
    let possibleVars = Array.from(Register.global);
    if ([">", "<"].includes(secondTerm)) { //must be a number
        possibleVars = possibleVars.filter(val => val[1].dataType == "number");

        if (possibleVars.length == 0) {
            firstTerm = "_";
            thirdTerm = Math.floor(Math.random() * 256) + "";
        } else {
            firstTerm = pick(possibleVars)[0];
            thirdTerm = createOperation("number");
        }
    }
    return res
        .replace("#1", firstTerm)
        .replace("#2", secondTerm)
        .replace("#3", thirdTerm);
}

