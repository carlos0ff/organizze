import ForgotPasswordController from './ForgotPasswordController';
import LoginController from './LoginController';
import RegisterController from './RegisterController';

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    RegisterController: Object.assign(RegisterController, RegisterController),
    ForgotPasswordController: Object.assign(ForgotPasswordController, ForgotPasswordController),
};

export default Auth;
