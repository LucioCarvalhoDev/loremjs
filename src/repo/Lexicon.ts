import {

    parse,
    parse as parseCsv

} from 'https://deno.land/std@0.82.0/encoding/csv.ts';

const rawData = await parse(await Deno.readTextFileSync("data/var-names.csv"), { skipFirstRow: true }) as [{ identifier: string, types: string, subjects: string }];
const defaultData = rawData.map(varInfo => {
    const formatedInfo = {
        identifier: varInfo.identifier,
        types: varInfo.types.split(" "),
        subjects: varInfo.subjects.split(" ").filter(val => val != "")
    }

    return formatedInfo
}, [])

const Lexicon = {
    scopes: new Map<string, Map<string, [string[], string[]]>>([]),
    query: function (type: string, subject = "any", scope = "global") {
        const scope_map = Lexicon.scopes.get(scope);
        const res: string[] = [];
        if (scope_map != undefined) {
            for (const lex of scope_map) {
                // if (lex[1][0].findIndex(type) != -1) {
                //     res.push(lex[0]);
                // }
                if (lex[1][0].includes(type) && (lex[1][1].includes(subject) || subject == "any")) {
                    res.push(lex[0])
                }
            }
        }
        return res;
    },
    getType: function (identifier: string, scope = "global") {
        const scope_map = Lexicon.scopes.get(scope);
        if (scope_map != undefined) {
            for (const pair of scope_map) {
                if (pair[0] == identifier)
                    return pair[1][0]
            }
        }
        throw `Identifier ${identifier} not fount`
    },
    getSubjects: function (identifier: string, scope = "global") {
        const scope_map = Lexicon.scopes.get(scope);
        if (scope_map != undefined) {
            for (const pair of scope_map) {
                if (pair[0] == identifier)
                    return pair[1][1]
            }
        }
        throw `Identifier ${identifier} not found`
    },
};
const init = new Map<string, [string[], string[]]>();

for (const line of defaultData) {
    init.set(line.identifier, [line.types, line.subjects])
}
Lexicon.scopes.set("global", init)

export default Lexicon;