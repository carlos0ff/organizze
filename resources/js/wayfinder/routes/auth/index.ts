import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\LoginController::login
* @see app/Http/Controllers/Auth/LoginController.php:30
* @route '/auth/entrar'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/auth/entrar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\LoginController::login
* @see app/Http/Controllers/Auth/LoginController.php:30
* @route '/auth/entrar'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\LoginController::login
* @see app/Http/Controllers/Auth/LoginController.php:30
* @route '/auth/entrar'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:20
* @route '/auth/cadastro'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/auth/cadastro',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:20
* @route '/auth/cadastro'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::register
* @see app/Http/Controllers/Auth/RegisterController.php:20
* @route '/auth/cadastro'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
export const forget = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forget.url(options),
    method: 'get',
})

forget.definition = {
    methods: ["get","head"],
    url: '/auth/recuperar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
forget.url = (options?: RouteQueryOptions) => {
    return forget.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
forget.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forget.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ForgotPasswordController::forget
* @see app/Http/Controllers/Auth/ForgotPasswordController.php:15
* @route '/auth/recuperar'
*/
forget.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forget.url(options),
    method: 'head',
})

const auth = {
    login: Object.assign(login, login),
    register: Object.assign(register, register),
    forget: Object.assign(forget, forget),
}

export default auth