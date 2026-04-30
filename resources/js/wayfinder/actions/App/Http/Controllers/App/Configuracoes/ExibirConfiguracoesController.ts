import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\ExibirConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExibirConfiguracoesController.php:16
* @route '/app/configuracao'
*/
const ExibirConfiguracoesController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExibirConfiguracoesController.url(options),
    method: 'get',
})

ExibirConfiguracoesController.definition = {
    methods: ["get","head"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ExibirConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExibirConfiguracoesController.php:16
* @route '/app/configuracao'
*/
ExibirConfiguracoesController.url = (options?: RouteQueryOptions) => {
    return ExibirConfiguracoesController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ExibirConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExibirConfiguracoesController.php:16
* @route '/app/configuracao'
*/
ExibirConfiguracoesController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExibirConfiguracoesController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ExibirConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExibirConfiguracoesController.php:16
* @route '/app/configuracao'
*/
ExibirConfiguracoesController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExibirConfiguracoesController.url(options),
    method: 'head',
})

export default ExibirConfiguracoesController