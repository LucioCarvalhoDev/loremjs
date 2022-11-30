interface VariableTemplate<t> {
    mode: "let" | "const",
    identifier: string,
    content: t | undefined,
    subject: string
}

export default class Variable<t> {
    readonly mode: string
    readonly identifier: string
    public content: t | undefined
    public subject: string

    constructor(obj: VariableTemplate<t>) {
        this.mode = obj.mode,
            this.identifier = obj.identifier,
            this.content = obj.content,
            this.subject = obj.subject
    }

    display() {
        return (`${this.mode} ${this.identifier} = ${this.content};`)
    }

    debug() {
        return (`${this.mode} ${this.identifier} = ${this.content}; // ${this.subject}`)
    }
}