import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import usuarios from './usuarios'
import relatorios from './relatorios'
/**
* @see \App\Http\Controllers\Painel\DashboardController::dashboard
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/painel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Painel\DashboardController::dashboard
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\DashboardController::dashboard
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Painel\DashboardController::dashboard
* @see app/Http/Controllers/Painel/DashboardController.php:13
* @route '/painel'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

const painel = {
    dashboard: Object.assign(dashboard, dashboard),
    usuarios: Object.assign(usuarios, usuarios),
    relatorios: Object.assign(relatorios, relatorios),
}

export default painel