import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \SubscriptionController::show
* @see [unknown]:0
* @route '/app/assinatura'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/assinatura',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \SubscriptionController::show
* @see [unknown]:0
* @route '/app/assinatura'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \SubscriptionController::show
* @see [unknown]:0
* @route '/app/assinatura'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \SubscriptionController::show
* @see [unknown]:0
* @route '/app/assinatura'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \SubscriptionController::update
* @see [unknown]:0
* @route '/app/assinatura'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/assinatura',
} satisfies RouteDefinition<["put"]>

/**
* @see \SubscriptionController::update
* @see [unknown]:0
* @route '/app/assinatura'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \SubscriptionController::update
* @see [unknown]:0
* @route '/app/assinatura'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const SubscriptionController = { show, update }

export default SubscriptionController