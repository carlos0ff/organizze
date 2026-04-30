import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
export const atualizar = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: atualizar.url(options),
    method: 'put',
})

atualizar.definition = {
    methods: ["put"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
atualizar.url = (options?: RouteQueryOptions) => {
    return atualizar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\AtualizarConfiguracoesController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AtualizarConfiguracoesController.php:18
* @route '/app/configuracao'
*/
atualizar.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: atualizar.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
export const senha = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: senha.url(options),
    method: 'put',
})

senha.definition = {
    methods: ["put"],
    url: '/app/configuracao/senha',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
senha.url = (options?: RouteQueryOptions) => {
    return senha.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\AlterarSenhaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/AlterarSenhaController.php:20
* @route '/app/configuracao/senha'
*/
senha.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: senha.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
export const excluirConta = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluirConta.url(options),
    method: 'delete',
})

excluirConta.definition = {
    methods: ["delete"],
    url: '/app/configuracao/conta',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
excluirConta.url = (options?: RouteQueryOptions) => {
    return excluirConta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ExcluirContaController::__invoke
* @see app/Http/Controllers/App/Configuracoes/ExcluirContaController.php:20
* @route '/app/configuracao/conta'
*/
excluirConta.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluirConta.url(options),
    method: 'delete',
})

const configuracoes = {
    atualizar: Object.assign(atualizar, atualizar),
    senha: Object.assign(senha, senha),
    excluirConta: Object.assign(excluirConta, excluirConta),
}

export default configuracoes