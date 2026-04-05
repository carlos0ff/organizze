import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
const ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.url = (options?: RouteQueryOptions) => {
    return ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/posts'
*/
const ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.url(options),
    method: 'get',
})

ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.definition = {
    methods: ["get","head"],
    url: '/blog/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/posts'
*/
ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.url = (options?: RouteQueryOptions) => {
    return ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/posts'
*/
ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/posts'
*/
ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a.url(options),
    method: 'head',
})

const ListPostsController = {
    '/blog': ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4,
    '/blog/posts': ListPostsControllerbfdd1ad64951e3f4de40d9fea1c98a9a,
}

export default ListPostsController