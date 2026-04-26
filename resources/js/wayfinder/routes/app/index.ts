import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:11
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
* @see app/Http/Controllers/App/DashboardController.php:11
* @route '/app'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:11
* @route '/app'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see app/Http/Controllers/App/DashboardController.php:11
* @route '/app'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::conta
* @see app/Http/Controllers/App/Conta/AccountController.php:15
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
* @see \App\Http\Controllers\App\Conta\AccountController::conta
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/contas'
*/
conta.url = (options?: RouteQueryOptions) => {
    return conta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\AccountController::conta
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/contas'
*/
conta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::conta
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/contas'
*/
conta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conta.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::cards
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/cartao'
*/
export const cards = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(options),
    method: 'get',
})

cards.definition = {
    methods: ["get","head"],
    url: '/app/cartao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\AccountController::cards
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/cartao'
*/
cards.url = (options?: RouteQueryOptions) => {
    return cards.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\AccountController::cards
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/cartao'
*/
cards.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cards.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::cards
* @see app/Http/Controllers/App/Conta/AccountController.php:15
* @route '/app/cartao'
*/
cards.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cards.url(options),
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
* @see \App\Http\Controllers\App\Transaction\TransactionController::lancamentos
* @see app/Http/Controllers/App/Transaction/TransactionController.php:14
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
* @see \App\Http\Controllers\App\Transaction\TransactionController::lancamentos
* @see app/Http/Controllers/App/Transaction/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.url = (options?: RouteQueryOptions) => {
    return lancamentos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Transaction\TransactionController::lancamentos
* @see app/Http/Controllers/App/Transaction/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lancamentos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Transaction\TransactionController::lancamentos
* @see app/Http/Controllers/App/Transaction/TransactionController.php:14
* @route '/app/lancamentos'
*/
lancamentos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lancamentos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SpendingLimitController::limitesGastos
* @see app/Http/Controllers/App/SpendingLimitController.php:15
* @route '/app/limites-gastos'
*/
export const limitesGastos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: limitesGastos.url(options),
    method: 'get',
})

limitesGastos.definition = {
    methods: ["get","head"],
    url: '/app/limites-gastos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SpendingLimitController::limitesGastos
* @see app/Http/Controllers/App/SpendingLimitController.php:15
* @route '/app/limites-gastos'
*/
limitesGastos.url = (options?: RouteQueryOptions) => {
    return limitesGastos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SpendingLimitController::limitesGastos
* @see app/Http/Controllers/App/SpendingLimitController.php:15
* @route '/app/limites-gastos'
*/
limitesGastos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: limitesGastos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SpendingLimitController::limitesGastos
* @see app/Http/Controllers/App/SpendingLimitController.php:15
* @route '/app/limites-gastos'
*/
limitesGastos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: limitesGastos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:10
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
* @see app/Http/Controllers/App/BankConnectionController.php:10
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.url = (options?: RouteQueryOptions) => {
    return conexaoBancaria.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:10
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conexaoBancaria.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\BankConnectionController::conexaoBancaria
* @see app/Http/Controllers/App/BankConnectionController.php:10
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conexaoBancaria.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::signature
* @see app/Http/Controllers/App/Conta/AccountController.php:63
* @route '/app/assinatura'
*/
export const signature = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signature.url(options),
    method: 'get',
})

signature.definition = {
    methods: ["get","head"],
    url: '/app/assinatura',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\AccountController::signature
* @see app/Http/Controllers/App/Conta/AccountController.php:63
* @route '/app/assinatura'
*/
signature.url = (options?: RouteQueryOptions) => {
    return signature.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\AccountController::signature
* @see app/Http/Controllers/App/Conta/AccountController.php:63
* @route '/app/assinatura'
*/
signature.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: signature.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\AccountController::signature
* @see app/Http/Controllers/App/Conta/AccountController.php:63
* @route '/app/assinatura'
*/
signature.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: signature.url(options),
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
* @see \App\Http\Controllers\App\PlanController::plano
* @see app/Http/Controllers/App/PlanController.php:11
* @route '/app/plano'
*/
export const plano = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: plano.url(options),
    method: 'get',
})

plano.definition = {
    methods: ["get","head"],
    url: '/app/plano',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\PlanController::plano
* @see app/Http/Controllers/App/PlanController.php:11
* @route '/app/plano'
*/
plano.url = (options?: RouteQueryOptions) => {
    return plano.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\PlanController::plano
* @see app/Http/Controllers/App/PlanController.php:11
* @route '/app/plano'
*/
plano.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: plano.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\PlanController::plano
* @see app/Http/Controllers/App/PlanController.php:11
* @route '/app/plano'
*/
plano.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: plano.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\HelpController::ajuda
* @see [unknown]:0
* @route '/app/ajuda'
*/
export const ajuda = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ajuda.url(options),
    method: 'get',
})

ajuda.definition = {
    methods: ["get","head"],
    url: '/app/ajuda',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\HelpController::ajuda
* @see [unknown]:0
* @route '/app/ajuda'
*/
ajuda.url = (options?: RouteQueryOptions) => {
    return ajuda.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\HelpController::ajuda
* @see [unknown]:0
* @route '/app/ajuda'
*/
ajuda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ajuda.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\HelpController::ajuda
* @see [unknown]:0
* @route '/app/ajuda'
*/
ajuda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ajuda.url(options),
    method: 'head',
})

const app = {
    dashboard: Object.assign(dashboard, dashboard),
    conta: Object.assign(conta, conta),
    cards: Object.assign(cards, cards),
    settings: Object.assign(settings, settings),
    lancamentos: Object.assign(lancamentos, lancamentos),
    limitesGastos: Object.assign(limitesGastos, limitesGastos),
    conexaoBancaria: Object.assign(conexaoBancaria, conexaoBancaria),
    signature: Object.assign(signature, signature),
    perfil: Object.assign(perfil, perfil),
    plano: Object.assign(plano, plano),
    ajuda: Object.assign(ajuda, ajuda),
}

export default app
