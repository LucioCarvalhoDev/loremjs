import createWord from "./createWord.ts";

export default function generatePath() {
    const templates = [
        "/home",
        "",
        "~",
        ".",
        ".."
    ]

    let path = templates[Math.floor(Math.random() * templates.length)];
    for (let i = Math.floor(Math.random() * 6) + 1; i > 0; i--) {
        path += "/" + createWord();
    }
    return path;

}