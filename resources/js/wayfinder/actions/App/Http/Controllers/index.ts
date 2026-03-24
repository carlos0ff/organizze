import App from './App';
import Auth from './Auth';
import Blog from './Blog';

const Controllers = {
    Blog: Object.assign(Blog, Blog),
    Auth: Object.assign(Auth, Auth),
    App: Object.assign(App, App),
};

export default Controllers;
