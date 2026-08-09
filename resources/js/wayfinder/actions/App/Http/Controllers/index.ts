import Web from './Web'
import Blog from './Blog'
import Auth from './Auth'
import App from './App'

const Controllers = {
    Web: Object.assign(Web, Web),
    Blog: Object.assign(Blog, Blog),
    Auth: Object.assign(Auth, Auth),
    App: Object.assign(App, App),
}

export default Controllers