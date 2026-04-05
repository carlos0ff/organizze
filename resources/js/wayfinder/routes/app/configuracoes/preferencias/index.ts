import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \PreferenceController::index
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes/preferencias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \PreferenceController::index
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::index
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \PreferenceController::index
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \PreferenceController::update
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/configuracoes/preferencias',
} satisfies RouteDefinition<["put"]>

/**
* @see \PreferenceController::update
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::update
* @see [unknown]:0
* @route '/app/configuracoes/preferencias'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \PreferenceController::tema
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
export const tema = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: tema.url(options),
    method: 'patch',
})

tema.definition = {
    methods: ["patch"],
    url: '/app/configuracoes/preferencias/tema',
} satisfies RouteDefinition<["patch"]>

/**
* @see \PreferenceController::tema
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
tema.url = (options?: RouteQueryOptions) => {
    return tema.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::tema
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
tema.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: tema.url(options),
    method: 'patch',
})

/**
* @see \PreferenceController::notificacoes
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
export const notificacoes = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: notificacoes.url(options),
    method: 'patch',
})

notificacoes.definition = {
    methods: ["patch"],
    url: '/app/configuracoes/preferencias/notificacoes',
} satisfies RouteDefinition<["patch"]>

/**
* @see \PreferenceController::notificacoes
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
notificacoes.url = (options?: RouteQueryOptions) => {
    return notificacoes.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::notificacoes
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
notificacoes.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: notificacoes.url(options),
    method: 'patch',
})

const preferencias = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
    tema: Object.assign(tema, tema),
    notificacoes: Object.assign(notificacoes, notificacoes),
}

export default preferencias