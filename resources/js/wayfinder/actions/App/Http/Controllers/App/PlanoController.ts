import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\PlanoController::index
* @see app/Http/Controllers/App/PlanoController.php:12
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
* @see \App\Http\Controllers\App\PlanoController::index
* @see app/Http/Controllers/App/PlanoController.php:12
* @route '/app/plano'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\PlanoController::index
* @see app/Http/Controllers/App/PlanoController.php:12
* @route '/app/plano'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\PlanoController::index
* @see app/Http/Controllers/App/PlanoController.php:12
* @route '/app/plano'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const PlanoController = { index }

export default PlanoController