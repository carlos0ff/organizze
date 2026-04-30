import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
const ExcluirContaController = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ExcluirContaController.url(options),
    method: 'delete',
})

ExcluirContaController.definition = {
    methods: ["delete"],
    url: '/app/configuracao/conta',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
ExcluirContaController.url = (options?: RouteQueryOptions) => {
    return ExcluirContaController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
ExcluirContaController.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ExcluirContaController.url(options),
    method: 'delete',
})

export default ExcluirContaController