import generatePath from "../../data/string/path.ts";
import Pool from "../../repo/Pool.ts";
import createWord from "./word.ts";

export default function createString(sub?: string) {
    if (sub == "path") {
        return generatePath();
    } else if (sub) {
        return Pool.getFromSubject(sub)
    } else {
        return createWord();
    }
}