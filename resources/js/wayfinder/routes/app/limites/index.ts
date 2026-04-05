import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \LimitController::index
* @see [unknown]:0
* @route '/app/limites-de-gastos'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/limites-de-gastos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \LimitController::index
* @see [unknown]:0
* @route '/app/limites-de-gastos'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \LimitController::index
* @see [unknown]:0
* @route '/app/limites-de-gastos'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \LimitController::index
* @see [unknown]:0
* @route '/app/limites-de-gastos'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const limites = {
    index: Object.assign(index, index),
}

export default limites