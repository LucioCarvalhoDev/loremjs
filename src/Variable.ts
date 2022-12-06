import { args } from "../main.ts"
import { Type } from "./createVariable.ts"

interface VariableTemplate<t> {
    mode: "let" | "const",
    identifier: string,
    content: t | undefined,
    subject: string,
    dataType: Type,
}

export default class Variable<t> {
    readonly mode: string
    readonly identifier: string
    public content: t | undefined
    public subject: string
    public dataType: Type

    constructor(obj: VariableTemplate<t>) {
        this.mode = obj.mode,
            this.identifier = obj.identifier,
            this.content = obj.content,
            this.subject = obj.subject,
            this.dataType = obj.dataType
    }

    print() {
        if (args["d"] || args["debug"]) {
            return this._debug();
        } else {
            return this._display();
        }
    }

    private _display() {
        return (`${this.mode} ${this.identifier} = ${this.content};`)
    }

    private _debug() {
        return (`${this.mode} ${this.identifier} = ${this.content}; // ${this.dataType}::${this.subject}`)
    }
}