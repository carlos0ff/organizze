import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Painel\DashboardController::index
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/painel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Painel\DashboardController::index
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\DashboardController::index
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Painel\DashboardController::index
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const DashboardController = { index }

export default DashboardController