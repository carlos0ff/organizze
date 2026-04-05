import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
import payment from './payment'
/**
* @see \BillingController::index
* @see [unknown]:0
* @route '/app/configuracoes/plano'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes/plano',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BillingController::index
* @see [unknown]:0
* @route '/app/configuracoes/plano'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \BillingController::index
* @see [unknown]:0
* @route '/app/configuracoes/plano'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \BillingController::index
* @see [unknown]:0
* @route '/app/configuracoes/plano'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \BillingController::subscribe
* @see [unknown]:0
* @route '/app/configuracoes/plano/assinar'
*/
export const subscribe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

subscribe.definition = {
    methods: ["post"],
    url: '/app/configuracoes/plano/assinar',
} satisfies RouteDefinition<["post"]>

/**
* @see \BillingController::subscribe
* @see [unknown]:0
* @route '/app/configuracoes/plano/assinar'
*/
subscribe.url = (options?: RouteQueryOptions) => {
    return subscribe.definition.url + queryParams(options)
}

/**
* @see \BillingController::subscribe
* @see [unknown]:0
* @route '/app/configuracoes/plano/assinar'
*/
subscribe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

/**
* @see \BillingController::cancel
* @see [unknown]:0
* @route '/app/configuracoes/plano/cancelar'
*/
export const cancel = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/app/configuracoes/plano/cancelar',
} satisfies RouteDefinition<["post"]>

/**
* @see \BillingController::cancel
* @see [unknown]:0
* @route '/app/configuracoes/plano/cancelar'
*/
cancel.url = (options?: RouteQueryOptions) => {
    return cancel.definition.url + queryParams(options)
}

/**
* @see \BillingController::cancel
* @see [unknown]:0
* @route '/app/configuracoes/plano/cancelar'
*/
cancel.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})

/**
* @see \BillingController::invoices
* @see [unknown]:0
* @route '/app/configuracoes/plano/faturas'
*/
export const invoices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

invoices.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes/plano/faturas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BillingController::invoices
* @see [unknown]:0
* @route '/app/configuracoes/plano/faturas'
*/
invoices.url = (options?: RouteQueryOptions) => {
    return invoices.definition.url + queryParams(options)
}

/**
* @see \BillingController::invoices
* @see [unknown]:0
* @route '/app/configuracoes/plano/faturas'
*/
invoices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

/**
* @see \BillingController::invoices
* @see [unknown]:0
* @route '/app/configuracoes/plano/faturas'
*/
invoices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoices.url(options),
    method: 'head',
})

const plano = {
    index: Object.assign(index, index),
    subscribe: Object.assign(subscribe, subscribe),
    cancel: Object.assign(cancel, cancel),
    invoices: Object.assign(invoices, invoices),
    payment: Object.assign(payment, payment),
}

export default plano