import { applyUrlDefaults, queryParams, type RouteDefinition, type RouteQueryOptions } from './../../../../../wayfinder';
/**
 * @see \App\Http\Controllers\Blog\BlogController::index
 * @see app/Http/Controllers/Blog/BlogController.php:15
 * @route '/blog'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});

index.definition = {
    methods: ['get', 'head'],
    url: '/blog',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Blog\BlogController::index
 * @see app/Http/Controllers/Blog/BlogController.php:15
 * @route '/blog'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Blog\BlogController::index
 * @see app/Http/Controllers/Blog/BlogController.php:15
 * @route '/blog'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Blog\BlogController::index
 * @see app/Http/Controllers/Blog/BlogController.php:15
 * @route '/blog'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post/{slug}'
 */
export const post = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
});

post.definition = {
    methods: ['get', 'head'],
    url: '/blog/post/{slug}',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post/{slug}'
 */
post.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args };
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        slug: args.slug,
    };

    return post.definition.url.replace('{slug}', parsedArgs.slug.toString()).replace(/\/+$/, '') + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post/{slug}'
 */
post.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post/{slug}'
 */
post.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(args, options),
    method: 'head',
});

const BlogController = { index, post };

export default BlogController;
