import Dashboard from './Dashboard'
import Conta from './Conta'
import Lancamento from './Lancamento'
import CartaoCredito from './CartaoCredito'
import Categorias from './Categorias'
import Relatorio from './Relatorio'
import LimiteGastos from './LimiteGastos'
import Perfil from './Perfil'
import Configuracoes from './Configuracoes'
import ConexaoBancaria from './ConexaoBancaria'
import Plano from './Plano'
import Suporte from './Suporte'

const App = {
    Dashboard: Object.assign(Dashboard, Dashboard),
    Conta: Object.assign(Conta, Conta),
    Lancamento: Object.assign(Lancamento, Lancamento),
    CartaoCredito: Object.assign(CartaoCredito, CartaoCredito),
    Categorias: Object.assign(Categorias, Categorias),
    Relatorio: Object.assign(Relatorio, Relatorio),
    LimiteGastos: Object.assign(LimiteGastos, LimiteGastos),
    Perfil: Object.assign(Perfil, Perfil),
    Configuracoes: Object.assign(Configuracoes, Configuracoes),
    ConexaoBancaria: Object.assign(ConexaoBancaria, ConexaoBancaria),
    Plano: Object.assign(Plano, Plano),
    Suporte: Object.assign(Suporte, Suporte),
}

export default App