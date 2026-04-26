import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\HelpController::index
* @see [unknown]:0
* @route '/app/ajuda'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/ajuda',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\HelpController::index
* @see [unknown]:0
* @route '/app/ajuda'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\HelpController::index
* @see [unknown]:0
* @route '/app/ajuda'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\HelpController::index
* @see [unknown]:0
* @route '/app/ajuda'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const HelpController = { index }

export default HelpController