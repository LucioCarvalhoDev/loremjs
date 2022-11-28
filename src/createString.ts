import Pool from "./repo/Pool.ts";

export default function createString() {
    return Pool.getFromSubject("generic");
}