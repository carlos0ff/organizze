import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
const ListPostsController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController.url(options),
    method: 'get',
})

ListPostsController.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController.url = (options?: RouteQueryOptions) => {
    return ListPostsController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostsController.url(options),
    method: 'head',
})

export default ListPostsController