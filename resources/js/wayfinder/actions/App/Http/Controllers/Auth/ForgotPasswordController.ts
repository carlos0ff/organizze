import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::index
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auth/recuperar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::index
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::index
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::index
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const ForgotPasswordController = { index }

export default ForgotPasswordController