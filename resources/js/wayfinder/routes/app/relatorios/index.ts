import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \ReportController::contas
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
export const contas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contas.url(options),
    method: 'get',
})

contas.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::contas
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
contas.url = (options?: RouteQueryOptions) => {
    return contas.definition.url + queryParams(options)
}

/**
* @see \ReportController::contas
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
contas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contas.url(options),
    method: 'get',
})

/**
* @see \ReportController::contas
* @see [unknown]:0
* @route '/app/relatorios/contas'
*/
contas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contas.url(options),
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
* @see \ReportController::categorias
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
export const categorias = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

categorias.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/categorias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ReportController::categorias
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categorias.url = (options?: RouteQueryOptions) => {
    return categorias.definition.url + queryParams(options)
}

/**
* @see \ReportController::categorias
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categorias.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

/**
* @see \ReportController::categorias
* @see [unknown]:0
* @route '/app/relatorios/categorias'
*/
categorias.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorias.url(options),
    method: 'head',
})

const relatorios = {
    contas: Object.assign(contas, contas),
    tags: Object.assign(tags, tags),
    cashflow: Object.assign(cashflow, cashflow),
    categorias: Object.assign(categorias, categorias),
}

export default relatorios