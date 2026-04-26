import DashboardController from './DashboardController'
import AccountController from './AccountController'
import SettingsController from './SettingsController'
import TransactionController from './TransactionController'
import SpendingLimitController from './SpendingLimitController'
import BankConnectionController from './BankConnectionController'
import ProfileController from './ProfileController'
import PlanController from './PlanController'
import HelpController from './HelpController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    AccountController: Object.assign(AccountController, AccountController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    SpendingLimitController: Object.assign(SpendingLimitController, SpendingLimitController),
    BankConnectionController: Object.assign(BankConnectionController, BankConnectionController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    PlanController: Object.assign(PlanController, PlanController),
    HelpController: Object.assign(HelpController, HelpController),
}

export default App