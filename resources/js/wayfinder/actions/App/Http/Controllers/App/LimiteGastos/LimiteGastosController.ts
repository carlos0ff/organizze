import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/limites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::store
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:32
* @route '/app/limites'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/limites',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::store
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:32
* @route '/app/limites'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::store
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:32
* @route '/app/limites'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::update
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:57
* @route '/app/limites/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/limites/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::update
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:57
* @route '/app/limites/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::update
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:57
* @route '/app/limites/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::destroy
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:65
* @route '/app/limites/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/limites/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::destroy
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:65
* @route '/app/limites/{id}'
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
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::destroy
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:65
* @route '/app/limites/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const LimiteGastosController = { index, store, update, destroy }

export default LimiteGastosController