import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
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
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
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
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
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
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
post.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ShowPostController::__invoke
* @see app/Http/Controllers/Blog/Post/ShowPostController.php:11
* @route '/blog/post/{slug}'
*/
post.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
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
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
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
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/categoria/{category}'
*/
category.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: category.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/categoria/{category}'
*/
category.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: category.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/artigos'
*/
export const articles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articles.url(options),
    method: 'get',
})

articles.definition = {
    methods: ["get","head"],
    url: '/blog/artigos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/artigos'
*/
articles.url = (options?: RouteQueryOptions) => {
    return articles.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/artigos'
*/
articles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articles.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\Post\ListPostsController::__invoke
* @see app/Http/Controllers/Blog/Post/ListPostsController.php:14
* @route '/blog/artigos'
*/
articles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articles.url(options),
    method: 'head',
})

const blog = {
    home: Object.assign(home, home),
    post: Object.assign(post, post),
    category: Object.assign(category, category),
    articles: Object.assign(articles, articles),
}

export default blog