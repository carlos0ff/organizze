import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
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
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:16
* @route '/auth/recuperar'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::enviar
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
export const enviar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enviar.url(options),
    method: 'post',
})

enviar.definition = {
    methods: ["post"],
    url: '/auth/recuperar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::enviar
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
enviar.url = (options?: RouteQueryOptions) => {
    return enviar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::enviar
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
enviar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enviar.url(options),
    method: 'post',
})

const RecuperarSenhaController = { index, enviar }

export default RecuperarSenhaController