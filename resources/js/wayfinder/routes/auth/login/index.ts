import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LoginController::form
* @see app/Http/Controllers/Auth/LoginController.php:20
* @route '/auth/entrar'
*/
export const form = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(options),
    method: 'get',
})

form.definition = {
    methods: ["get","head"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::form
* @see app/Http/Controllers/Auth/LoginController.php:20
* @route '/auth/entrar'
*/
form.url = (options?: RouteQueryOptions) => {
    return form.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::form
* @see app/Http/Controllers/Auth/LoginController.php:20
* @route '/auth/entrar'
*/
form.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\LoginController::form
* @see app/Http/Controllers/Auth/LoginController.php:20
* @route '/auth/entrar'
*/
form.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: form.url(options),
    method: 'head',
})

