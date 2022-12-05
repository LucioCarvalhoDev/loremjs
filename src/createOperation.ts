import { chance } from "./lib/random.ts";
import Register from "./repo/Register.ts";

const op = {
    string: {
        methods: [
            "toUpperCase()",
            "toLowerCase()",
            "trim()"
        ]
    }
}

export default function createOperation(type: "string" | "number") {
    let res = "";
    let possibleVars = Array.from(Register.global);

    switch (type) {
        case "string": {
            possibleVars = possibleVars.filter(el => {
                return isNaN(+el[1].content)
            });

            let q = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < q; i++) {
                if (i > 0)
                    res += " + ";

                if (possibleVars.length == 0) {
                    res += '"placeholder"'; // substituir por gerador de palavras
                } else {
                    const var1 = possibleVars[Math.floor(Math.random() * possibleVars.length)][1];
                    res += var1.identifier;
                    if (chance(0.5)) {
                        res += "." + op.string.methods[Math.floor(Math.random() * op.string.methods.length)]
                    }

                }
            }
        }
    }

    return (res)
}