import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { repeat } from "https://deno.land/std@0.82.0/bytes/mod.ts";

Deno.test("integridade do output", async () => {
    let i = 100;

    Deno.writeTextFileSync("error_log.txt", "");
    const SOURCE = Deno.readTextFileSync("output.js");

    const p = Deno.run({
        cmd: [
            "deno",
            "run",
            "output.js"
        ],
        stdout: "piped",
        stderr: "piped",

    })

    const { code } = await p.status();
    const rawOutput = await p.output();
    const rawError = await p.stderrOutput();
    console.log(code)

    if (code === 0) {
        await Deno.stdout.write(rawOutput);
        
    } else {
        const msg = new TextDecoder().decode(rawOutput);
        await Deno.writeTextFileSync("error_log.txt", msg);
    }
    assertEquals(code, 0)
    p.close()

});