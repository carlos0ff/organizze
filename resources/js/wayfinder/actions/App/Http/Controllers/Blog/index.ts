import BlogController from './BlogController'
import Categoria from './Categoria'

const Blog = {
    BlogController: Object.assign(BlogController, BlogController),
    Categoria: Object.assign(Categoria, Categoria),
}

export default Blog