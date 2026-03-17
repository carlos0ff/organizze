import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\BlogController::home
* @see app/Http/Controllers/Blog/BlogController.php:15
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
* @see \App\Http\Controllers\Blog\BlogController::home
* @see app/Http/Controllers/Blog/BlogController.php:15
* @route '/blog'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\BlogController::home
* @see app/Http/Controllers/Blog/BlogController.php:15
* @route '/blog'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\BlogController::home
* @see app/Http/Controllers/Blog/BlogController.php:15
* @route '/blog'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\BlogController::post
* @see app/Http/Controllers/Blog/BlogController.php:24
* @route '/blog/post'
*/
export const post = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(options),
    method: 'get',
})

post.definition = {
    methods: ["get","head"],
    url: '/blog/post',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\BlogController::post
* @see app/Http/Controllers/Blog/BlogController.php:24
* @route '/blog/post'
*/
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\BlogController::post
* @see app/Http/Controllers/Blog/BlogController.php:24
* @route '/blog/post'
*/
post.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\BlogController::post
* @see app/Http/Controllers/Blog/BlogController.php:24
* @route '/blog/post'
*/
post.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\CategoryController::category
* @see app/Http/Controllers/Blog/CategoryController.php:38
* @route '/blog/categoria/{category}'
*/
export const category = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

category.definition = {
    methods: ["get","head"],
    url: '/blog/categoria/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\CategoryController::category
* @see app/Http/Controllers/Blog/CategoryController.php:38
* @route '/blog/categoria/{category}'
*/
category.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return category.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\CategoryController::category
* @see app/Http/Controllers/Blog/CategoryController.php:38
* @route '/blog/categoria/{category}'
*/
category.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\CategoryController::category
* @see app/Http/Controllers/Blog/CategoryController.php:38
* @route '/blog/categoria/{category}'
*/
category.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

const blog = {
    home: Object.assign(home, home),
    post: Object.assign(post, post),
    category: Object.assign(category, category),
}

export default blog