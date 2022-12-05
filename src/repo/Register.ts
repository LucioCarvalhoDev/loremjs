import Variable from "../Variable.ts";


const Register = {
    global: new Map<string, Variable<any>>()
}

export default Register;