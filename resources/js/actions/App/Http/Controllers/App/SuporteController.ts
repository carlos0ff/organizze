import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\SuporteController::index
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/suporte',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SuporteController::index
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SuporteController::index
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SuporteController::index
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const SuporteController = { index }

export default SuporteController