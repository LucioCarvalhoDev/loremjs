interface VariableTemplate<t> {
    mode: "let" | "const",
    identifier: string,
    content?: t
}

export default class Variable<t> {
    readonly mode: string
    readonly identifier: string
    public content: t | undefined

    constructor(obj: VariableTemplate<t>) {
        this.mode = obj.mode,
            this.identifier = obj.identifier,
            this.content = obj.content
    }

    hasString() {
        return (`${this.mode} ${this.identifier} = ${this.content};`)
    }
}