import ExibirConfiguracoesController from './ExibirConfiguracoesController'
import AtualizarConfiguracoesController from './AtualizarConfiguracoesController'
import AlterarSenhaController from './AlterarSenhaController'
import ExcluirContaController from './ExcluirContaController'

const Configuracoes = {
    ExibirConfiguracoesController: Object.assign(ExibirConfiguracoesController, ExibirConfiguracoesController),
    AtualizarConfiguracoesController: Object.assign(AtualizarConfiguracoesController, AtualizarConfiguracoesController),
    AlterarSenhaController: Object.assign(AlterarSenhaController, AlterarSenhaController),
    ExcluirContaController: Object.assign(ExcluirContaController, ExcluirContaController),
}

export default Configuracoes