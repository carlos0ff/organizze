import Blog from './Blog'
import App from './App'
import Auth from './Auth'

const Controllers = {
    Blog: Object.assign(Blog, Blog),
    App: Object.assign(App, App),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers