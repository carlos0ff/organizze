import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:16
* @route '/blog'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:13
* @route '/blog/post/{slug}'
*/
export const post = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
})

post.definition = {
    methods: ["get","head"],
    url: '/blog/post/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:13
* @route '/blog/post/{slug}'
*/
post.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return post.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:13
* @route '/blog/post/{slug}'
*/
post.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:13
* @route '/blog/post/{slug}'
*/
post.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(args, options),
    method: 'head',
})

const blog = {
    home: Object.assign(home, home),
    post: Object.assign(post, post),
}

export default blog