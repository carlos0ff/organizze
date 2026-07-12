import LoginController from './LoginController'
import RegisterController from './RegisterController'
import ForgotPasswordController from './ForgotPasswordController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    RegisterController: Object.assign(RegisterController, RegisterController),
    ForgotPasswordController: Object.assign(ForgotPasswordController, ForgotPasswordController),
}

export default Auth