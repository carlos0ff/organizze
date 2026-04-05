import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \BillingController::method
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
export const method = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method.url(options),
    method: 'get',
})

method.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes/plano/metodo-pagamento',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BillingController::method
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
method.url = (options?: RouteQueryOptions) => {
    return method.definition.url + queryParams(options)
}

/**
* @see \BillingController::method
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
method.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method.url(options),
    method: 'get',
})

/**
* @see \BillingController::method
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
method.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method.url(options),
    method: 'head',
})

/**
* @see \BillingController::update
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/configuracoes/plano/metodo-pagamento',
} satisfies RouteDefinition<["put"]>

/**
* @see \BillingController::update
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \BillingController::update
* @see [unknown]:0
* @route '/app/configuracoes/plano/metodo-pagamento'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const payment = {
    method: Object.assign(method, method),
    update: Object.assign(update, update),
}

export default payment