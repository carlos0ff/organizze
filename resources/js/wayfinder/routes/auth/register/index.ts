import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisterController::form
* @see app/Http/Controllers/Auth/RegisterController.php:15
* @route '/auth/cadastro'
*/
export const form = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(options),
    method: 'get',
})

form.definition = {
    methods: ["get","head"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::form
* @see app/Http/Controllers/Auth/RegisterController.php:15
* @route '/auth/cadastro'
*/
form.url = (options?: RouteQueryOptions) => {
    return form.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::form
* @see app/Http/Controllers/Auth/RegisterController.php:15
* @route '/auth/cadastro'
*/
form.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::form
* @see app/Http/Controllers/Auth/RegisterController.php:15
* @route '/auth/cadastro'
*/
form.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: form.url(options),
    method: 'head',
})

