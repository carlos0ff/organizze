import DashboardController from './DashboardController'
import AccountController from './AccountController'
import SettingsController from './SettingsController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    AccountController: Object.assign(AccountController, AccountController),
    SettingsController: Object.assign(SettingsController, SettingsController),
}

export default App