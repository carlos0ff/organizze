import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
const AtualizarConfiguracoesController = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: AtualizarConfiguracoesController.url(options),
    method: 'put',
})

AtualizarConfiguracoesController.definition = {
    methods: ["put"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
AtualizarConfiguracoesController.url = (options?: RouteQueryOptions) => {
    return AtualizarConfiguracoesController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
AtualizarConfiguracoesController.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: AtualizarConfiguracoesController.url(options),
    method: 'put',
})

export default AtualizarConfiguracoesController