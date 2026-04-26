import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
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
* @route '/blog/categoria/{category}'
*/
const ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152 = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.url(args, options),
    method: 'get',
})

ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.definition = {
    methods: ["get","head"],
    url: '/blog/categoria/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/categoria/{category}'
*/
ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: args.category,
    }

    return ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/categoria/{category}'
*/
ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/categoria/{category}'
*/
ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/artigos'
*/
const ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.url(options),
    method: 'get',
})

ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.definition = {
    methods: ["get","head"],
    url: '/blog/artigos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/artigos'
*/
ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.url = (options?: RouteQueryOptions) => {
    return ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/artigos'
*/
ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog/artigos'
*/
ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125.url(options),
    method: 'head',
})

const ListPostsController = {
    '/blog': ListPostsController0281689d11c3db12eb0f0bc21b3e4ed4,
    '/blog/categoria/{category}': ListPostsController8b8b0aaf3d778c86dd5b4b2d9cdc3152,
    '/blog/artigos': ListPostsControllerff59f9de7d174cf68e8b1ecde5aae125,
}

export default ListPostsController