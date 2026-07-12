import Fortify from './Fortify'
import Passkeys from './Passkeys'
import Sanctum from './Sanctum'

const Laravel = {
    Fortify: Object.assign(Fortify, Fortify),
    Passkeys: Object.assign(Passkeys, Passkeys),
    Sanctum: Object.assign(Sanctum, Sanctum),
}

export default Laravel