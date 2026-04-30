import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
const AlterarSenhaController = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: AlterarSenhaController.url(options),
    method: 'put',
})

AlterarSenhaController.definition = {
    methods: ["put"],
    url: '/app/configuracao/senha',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
AlterarSenhaController.url = (options?: RouteQueryOptions) => {
    return AlterarSenhaController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
AlterarSenhaController.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: AlterarSenhaController.url(options),
    method: 'put',
})

export default AlterarSenhaController