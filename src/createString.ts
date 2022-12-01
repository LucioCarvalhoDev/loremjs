import generatePath from "./data/string/path.ts";
import Pool from "./repo/Pool.ts";

export default function createString(sub: string) {
    if (sub == "path") {
        return generatePath();
    } else {
        return Pool.getFromSubject(sub);
    }
}