import DashboardController from './DashboardController'
import SettingsController from './SettingsController'
import AccountController from './AccountController'
import CartaoCreditoController from './CartaoCreditoController'
import SubscriptionController from './SubscriptionController'
import TransactionController from './TransactionController'
import BudgetController from './BudgetController'
import BankConnectionController from './BankConnectionController'
import NotificationController from './NotificationController'
import ProfileController from './ProfileController'
import SuporteController from './SuporteController'
import ReportController from './ReportController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    AccountController: Object.assign(AccountController, AccountController),
    CartaoCreditoController: Object.assign(CartaoCreditoController, CartaoCreditoController),
    SubscriptionController: Object.assign(SubscriptionController, SubscriptionController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    BudgetController: Object.assign(BudgetController, BudgetController),
    BankConnectionController: Object.assign(BankConnectionController, BankConnectionController),
    NotificationController: Object.assign(NotificationController, NotificationController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    SuporteController: Object.assign(SuporteController, SuporteController),
    ReportController: Object.assign(ReportController, ReportController),
}

export default App