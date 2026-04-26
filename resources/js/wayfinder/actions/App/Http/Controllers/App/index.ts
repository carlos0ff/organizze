import DashboardController from './DashboardController'
import Account from './Account'
import SettingsController from './SettingsController'
import Transaction from './Transaction'
import SpendingLimitController from './SpendingLimitController'
import BankConnectionController from './BankConnectionController'
import ProfileController from './ProfileController'
import PlanController from './PlanController'
import HelpController from './HelpController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    Account: Object.assign(Account, Account),
    SettingsController: Object.assign(SettingsController, SettingsController),
    Transaction: Object.assign(Transaction, Transaction),
    SpendingLimitController: Object.assign(SpendingLimitController, SpendingLimitController),
    BankConnectionController: Object.assign(BankConnectionController, BankConnectionController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    PlanController: Object.assign(PlanController, PlanController),
    HelpController: Object.assign(HelpController, HelpController),
}

export default App