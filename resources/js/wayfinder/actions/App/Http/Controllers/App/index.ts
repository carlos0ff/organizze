import AccountController from './AccountController';
import DashboardController from './DashboardController';
import SettingsController from './SettingsController';

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    AccountController: Object.assign(AccountController, AccountController),
};

export default App;
