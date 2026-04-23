import AuthenticatedSessionController from './AuthenticatedSessionController'
import PasswordResetLinkController from './PasswordResetLinkController'
import NewPasswordController from './NewPasswordController'
import RegisteredUserController from './RegisteredUserController'
import ProfileInformationController from './ProfileInformationController'
import PasswordController from './PasswordController'
import ConfirmedPasswordStatusController from './ConfirmedPasswordStatusController'
import ConfirmablePasswordController from './ConfirmablePasswordController'
import TwoFactorAuthenticatedSessionController from './TwoFactorAuthenticatedSessionController'
import TwoFactorAuthenticationController from './TwoFactorAuthenticationController'
import ConfirmedTwoFactorAuthenticationController from './ConfirmedTwoFactorAuthenticationController'
import TwoFactorQrCodeController from './TwoFactorQrCodeController'
import TwoFactorSecretKeyController from './TwoFactorSecretKeyController'
import RecoveryCodeController from './RecoveryCodeController'

const Controllers = {
    AuthenticatedSessionController: Object.assign(AuthenticatedSessionController, AuthenticatedSessionController),
    PasswordResetLinkController: Object.assign(PasswordResetLinkController, PasswordResetLinkController),
    NewPasswordController: Object.assign(NewPasswordController, NewPasswordController),
    RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
    ProfileInformationController: Object.assign(ProfileInformationController, ProfileInformationController),
    PasswordController: Object.assign(PasswordController, PasswordController),
    ConfirmedPasswordStatusController: Object.assign(ConfirmedPasswordStatusController, ConfirmedPasswordStatusController),
    ConfirmablePasswordController: Object.assign(ConfirmablePasswordController, ConfirmablePasswordController),
    TwoFactorAuthenticatedSessionController: Object.assign(TwoFactorAuthenticatedSessionController, TwoFactorAuthenticatedSessionController),
    TwoFactorAuthenticationController: Object.assign(TwoFactorAuthenticationController, TwoFactorAuthenticationController),
    ConfirmedTwoFactorAuthenticationController: Object.assign(ConfirmedTwoFactorAuthenticationController, ConfirmedTwoFactorAuthenticationController),
    TwoFactorQrCodeController: Object.assign(TwoFactorQrCodeController, TwoFactorQrCodeController),
    TwoFactorSecretKeyController: Object.assign(TwoFactorSecretKeyController, TwoFactorSecretKeyController),
    RecoveryCodeController: Object.assign(RecoveryCodeController, RecoveryCodeController),
}

export default Controllers