import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
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
* @see \PreferenceController::updateTheme
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
export const updateTheme = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTheme.url(options),
    method: 'patch',
})

updateTheme.definition = {
    methods: ["patch"],
    url: '/app/configuracoes/preferencias/tema',
} satisfies RouteDefinition<["patch"]>

/**
* @see \PreferenceController::updateTheme
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
updateTheme.url = (options?: RouteQueryOptions) => {
    return updateTheme.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::updateTheme
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/tema'
*/
updateTheme.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateTheme.url(options),
    method: 'patch',
})

/**
* @see \PreferenceController::updateNotifications
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
export const updateNotifications = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateNotifications.url(options),
    method: 'patch',
})

updateNotifications.definition = {
    methods: ["patch"],
    url: '/app/configuracoes/preferencias/notificacoes',
} satisfies RouteDefinition<["patch"]>

/**
* @see \PreferenceController::updateNotifications
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
updateNotifications.url = (options?: RouteQueryOptions) => {
    return updateNotifications.definition.url + queryParams(options)
}

/**
* @see \PreferenceController::updateNotifications
* @see [unknown]:0
* @route '/app/configuracoes/preferencias/notificacoes'
*/
updateNotifications.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateNotifications.url(options),
    method: 'patch',
})

const PreferenceController = { index, update, updateTheme, updateNotifications }

export default PreferenceController