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
* @see \App\Http\Controllers\App\CartaoCreditoController::cartaoCredito
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
export const cartaoCredito = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cartaoCredito.url(options),
    method: 'get',
})

cartaoCredito.definition = {
    methods: ["get","head"],
    url: '/app/cartao-credito',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::cartaoCredito
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
cartaoCredito.url = (options?: RouteQueryOptions) => {
    return cartaoCredito.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::cartaoCredito
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
cartaoCredito.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cartaoCredito.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCreditoController::cartaoCredito
* @see app/Http/Controllers/App/CartaoCreditoController.php:11
* @route '/app/cartao-credito'
*/
cartaoCredito.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cartaoCredito.url(options),
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

/**
* @see \App\Http\Controllers\App\NotificationController::notificacoes
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
export const notificacoes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificacoes.url(options),
    method: 'get',
})

notificacoes.definition = {
    methods: ["get","head"],
    url: '/app/notificacoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\NotificationController::notificacoes
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
notificacoes.url = (options?: RouteQueryOptions) => {
    return notificacoes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\NotificationController::notificacoes
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
notificacoes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificacoes.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\NotificationController::notificacoes
* @see app/Http/Controllers/App/NotificationController.php:11
* @route '/app/notificacoes'
*/
notificacoes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notificacoes.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\ProfileController::perfil
* @see app/Http/Controllers/App/ProfileController.php:11
* @route '/app/perfil'
*/
export const perfil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: perfil.url(options),
    method: 'get',
})

perfil.definition = {
    methods: ["get","head"],
    url: '/app/perfil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\ProfileController::perfil
* @see app/Http/Controllers/App/ProfileController.php:11
* @route '/app/perfil'
*/
perfil.url = (options?: RouteQueryOptions) => {
    return perfil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ProfileController::perfil
* @see app/Http/Controllers/App/ProfileController.php:11
* @route '/app/perfil'
*/
perfil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: perfil.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ProfileController::perfil
* @see app/Http/Controllers/App/ProfileController.php:11
* @route '/app/perfil'
*/
perfil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: perfil.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SuporteController::suporte
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
export const suporte = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suporte.url(options),
    method: 'get',
})

suporte.definition = {
    methods: ["get","head"],
    url: '/app/suporte',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SuporteController::suporte
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
suporte.url = (options?: RouteQueryOptions) => {
    return suporte.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SuporteController::suporte
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
suporte.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suporte.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SuporteController::suporte
* @see app/Http/Controllers/App/SuporteController.php:11
* @route '/app/suporte'
*/
suporte.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: suporte.url(options),
    method: 'head',
})

const app = {
    dashboard: Object.assign(dashboard, dashboard),
    settings: Object.assign(settings, settings),
    conta: Object.assign(conta, conta),
    cartaoCredito: Object.assign(cartaoCredito, cartaoCredito),
    assinatura: Object.assign(assinatura, assinatura),
    lancamentos: Object.assign(lancamentos, lancamentos),
    limites: Object.assign(limites, limites),
    conexaoBancaria: Object.assign(conexaoBancaria, conexaoBancaria),
    notificacoes: Object.assign(notificacoes, notificacoes),
    perfil: Object.assign(perfil, perfil),
    suporte: Object.assign(suporte, suporte),
    relatorios: Object.assign(relatorios, relatorios),
}

export default app