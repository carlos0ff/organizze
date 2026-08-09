import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Plano\PlanoController::index
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/plano',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::index
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::index
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::index
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

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
* @see \App\Http\Controllers\App\Plano\PlanoController::destroy
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/plano',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::destroy
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::destroy
* @see app/Http/Controllers/App/Plano/PlanoController.php:39
* @route '/app/plano'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

const PlanoController = { index, store, destroy }

export default PlanoController