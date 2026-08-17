import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\CartaoCreditoController::index
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/cartao-credito',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::index
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::index
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::index
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const CartaoCreditoController = { index }

export default CartaoCreditoController