import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::update
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:24
* @route '/auth/redefinir'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/auth/redefinir',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::update
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:24
* @route '/auth/redefinir'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::update
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:24
* @route '/auth/redefinir'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

const reset = {
    update: Object.assign(update, update),
}

export default reset