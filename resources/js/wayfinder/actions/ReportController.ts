import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \ReportController::accounts
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
export const accounts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accounts.url(options),
    method: 'get',
})

accounts.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::accounts
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
accounts.url = (options?: RouteQueryOptions) => {
    return accounts.definition.url + queryParams(options)
}

/**
* @see \ReportController::accounts
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
accounts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accounts.url(options),
    method: 'get',
})

/**
* @see \ReportController::accounts
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
accounts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accounts.url(options),
    method: 'head',
})

/**
* @see \ReportController::tags
* @see [unknown]:0
* @route '/app/relatorios/tags'
*/
export const tags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags.url(options),
    method: 'get',
})

tags.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::tags
* @see [unknown]:0
* @route '/app/relatorios/tags'
*/
tags.url = (options?: RouteQueryOptions) => {
    return tags.definition.url + queryParams(options)
}

/**
* @see \ReportController::tags
* @see [unknown]:0
* @route '/app/relatorios/tags'
*/
tags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags.url(options),
    method: 'get',
})

/**
* @see \ReportController::tags
* @see [unknown]:0
* @route '/app/relatorios/tags'
*/
tags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tags.url(options),
    method: 'head',
})

/**
* @see \ReportController::cashflow
* @see [unknown]:0
* @route '/app/relatorios/entradas-e-saidas'
*/
export const cashflow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflow.url(options),
    method: 'get',
})

cashflow.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/entradas-e-saidas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::cashflow
* @see [unknown]:0
* @route '/app/relatorios/entradas-e-saidas'
*/
cashflow.url = (options?: RouteQueryOptions) => {
    return cashflow.definition.url + queryParams(options)
}

/**
* @see \ReportController::cashflow
* @see [unknown]:0
* @route '/app/relatorios/entradas-e-saidas'
*/
cashflow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cashflow.url(options),
    method: 'get',
})

/**
* @see \ReportController::cashflow
* @see [unknown]:0
* @route '/app/relatorios/entradas-e-saidas'
*/
cashflow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cashflow.url(options),
    method: 'head',
})

/**
* @see \ReportController::categories
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/categorias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::categories
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \ReportController::categories
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \ReportController::categories
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

const ReportController = { accounts, tags, cashflow, categories }

export default ReportController