import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirect
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
export const redirect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/auth/social/redirecionar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirect
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirect.url = (options?: RouteQueryOptions) => {
    return redirect.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirect
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirect
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::callback
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:23
* @route '/auth/social/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/auth/social/callback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::callback
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:23
* @route '/auth/social/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::callback
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:23
* @route '/auth/social/callback'
*/
callback.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::callback
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:23
* @route '/auth/social/callback'
*/
callback.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(options),
    method: 'head',
})

const social = {
    redirect: Object.assign(redirect, redirect),
    callback: Object.assign(callback, callback),
}

export default social