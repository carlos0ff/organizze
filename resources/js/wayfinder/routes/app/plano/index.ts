import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Plano\PlanoController::store
* @see app/Http/Controllers/App/Plano/PlanoController.php:31
* @route '/app/plano'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/plano',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::store
* @see app/Http/Controllers/App/Plano/PlanoController.php:31
* @route '/app/plano'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::store
* @see app/Http/Controllers/App/Plano/PlanoController.php:31
* @route '/app/plano'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::cancelar
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
export const cancelar = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancelar.url(options),
    method: 'delete',
})

cancelar.definition = {
    methods: ["delete"],
    url: '/app/plano',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::cancelar
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
cancelar.url = (options?: RouteQueryOptions) => {
    return cancelar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::cancelar
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
cancelar.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancelar.url(options),
    method: 'delete',
})

const plano = {
    store: Object.assign(store, store),
    cancelar: Object.assign(cancelar, cancelar),
}

export default plano