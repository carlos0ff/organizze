import BlogController from './BlogController'
import CategoryController from './CategoryController'

const Blog = {
    BlogController: Object.assign(BlogController, BlogController),
    CategoryController: Object.assign(CategoryController, CategoryController),
}

export default Blog