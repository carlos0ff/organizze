import Api from './Api'
import Blog from './Blog'
import Auth from './Auth'
import Painel from './Painel'
import App from './App'

const Controllers = {
    Api: Object.assign(Api, Api),
    Blog: Object.assign(Blog, Blog),
    Auth: Object.assign(Auth, Auth),
    Painel: Object.assign(Painel, Painel),
    App: Object.assign(App, App),
}

export default Controllers