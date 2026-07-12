import DashboardController from './DashboardController'
import SettingsController from './SettingsController'
import AccountController from './AccountController'
import SubscriptionController from './SubscriptionController'
import TransactionController from './TransactionController'
import BudgetController from './BudgetController'
import BankConnectionController from './BankConnectionController'
import ProfileController from './ProfileController'
import ReportController from './ReportController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    AccountController: Object.assign(AccountController, AccountController),
    SubscriptionController: Object.assign(SubscriptionController, SubscriptionController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    BudgetController: Object.assign(BudgetController, BudgetController),
    BankConnectionController: Object.assign(BankConnectionController, BankConnectionController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    ReportController: Object.assign(ReportController, ReportController),
}

export default App