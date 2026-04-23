import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Panel\DashboardController::index
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Panel\DashboardController::index
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Panel\DashboardController::index
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Panel\DashboardController::index
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const DashboardController = { index }

export default DashboardController