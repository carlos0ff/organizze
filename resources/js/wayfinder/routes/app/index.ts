import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import dashboard074181035978 from './dashboard'
import contas1f7ed9 from './contas'
import lancamentos5ee860 from './lancamentos'
import cartoesB32811 from './cartoes'
import categoriasC782cd from './categorias'
import relatorios from './relatorios'
import limitesBff468 from './limites'
import perfil9785a8 from './perfil'
import configuracoes0197ca from './configuracoes'
import conexaoBancaria182595 from './conexao-bancaria'
import plano44ff36 from './plano'
import chamados2b39c2 from './chamados'
/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/panel'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see [unknown]:0
* @route '/panel'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\DashboardController::dashboard
* @see [unknown]:0
* @route '/panel'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::dashboard
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
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
* @see \App\Http\Controllers\App\Dashboard\DashboardController::dashboard
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::dashboard
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Dashboard\DashboardController::dashboard
* @see app/Http/Controllers/App/Dashboard/DashboardController.php:14
* @route '/app'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/panel/configuracoes'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see [unknown]:0
* @route '/panel/configuracoes'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::settings
* @see [unknown]:0
* @route '/panel/configuracoes'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/panel/contas'
*/
conta.url = (options?: RouteQueryOptions) => {
    return conta.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see [unknown]:0
* @route '/panel/contas'
*/
conta.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conta.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::conta
* @see [unknown]:0
* @route '/panel/contas'
*/
conta.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conta.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::contas
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
export const contas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contas.url(options),
    method: 'get',
})

contas.definition = {
    methods: ["get","head"],
    url: '/app/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::contas
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
contas.url = (options?: RouteQueryOptions) => {
    return contas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::contas
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
contas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contas.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::contas
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
contas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contas.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::lancamentos
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:15
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
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::lancamentos
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:15
* @route '/app/lancamentos'
*/
lancamentos.url = (options?: RouteQueryOptions) => {
    return lancamentos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::lancamentos
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:15
* @route '/app/lancamentos'
*/
lancamentos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lancamentos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::lancamentos
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:15
* @route '/app/lancamentos'
*/
lancamentos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lancamentos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::cartoes
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:15
* @route '/app/cartoes'
*/
export const cartoes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cartoes.url(options),
    method: 'get',
})

cartoes.definition = {
    methods: ["get","head"],
    url: '/app/cartoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::cartoes
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:15
* @route '/app/cartoes'
*/
cartoes.url = (options?: RouteQueryOptions) => {
    return cartoes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::cartoes
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:15
* @route '/app/cartoes'
*/
cartoes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cartoes.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::cartoes
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:15
* @route '/app/cartoes'
*/
cartoes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cartoes.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::categorias
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:15
* @route '/app/categorias'
*/
export const categorias = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

categorias.definition = {
    methods: ["get","head"],
    url: '/app/categorias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::categorias
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:15
* @route '/app/categorias'
*/
categorias.url = (options?: RouteQueryOptions) => {
    return categorias.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::categorias
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:15
* @route '/app/categorias'
*/
categorias.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categorias.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Categorias\CategoriaController::categorias
* @see app/Http/Controllers/App/Categorias/CategoriaController.php:15
* @route '/app/categorias'
*/
categorias.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categorias.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::limites
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
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
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::limites
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
limites.url = (options?: RouteQueryOptions) => {
    return limites.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::limites
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
limites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: limites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\LimiteGastos\LimiteGastosController::limites
* @see app/Http/Controllers/App/LimiteGastos/LimiteGastosController.php:15
* @route '/app/limites'
*/
limites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: limites.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::perfil
* @see app/Http/Controllers/App/Perfil/PerfilController.php:15
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
* @see \App\Http\Controllers\App\Perfil\PerfilController::perfil
* @see app/Http/Controllers/App/Perfil/PerfilController.php:15
* @route '/app/perfil'
*/
perfil.url = (options?: RouteQueryOptions) => {
    return perfil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::perfil
* @see app/Http/Controllers/App/Perfil/PerfilController.php:15
* @route '/app/perfil'
*/
perfil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: perfil.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::perfil
* @see app/Http/Controllers/App/Perfil/PerfilController.php:15
* @route '/app/perfil'
*/
perfil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: perfil.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::configuracoes
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
export const configuracoes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configuracoes.url(options),
    method: 'get',
})

configuracoes.definition = {
    methods: ["get","head"],
    url: '/app/configuracoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::configuracoes
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
configuracoes.url = (options?: RouteQueryOptions) => {
    return configuracoes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::configuracoes
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
configuracoes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: configuracoes.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Configuracoes\ConfiguracoesController::configuracoes
* @see app/Http/Controllers/App/Configuracoes/ConfiguracoesController.php:15
* @route '/app/configuracoes'
*/
configuracoes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: configuracoes.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::conexaoBancaria
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:15
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
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::conexaoBancaria
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:15
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.url = (options?: RouteQueryOptions) => {
    return conexaoBancaria.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::conexaoBancaria
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:15
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conexaoBancaria.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\ConexaoBancaria\ConexaoBancariaController::conexaoBancaria
* @see app/Http/Controllers/App/ConexaoBancaria/ConexaoBancariaController.php:15
* @route '/app/conexao-bancaria'
*/
conexaoBancaria.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conexaoBancaria.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::plano
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
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
* @see \App\Http\Controllers\App\Plano\PlanoController::plano
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
plano.url = (options?: RouteQueryOptions) => {
    return plano.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::plano
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
plano.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: plano.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Plano\PlanoController::plano
* @see app/Http/Controllers/App/Plano/PlanoController.php:15
* @route '/app/plano'
*/
plano.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: plano.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Suporte\AjudaController::ajuda
* @see app/Http/Controllers/App/Suporte/AjudaController.php:14
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
* @see \App\Http\Controllers\App\Suporte\AjudaController::ajuda
* @see app/Http/Controllers/App/Suporte/AjudaController.php:14
* @route '/app/ajuda'
*/
ajuda.url = (options?: RouteQueryOptions) => {
    return ajuda.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\AjudaController::ajuda
* @see app/Http/Controllers/App/Suporte/AjudaController.php:14
* @route '/app/ajuda'
*/
ajuda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ajuda.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Suporte\AjudaController::ajuda
* @see app/Http/Controllers/App/Suporte/AjudaController.php:14
* @route '/app/ajuda'
*/
ajuda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ajuda.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::chamados
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
export const chamados = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chamados.url(options),
    method: 'get',
})

chamados.definition = {
    methods: ["get","head"],
    url: '/app/chamados',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::chamados
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
chamados.url = (options?: RouteQueryOptions) => {
    return chamados.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::chamados
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
chamados.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chamados.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::chamados
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
chamados.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chamados.url(options),
    method: 'head',
})

const app = {
    dashboard: Object.assign(dashboard, dashboard074181035978),
    settings: Object.assign(settings, settings),
    conta: Object.assign(conta, conta),
    contas: Object.assign(contas, contas1f7ed9),
    lancamentos: Object.assign(lancamentos, lancamentos5ee860),
    cartoes: Object.assign(cartoes, cartoesB32811),
    categorias: Object.assign(categorias, categoriasC782cd),
    relatorios: Object.assign(relatorios, relatorios),
    limites: Object.assign(limites, limitesBff468),
    perfil: Object.assign(perfil, perfil9785a8),
    configuracoes: Object.assign(configuracoes, configuracoes0197ca),
    conexaoBancaria: Object.assign(conexaoBancaria, conexaoBancaria182595),
    plano: Object.assign(plano, plano44ff36),
    ajuda: Object.assign(ajuda, ajuda),
    chamados: Object.assign(chamados, chamados2b39c2),
}

export default app