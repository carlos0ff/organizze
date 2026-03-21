import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/panel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/panel'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:13
* @route '/app'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/panel/configuracoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
export const conta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

conta.definition = {
    methods: ["get","head"],
    url: '/panel/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
conta.url = (options?: RouteQueryOptions) => {
    return conta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
conta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
conta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conta.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
export const conta = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

conta.definition = {
    methods: ["get","head"],
    url: '/app/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
conta.url = (options?: RouteQueryOptions) => {
    return conta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
conta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
conta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conta.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::cards
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/cards'
*/
export const cards = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(options),
    method: 'get',
})

cards.definition = {
    methods: ["get","head"],
    url: '/app/cards',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::cards
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/cards'
*/
cards.url = (options?: RouteQueryOptions) => {
    return cards.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::cards
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/cards'
*/
cards.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::cards
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/cards'
*/
cards.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cards.url(options),
    method: 'head',
})

const app = {
    dashboard: Object.assign(dashboard, dashboard),
    settings: Object.assign(settings, settings),
    conta: Object.assign(conta, conta),
    cards: Object.assign(cards, cards),
}

export default app