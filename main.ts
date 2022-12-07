import { parse as cli } from "https://deno.land/std@0.167.0/flags/mod.ts"
import createAssignment from "./src/createAssignment.ts"
import createConditional from "./src/createConditional.ts";
import createVariable from "./src/createVariable.ts"
import { chance } from "./src/lib/random.ts";

export const args = cli(Deno.args);

export const TAB = (args["tab"] || args["t"]) ? " ".repeat(args["tab"] || args["t"]) : "\t";

interface MainConfig {
    scope: string,
    varCreationChanceCap: number
}

export default function main(size = 5, settings: MainConfig = { scope: "global", varCreationChanceCap: 0.4 }) {
    const numSteps = size;
    let fakeCode = "";

    for (let i = 0; i < numSteps; i++) {
        fakeCode += (function () {
            if (i == 0) {
                return createVariable("generic", settings.scope).print()
            } else if (chance(Math.min(i / 10, settings.varCreationChanceCap))) {
                return createVariable("generic", settings.scope).print()
            } else { // do complex things
                if (chance(0.7)) {
                    return createAssignment()
                } else {
                    return createConditional(size)
                }
            }
        })() + "\n"
    }
    return fakeCode
}

const cliSize = args["s"] || args["size"] || 5;
if (args["o"] != undefined || args["output"] != undefined) {
    let outFile = "output.js";
    if (args["o"] === 0)
        outFile = args["o"] || args["output"];
    const res = main(cliSize);
    Deno.writeTextFile(outFile, res);
    if (args["p"] || args["print"])
        Deno.stdout.writeSync(Uint8Array.from(res.split("").map(x => x.charCodeAt(0))));
} else {
    const res = main(cliSize);
    Deno.stdout.writeSync(Uint8Array.from(res.split("").map(x => x.charCodeAt(0))));
}

// console.log(createConditional())