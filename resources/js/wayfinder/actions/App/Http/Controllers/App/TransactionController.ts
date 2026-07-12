import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\TransactionController::index
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/lancamentos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\TransactionController::index
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\TransactionController::index
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\TransactionController::index
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const TransactionController = { index }

export default TransactionController