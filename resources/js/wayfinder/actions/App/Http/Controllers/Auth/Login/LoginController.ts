import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Login\LoginController::index
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::index
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::index
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::index
* @see app/Http/Controllers/Auth/Login/LoginController.php:20
* @route '/auth/entrar'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
export const authenticate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

authenticate.definition = {
    methods: ["post"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
authenticate.url = (options?: RouteQueryOptions) => {
    return authenticate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::authenticate
* @see app/Http/Controllers/Auth/Login/LoginController.php:30
* @route '/auth/entrar'
*/
authenticate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: authenticate.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/auth/sair',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Login\LoginController::logout
* @see app/Http/Controllers/Auth/Login/LoginController.php:57
* @route '/auth/sair'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

const LoginController = { index, authenticate, logout }

export default LoginController