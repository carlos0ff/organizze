import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::send
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/auth/recuperar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::send
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RecuperarSenhaController::send
* @see app/Http/Controllers/Auth/Senha/RecuperarSenhaController.php:24
* @route '/auth/recuperar'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

const forgot = {
    send: Object.assign(send, send),
}

export default forgot