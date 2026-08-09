import Login from './Login'
import Registro from './Registro'
import Senha from './Senha'
import Social from './Social'

const Auth = {
    Login: Object.assign(Login, Login),
    Registro: Object.assign(Registro, Registro),
    Senha: Object.assign(Senha, Senha),
    Social: Object.assign(Social, Social),
}

export default Auth