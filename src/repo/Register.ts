import Variable from "../Variable.ts";


const Register = {
    scopes: new Map<string, Map<string, Variable<any>>>(),
    getScope: function (name = "global") {
        let scope = this.scopes.get(name);
        if (scope == undefined) {
            scope = new Map();
        }
        return Array.from(scope)
    },
    exists: function (identifier: string, scope = "global") {
        const list = this.getScope(scope);
        return list.map(val => val[0]).includes(identifier);
    },
    setOn: function (variable: Variable<any>, scope = "global") {
        if (this.getScope(scope) != undefined) {
            this.scopes.get(scope)?.set(variable.identifier, variable)
        }
    },
    newScope() {
        const size = this.scopes.size;
        const name = `randScp${size}`;
        this.scopes.set(name, new Map());
        return name;
    }
}

Register.scopes.set("global", new Map())
export default Register;