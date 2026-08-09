import AjudaController from './AjudaController'
import ChamadoController from './ChamadoController'

const Suporte = {
    AjudaController: Object.assign(AjudaController, AjudaController),
    ChamadoController: Object.assign(ChamadoController, ChamadoController),
}

export default Suporte