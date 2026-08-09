import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::index
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
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
* @see \App\Http\Controllers\App\Dashboard\DashboardController::index
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::index
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::index
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::stats
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:22
* @route '/app/stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/app/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::stats
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:22
* @route '/app/stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::stats
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:22
* @route '/app/stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::stats
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:22
* @route '/app/stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

const DashboardController = { index, stats }

export default DashboardController