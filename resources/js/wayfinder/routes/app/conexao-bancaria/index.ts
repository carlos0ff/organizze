import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::store
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:31
* @route '/app/conexao-bancaria'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/conexao-bancaria',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::store
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:31
* @route '/app/conexao-bancaria'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::store
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:31
* @route '/app/conexao-bancaria'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::destroy
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:47
* @route '/app/conexao-bancaria/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/conexao-bancaria/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::destroy
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:47
* @route '/app/conexao-bancaria/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::destroy
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:47
* @route '/app/conexao-bancaria/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const conexaoBancaria = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default conexaoBancaria