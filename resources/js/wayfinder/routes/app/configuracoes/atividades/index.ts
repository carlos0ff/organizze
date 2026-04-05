import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \ActivityController::index
* @see [unknown]:0
* @route '/app/configuracoes/atividades'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes/atividades',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ActivityController::index
* @see [unknown]:0
* @route '/app/configuracoes/atividades'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \ActivityController::index
* @see [unknown]:0
* @route '/app/configuracoes/atividades'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \ActivityController::index
* @see [unknown]:0
* @route '/app/configuracoes/atividades'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \ActivityController::clear
* @see [unknown]:0
* @route '/app/configuracoes/atividades/limpar'
*/
export const clear = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

clear.definition = {
    methods: ["delete"],
    url: '/app/configuracoes/atividades/limpar',
} satisfies RouteDefinition<["delete"]>

/**
* @see \ActivityController::clear
* @see [unknown]:0
* @route '/app/configuracoes/atividades/limpar'
*/
clear.url = (options?: RouteQueryOptions) => {
    return clear.definition.url + queryParams(options)
}

/**
* @see \ActivityController::clear
* @see [unknown]:0
* @route '/app/configuracoes/atividades/limpar'
*/
clear.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

const atividades = {
    index: Object.assign(index, index),
    clear: Object.assign(clear, clear),
}

export default atividades