import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
export const index = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auth/redefinir/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
index.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return index.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
index.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\Senha\RedefinirSenhaController::index
* @see app/Http/Controllers/Auth/Senha/RedefinirSenhaController.php:16
* @route '/auth/redefinir/{token}'
*/
index.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

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

const RedefinirSenhaController = { index, update }

export default RedefinirSenhaController