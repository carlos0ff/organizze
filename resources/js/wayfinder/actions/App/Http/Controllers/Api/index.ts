import AuthController from './AuthController'
import TransactionController from './TransactionController'
import SpendingLimitController from './SpendingLimitController'

const Api = {
    AuthController: Object.assign(AuthController, AuthController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    SpendingLimitController: Object.assign(SpendingLimitController, SpendingLimitController),
}

export default Api