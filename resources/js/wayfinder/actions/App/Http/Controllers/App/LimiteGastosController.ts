import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastosController.php:16
* @route '/app/limites-gastos'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/limites-gastos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastosController.php:16
* @route '/app/limites-gastos'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastosController.php:16
* @route '/app/limites-gastos'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\LimiteGastosController::index
* @see app/Http/Controllers/App/LimiteGastosController.php:16
* @route '/app/limites-gastos'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const LimiteGastosController = { index }

export default LimiteGastosController