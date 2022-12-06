export default function createConditional() {
    let res = (
        `if (#1) {
#2
}`)
    return res
}

console.log(createConditional())