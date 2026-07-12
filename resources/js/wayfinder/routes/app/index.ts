import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import relatorios from './relatorios'
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

/**
* @see \App\Http\Controllers\App\SubscriptionController::assinatura
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
export const assinatura = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assinatura.url(options),
    method: 'get',
})

assinatura.definition = {
    methods: ["get","head"],
    url: '/app/assinatura',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SubscriptionController::assinatura
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
assinatura.url = (options?: RouteQueryOptions) => {
    return assinatura.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SubscriptionController::assinatura
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
assinatura.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assinatura.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SubscriptionController::assinatura
* @see app/Http/Controllers/App/SubscriptionController.php:9
* @route '/app/assinatura'
*/
assinatura.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: assinatura.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\TransactionController::lancamentos
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
export const lancamentos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lancamentos.url(options),
    method: 'get',
})

lancamentos.definition = {
    methods: ["get","head"],
    url: '/app/lancamentos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\TransactionController::lancamentos
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.url = (options?: RouteQueryOptions) => {
    return lancamentos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\TransactionController::lancamentos
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lancamentos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\TransactionController::lancamentos
* @see app/Http/Controllers/App/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lancamentos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\BudgetController::limites
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
export const limites = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: limites.url(options),
    method: 'get',
})

limites.definition = {
    methods: ["get","head"],
    url: '/app/limites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\BudgetController::limites
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
limites.url = (options?: RouteQueryOptions) => {
    return limites.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\BudgetController::limites
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
limites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: limites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\BudgetController::limites
* @see app/Http/Controllers/App/BudgetController.php:9
* @route '/app/limites'
*/
limites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: limites.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
export const conexaoBancaria = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conexaoBancaria.url(options),
    method: 'get',
})

conexaoBancaria.definition = {
    methods: ["get","head"],
    url: '/app/conexao-bancaria',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.url = (options?: RouteQueryOptions) => {
    return conexaoBancaria.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conexaoBancaria.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conexaoBancaria.url(options),
    method: 'head',
})

const app = {
    dashboard: Object.assign(dashboard, dashboard),
    settings: Object.assign(settings, settings),
    conta: Object.assign(conta, conta),
    cards: Object.assign(cards, cards),
    assinatura: Object.assign(assinatura, assinatura),
    lancamentos: Object.assign(lancamentos, lancamentos),
    limites: Object.assign(limites, limites),
    conexaoBancaria: Object.assign(conexaoBancaria, conexaoBancaria),
    relatorios: Object.assign(relatorios, relatorios),
}

export default app