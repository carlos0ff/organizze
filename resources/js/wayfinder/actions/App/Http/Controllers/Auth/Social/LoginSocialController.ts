import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirecionar
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
export const redirecionar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirecionar.url(options),
    method: 'get',
})

redirecionar.definition = {
    methods: ["get","head"],
    url: '/auth/social/redirecionar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirecionar
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirecionar.url = (options?: RouteQueryOptions) => {
    return redirecionar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirecionar
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirecionar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirecionar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Social\LoginSocialController::redirecionar
* @see app/Http/Controllers/Auth/Social/LoginSocialController.php:15
* @route '/auth/social/redirecionar'
*/
redirecionar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirecionar.url(options),
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

const LoginSocialController = { redirecionar, callback }

export default LoginSocialController