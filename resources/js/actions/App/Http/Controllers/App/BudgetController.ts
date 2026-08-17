import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\BudgetController::index
* @see app/Http/Controllers/App/BudgetController.php:9
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
* @see \App\Http\Controllers\App\BudgetController::index
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\BudgetController::index
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\BudgetController::index
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const BudgetController = { index }

export default BudgetController