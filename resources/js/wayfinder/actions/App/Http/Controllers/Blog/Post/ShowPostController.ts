import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
const ShowPostController = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPostController.url(args, options),
    method: 'get',
})

ShowPostController.definition = {
    methods: ["get","head"],
    url: '/blog/post/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
ShowPostController.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ShowPostController.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
ShowPostController.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ShowPostController.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
ShowPostController.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ShowPostController.url(args, options),
    method: 'head',
})

export default ShowPostController