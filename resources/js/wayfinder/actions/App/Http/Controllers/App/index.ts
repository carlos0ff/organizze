import DashboardController from './DashboardController'
import Conta from './Conta'
import Configuracoes from './Configuracoes'
import Lancamento from './Lancamento'
import LimiteGastosController from './LimiteGastosController'
import ConexaoBancariaController from './ConexaoBancariaController'
import PerfilController from './PerfilController'
import PlanoController from './PlanoController'

const App = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    Conta: Object.assign(Conta, Conta),
    Configuracoes: Object.assign(Configuracoes, Configuracoes),
    Lancamento: Object.assign(Lancamento, Lancamento),
    LimiteGastosController: Object.assign(LimiteGastosController, LimiteGastosController),
    ConexaoBancariaController: Object.assign(ConexaoBancariaController, ConexaoBancariaController),
    PerfilController: Object.assign(PerfilController, PerfilController),
    PlanoController: Object.assign(PlanoController, PlanoController),
}

export default App