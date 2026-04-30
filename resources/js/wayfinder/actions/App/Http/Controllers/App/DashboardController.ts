import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:12
* @route '/app'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:12
* @route '/app'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:12
* @route '/app'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:12
* @route '/app'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const DashboardController = { index }

export default DashboardController