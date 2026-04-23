import DashboardController from './DashboardController'
import AccountController from './AccountController'
import SettingsController from './SettingsController'
import TransactionController from './TransactionController'
import SpendingLimitController from './SpendingLimitController'
import BankConnectionController from './BankConnectionController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    AccountController: Object.assign(AccountController, AccountController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    SpendingLimitController: Object.assign(SpendingLimitController, SpendingLimitController),
    BankConnectionController: Object.assign(BankConnectionController, BankConnectionController),
}

export default App