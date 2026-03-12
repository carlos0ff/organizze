import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisterController::index
* @see app/Http/Controllers/Auth/RegisterController.php:14
* @route '/auth/cadastro'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::index
* @see app/Http/Controllers/Auth/RegisterController.php:14
* @route '/auth/cadastro'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::index
* @see app/Http/Controllers/Auth/RegisterController.php:14
* @route '/auth/cadastro'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::index
* @see app/Http/Controllers/Auth/RegisterController.php:14
* @route '/auth/cadastro'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::authenticate
* @see app/Http/Controllers/Auth/RegisterController.php:0
* @route '/auth/cadastro'
*/
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

authenticate.definition = {
    methods: ["post"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::authenticate
* @see app/Http/Controllers/Auth/RegisterController.php:0
* @route '/auth/cadastro'
*/
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::authenticate
* @see app/Http/Controllers/Auth/RegisterController.php:0
* @route '/auth/cadastro'
*/
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

const RegisterController = { index, authenticate }

export default RegisterController