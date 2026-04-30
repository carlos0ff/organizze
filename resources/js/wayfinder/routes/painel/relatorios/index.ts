import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Painel\RelatorioController::index
* @see app/Http/Controllers/Painel/RelatorioController.php:14
* @route '/painel/relatorios'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/painel/relatorios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Painel\RelatorioController::index
* @see app/Http/Controllers/Painel/RelatorioController.php:14
* @route '/painel/relatorios'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\RelatorioController::index
* @see app/Http/Controllers/Painel/RelatorioController.php:14
* @route '/painel/relatorios'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Painel\RelatorioController::index
* @see app/Http/Controllers/Painel/RelatorioController.php:14
* @route '/painel/relatorios'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const relatorios = {
    index: Object.assign(index, index),
}

export default relatorios