import { parse as cli } from "https://deno.land/std@0.167.0/flags/mod.ts"
import createAssignment from "./src/createAssignment.ts"
import createVariable from "./src/createVariable.ts"

export const args = cli(Deno.args);

export default function main() {
    const numSteps = Math.floor(Math.random() * 6) + 3;
    let fakeCode = "";

    for (let i = 0; i < numSteps; i++) {
        fakeCode += (function () {
            if (i == 0) {
                return createVariable("generic").print()
            } else if (Math.random() > (Math.min(i, 4) / 5)) {
                return createVariable("generic").print()
            } else { // do complex things
                return createAssignment()
            }
        })() + "\n"
    }
    return fakeCode
}

if (args["o"] != undefined || args["output"] != undefined) {
    let outFile = "output.js";
    if (args["o"] === 0)
        outFile = args["o"] || args["output"];
    const res = main();
    Deno.writeTextFile(outFile, res);
    if (args["p"])
        Deno.stdout.writeSync(Uint8Array.from(res.split("").map(x => x.charCodeAt(0))));
} else {
    const res = main();
    Deno.stdout.writeSync(Uint8Array.from(res.split("").map(x => x.charCodeAt(0))));
}
