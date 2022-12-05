import createAssignment from "./src/createAssignment.ts"
import createOperation from "./src/createOperation.ts"
import createVariable from "./src/createVariable.ts"
import generatePath from "./src/data/string/path.ts"


export default function main() {
    const numSteps = Math.floor(Math.random() * 6) + 3;
    let fakeCode = "";

    for (let i = 0; i < numSteps; i++) {
        fakeCode += (function () {
            if (i == 0) {
                return createVariable("generic").debug()
            } else if (Math.random() > (Math.min(i, 4) / 5)) {
                return createVariable("generic").debug()
            } else { // do complex things
                return createAssignment()
            }
        })() + "\n"
    }
    return fakeCode
}

Deno.writeTextFile("output.js", main());