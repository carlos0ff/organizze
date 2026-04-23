import Api from './Api'
import Blog from './Blog'
import Auth from './Auth'
import Panel from './Panel'
import App from './App'

const Controllers = {
    Api: Object.assign(Api, Api),
    Blog: Object.assign(Blog, Blog),
    Auth: Object.assign(Auth, Auth),
    Panel: Object.assign(Panel, Panel),
    App: Object.assign(App, App),
}

export default Controllers