import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import users from './users'
import reports from './reports'
/**
* @see \App\Http\Controllers\Panel\DashboardController::dashboard
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Panel\DashboardController::dashboard
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Panel\DashboardController::dashboard
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Panel\DashboardController::dashboard
* @see app/Http/Controllers/Panel/DashboardController.php:12
* @route '/panel'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

const panel = {
    dashboard: Object.assign(dashboard, dashboard),
    users: Object.assign(users, users),
    reports: Object.assign(reports, reports),
}

export default panel