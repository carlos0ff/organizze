import { queryParams, type RouteDefinition, type RouteQueryOptions } from './../../../../../wayfinder';
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
 * @route '/blog/post'
 */
export const post = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(options),
    method: 'get',
});

post.definition = {
    methods: ['get', 'head'],
    url: '/blog/post',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post'
 */
post.url = (options?: RouteQueryOptions) => {
    return post.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post'
 */
post.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: post.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Blog\BlogController::post
 * @see app/Http/Controllers/Blog/BlogController.php:24
 * @route '/blog/post'
 */
post.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: post.url(options),
    method: 'head',
});

const BlogController = { index, post };

export default BlogController;
