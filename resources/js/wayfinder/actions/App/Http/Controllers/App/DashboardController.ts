import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
const indexfc281efe9b3109603fafd82c703ad3f9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfc281efe9b3109603fafd82c703ad3f9.url(options),
    method: 'get',
})

indexfc281efe9b3109603fafd82c703ad3f9.definition = {
    methods: ["get","head"],
    url: '/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
indexfc281efe9b3109603fafd82c703ad3f9.url = (options?: RouteQueryOptions) => {
    return indexfc281efe9b3109603fafd82c703ad3f9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
indexfc281efe9b3109603fafd82c703ad3f9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfc281efe9b3109603fafd82c703ad3f9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
indexfc281efe9b3109603fafd82c703ad3f9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexfc281efe9b3109603fafd82c703ad3f9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
const index66c7f35ef69d84111bb599576cd05b30 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index66c7f35ef69d84111bb599576cd05b30.url(options),
    method: 'get',
})

index66c7f35ef69d84111bb599576cd05b30.definition = {
    methods: ["get","head"],
    url: '/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
index66c7f35ef69d84111bb599576cd05b30.url = (options?: RouteQueryOptions) => {
    return index66c7f35ef69d84111bb599576cd05b30.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
index66c7f35ef69d84111bb599576cd05b30.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index66c7f35ef69d84111bb599576cd05b30.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::index
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
index66c7f35ef69d84111bb599576cd05b30.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index66c7f35ef69d84111bb599576cd05b30.url(options),
    method: 'head',
})

export const index = {
    '/panel': indexfc281efe9b3109603fafd82c703ad3f9,
    '/app': index66c7f35ef69d84111bb599576cd05b30,
}

const DashboardController = { index }

export default DashboardController