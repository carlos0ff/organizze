import ListPostsController from './ListPostsController'
import ShowPostController from './ShowPostController'

const Post = {
    ListPostsController: Object.assign(ListPostsController, ListPostsController),
    ShowPostController: Object.assign(ShowPostController, ShowPostController),
}

export default Post