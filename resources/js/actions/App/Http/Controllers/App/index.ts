import DashboardController from './DashboardController'
import SettingsController from './SettingsController'
import AccountController from './AccountController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    AccountController: Object.assign(AccountController, AccountController),
}

export default App