import cartoes from './cartoes'
import preferencias from './preferencias'
import plano from './plano'
import tags from './tags'
import alertas from './alertas'
import atividades from './atividades'

const configuracoes = {
    cartoes: Object.assign(cartoes, cartoes),
    preferencias: Object.assign(preferencias, preferencias),
    plano: Object.assign(plano, plano),
    tags: Object.assign(tags, tags),
    alertas: Object.assign(alertas, alertas),
    atividades: Object.assign(atividades, atividades),
}

export default configuracoes