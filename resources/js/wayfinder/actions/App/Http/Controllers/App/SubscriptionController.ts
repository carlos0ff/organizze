import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\SubscriptionController::index
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/assinatura',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SubscriptionController::index
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SubscriptionController::index
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SubscriptionController::index
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const SubscriptionController = { index }

export default SubscriptionController