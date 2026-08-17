import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\NotificationController::index
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/notificacoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\NotificationController::index
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\NotificationController::index
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\NotificationController::index
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const NotificationController = { index }

export default NotificationController