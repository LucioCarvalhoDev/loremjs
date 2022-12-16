import createOperation from "./createOperation.ts";
import { pick } from "./lib/random.ts";
import Register from "./repo/Register.ts";

export default function createComparation(scope = "global") {
    const operators = "==,!=,>,<".split(",");
    const res = "#1 #2 #3";

    let firstTerm = "";
    const secondTerm = pick(operators);
    let thirdTerm = "";

    let possibleVars = Register.getScope(scope);
    if ([">", "<"].includes(secondTerm)) { //must be a number
        possibleVars = possibleVars.filter(val => val[1].dataType == "number");

        if (possibleVars.length == 0) {
            firstTerm = "Math.random()";
            thirdTerm = Math.random().toFixed(2) + "";
        } else {
            firstTerm = pick(possibleVars)[0];
            thirdTerm = createOperation("number");
        }
    } else {
        const variable = pick(possibleVars);

        firstTerm = variable[0];
        thirdTerm = createOperation(variable[1].dataType)
    }
    return res
        .replace("#1", firstTerm)
        .replace("#2", secondTerm)
        .replace("#3", thirdTerm);
}

