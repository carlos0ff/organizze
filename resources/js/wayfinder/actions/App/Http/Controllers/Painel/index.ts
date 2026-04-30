import DashboardController from './DashboardController'
import UsuarioController from './UsuarioController'
import RelatorioController from './RelatorioController'

const Painel = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    UsuarioController: Object.assign(UsuarioController, UsuarioController),
    RelatorioController: Object.assign(RelatorioController, RelatorioController),
}

export default Painel