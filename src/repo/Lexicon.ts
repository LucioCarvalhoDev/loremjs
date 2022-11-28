const entries = await Deno.readTextFileSync("data/var-names.csv").split('\n');


const Lexicon = {
    scopes: new Map<string, Map<string, string[]>>([]),
    query: function (tag: string, scope = "global") {
        const scope_map = Lexicon.scopes.get(scope);
        const res = [];
        if (scope_map != undefined) {
            for (const lex of scope_map) {
                if (lex[1].includes(tag)) {
                    res.push(lex[0]);
                }
            }
        }
        return res;
    }
};
const init = new Map<string, string[]>();

for (const line in entries) {
    const [name, tags] = entries[line].trim().split(",");
    init.set(name, tags.split(" "))
}
Lexicon.scopes.set("global", init)

export default Lexicon;