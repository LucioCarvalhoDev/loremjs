import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

Deno.test("output", async () => {
    const cmd = "deno run --allow-read --allow-write main.ts -op".split(" ");


    for (let i = 0; i < 50; i++) {
        const p = Deno.run({ cmd, stdout: "piped" });
        const p_status = await p.status();
        const fakeCode = new TextDecoder().decode(await p.output());
        p.close();

        const d = Deno.run({
            cmd: "deno run output.js".split(" "),
            stdout: "null"
        })
        const d_status = await d.status();
        d.close();
        assertEquals(d_status.code, 0, d_status.code == 0 ? undefined : fakeCode);
    }
})