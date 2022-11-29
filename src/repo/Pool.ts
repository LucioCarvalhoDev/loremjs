const entries = await Deno.readTextFileSync("data/word-pool.csv").split('\n');

const Pool = {
    default: new Map<string, string[]>(),
    buff: [] as string[],
    getFromSubject: function (subject: string) {
        const res = [];
        for (const lex of Pool.default) {
            if (lex[1].includes(subject) || subject == "any") {
                res.push(lex[0]);
            }
        }

        return res[Math.floor(Math.random() * res.length)];
    },
    subjectList: function () {
        const res: Set<string> = new Set();
        for (const pair of Pool.default) {
            pair[1].forEach(sub => res.add(sub))
        }
        return Array.from(res);
    }
}

for (const line of entries) {
    const [word, subjects] = line.trim().split(",");
    Pool.default.set(word, subjects.split(" "));
}


export default Pool;