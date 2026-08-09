import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
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
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::senha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
export const senha = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: senha.url(options),
    method: 'put',
})

senha.definition = {
    methods: ["put"],
    url: '/app/configuracoes/senha',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::senha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
senha.url = (options?: RouteQueryOptions) => {
    return senha.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::senha
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:31
* @route '/app/configuracoes/senha'
*/
senha.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: senha.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluir
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
export const excluir = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluir.url(options),
    method: 'delete',
})

excluir.definition = {
    methods: ["delete"],
    url: '/app/configuracoes/conta',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluir
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
excluir.url = (options?: RouteQueryOptions) => {
    return excluir.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::excluir
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:39
* @route '/app/configuracoes/conta'
*/
excluir.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: excluir.url(options),
    method: 'delete',
})

const configuracoes = {
    update: Object.assign(update, update),
    senha: Object.assign(senha, senha),
    excluir: Object.assign(excluir, excluir),
}

export default configuracoes