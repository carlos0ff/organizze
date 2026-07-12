import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\ReportController::mensal
* @see app/Http/Controllers/App/ReportController.php:9
* @route '/app/relatorios/mensal'
*/
export const mensal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mensal.url(options),
    method: 'get',
})

mensal.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/mensal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\ReportController::mensal
* @see app/Http/Controllers/App/ReportController.php:9
* @route '/app/relatorios/mensal'
*/
mensal.url = (options?: RouteQueryOptions) => {
    return mensal.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ReportController::mensal
* @see app/Http/Controllers/App/ReportController.php:9
* @route '/app/relatorios/mensal'
*/
mensal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: mensal.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ReportController::mensal
* @see app/Http/Controllers/App/ReportController.php:9
* @route '/app/relatorios/mensal'
*/
mensal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: mensal.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\ReportController::anual
* @see app/Http/Controllers/App/ReportController.php:14
* @route '/app/relatorios/anual'
*/
export const anual = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anual.url(options),
    method: 'get',
})

anual.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/anual',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\ReportController::anual
* @see app/Http/Controllers/App/ReportController.php:14
* @route '/app/relatorios/anual'
*/
anual.url = (options?: RouteQueryOptions) => {
    return anual.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ReportController::anual
* @see app/Http/Controllers/App/ReportController.php:14
* @route '/app/relatorios/anual'
*/
anual.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: anual.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ReportController::anual
* @see app/Http/Controllers/App/ReportController.php:14
* @route '/app/relatorios/anual'
*/
anual.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: anual.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\ReportController::categorias
* @see app/Http/Controllers/App/ReportController.php:19
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
* @see \App\Http\Controllers\App\ReportController::categorias
* @see app/Http/Controllers/App/ReportController.php:19
* @route '/app/relatorios/categorias'
*/
categorias.url = (options?: RouteQueryOptions) => {
    return categorias.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ReportController::categorias
* @see app/Http/Controllers/App/ReportController.php:19
* @route '/app/relatorios/categorias'
*/
categorias.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ReportController::categorias
* @see app/Http/Controllers/App/ReportController.php:19
* @route '/app/relatorios/categorias'
*/
categorias.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorias.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\ReportController::receitasDespesas
* @see app/Http/Controllers/App/ReportController.php:24
* @route '/app/relatorios/receitas-despesas'
*/
export const receitasDespesas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receitasDespesas.url(options),
    method: 'get',
})

receitasDespesas.definition = {
    methods: ["get","head"],
    url: '/app/relatorios/receitas-despesas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\ReportController::receitasDespesas
* @see app/Http/Controllers/App/ReportController.php:24
* @route '/app/relatorios/receitas-despesas'
*/
receitasDespesas.url = (options?: RouteQueryOptions) => {
    return receitasDespesas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ReportController::receitasDespesas
* @see app/Http/Controllers/App/ReportController.php:24
* @route '/app/relatorios/receitas-despesas'
*/
receitasDespesas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: receitasDespesas.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ReportController::receitasDespesas
* @see app/Http/Controllers/App/ReportController.php:24
* @route '/app/relatorios/receitas-despesas'
*/
receitasDespesas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: receitasDespesas.url(options),
    method: 'head',
})

const ReportController = { mensal, anual, categorias, receitasDespesas }

export default ReportController