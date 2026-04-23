import DashboardController from './DashboardController'
import UserController from './UserController'
import ReportController from './ReportController'

const Panel = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    UserController: Object.assign(UserController, UserController),
    ReportController: Object.assign(ReportController, ReportController),
}

export default Panel