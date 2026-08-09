import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::index
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::index
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::index
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::index
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::update
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:23
* @route '/app/configuracoes'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/configuracoes',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::update
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:23
* @route '/app/configuracoes'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::update
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:23
* @route '/app/configuracoes'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::alterarSenha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
export const alterarSenha = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: alterarSenha.url(options),
    method: 'put',
})

alterarSenha.definition = {
    methods: ["put"],
    url: '/app/configuracoes/senha',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::alterarSenha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
alterarSenha.url = (options?: RouteQueryOptions) => {
    return alterarSenha.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::alterarSenha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
alterarSenha.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: alterarSenha.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluirConta
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
export const excluirConta = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluirConta.url(options),
    method: 'delete',
})

excluirConta.definition = {
    methods: ["delete"],
    url: '/app/configuracoes/conta',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluirConta
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
excluirConta.url = (options?: RouteQueryOptions) => {
    return excluirConta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluirConta
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
excluirConta.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluirConta.url(options),
    method: 'delete',
})

const ConfiguracoesController = { index, update, alterarSenha, excluirConta }

export default ConfiguracoesController