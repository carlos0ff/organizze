import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::index
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:15
* @route '/app/relatorios'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/relatorios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::index
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:15
* @route '/app/relatorios'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::index
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:15
* @route '/app/relatorios'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::index
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:15
* @route '/app/relatorios'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::categorias
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:23
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
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::categorias
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:23
* @route '/app/relatorios/categorias'
*/
categorias.url = (options?: RouteQueryOptions) => {
    return categorias.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::categorias
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:23
* @route '/app/relatorios/categorias'
*/
categorias.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::categorias
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:23
* @route '/app/relatorios/categorias'
*/
categorias.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorias.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::contas
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:31
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
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::contas
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:31
* @route '/app/relatorios/contas'
*/
contas.url = (options?: RouteQueryOptions) => {
    return contas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::contas
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:31
* @route '/app/relatorios/contas'
*/
contas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contas.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::contas
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:31
* @route '/app/relatorios/contas'
*/
contas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contas.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::receitaVsDespesa
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:39
* @route '/app/relatorios/receita-vs-despesa'
*/
export const receitaVsDespesa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receitaVsDespesa.url(options),
    method: 'get',
})

receitaVsDespesa.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/receita-vs-despesa',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::receitaVsDespesa
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:39
* @route '/app/relatorios/receita-vs-despesa'
*/
receitaVsDespesa.url = (options?: RouteQueryOptions) => {
    return receitaVsDespesa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::receitaVsDespesa
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:39
* @route '/app/relatorios/receita-vs-despesa'
*/
receitaVsDespesa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receitaVsDespesa.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::receitaVsDespesa
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:39
* @route '/app/relatorios/receita-vs-despesa'
*/
receitaVsDespesa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: receitaVsDespesa.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::tags
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:47
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
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::tags
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:47
* @route '/app/relatorios/tags'
*/
tags.url = (options?: RouteQueryOptions) => {
    return tags.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::tags
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:47
* @route '/app/relatorios/tags'
*/
tags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::tags
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:47
* @route '/app/relatorios/tags'
*/
tags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tags.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::imprimir
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:63
* @route '/app/relatorios/imprimir'
*/
export const imprimir = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: imprimir.url(options),
    method: 'get',
})

imprimir.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/imprimir',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::imprimir
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:63
* @route '/app/relatorios/imprimir'
*/
imprimir.url = (options?: RouteQueryOptions) => {
    return imprimir.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::imprimir
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:63
* @route '/app/relatorios/imprimir'
*/
imprimir.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: imprimir.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::imprimir
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:63
* @route '/app/relatorios/imprimir'
*/
imprimir.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: imprimir.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::baixar
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:55
* @route '/app/relatorios/baixar'
*/
export const baixar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: baixar.url(options),
    method: 'get',
})

baixar.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/baixar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::baixar
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:55
* @route '/app/relatorios/baixar'
*/
baixar.url = (options?: RouteQueryOptions) => {
    return baixar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::baixar
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:55
* @route '/app/relatorios/baixar'
*/
baixar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: baixar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Relatorio\RelatorioController::baixar
* @see app/Http/Controllers/App/Relatorio/RelatorioController.php:55
* @route '/app/relatorios/baixar'
*/
baixar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: baixar.url(options),
    method: 'head',
})

const RelatorioController = { index, categorias, contas, receitaVsDespesa, tags, imprimir, baixar }

export default RelatorioController