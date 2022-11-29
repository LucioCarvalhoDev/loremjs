import Pool from "./repo/Pool.ts";

export default function createString(sub: string) {
    return Pool.getFromSubject(sub);
}