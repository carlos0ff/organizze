import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/panel/contas'
*/
const indexea4eab75445b6e636460dc1b7f1b8673 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'get',
})

indexea4eab75445b6e636460dc1b7f1b8673.definition = {
    methods: ["get","head"],
    url: '/panel/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.url = (options?: RouteQueryOptions) => {
    return indexea4eab75445b6e636460dc1b7f1b8673.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/app/conexoes-bancarias'
*/
const index6fe0e351fd05ac1759f0a59bc5fb44ce = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6fe0e351fd05ac1759f0a59bc5fb44ce.url(options),
    method: 'get',
})

index6fe0e351fd05ac1759f0a59bc5fb44ce.definition = {
    methods: ["get","head"],
    url: '/app/conexoes-bancarias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/app/conexoes-bancarias'
*/
index6fe0e351fd05ac1759f0a59bc5fb44ce.url = (options?: RouteQueryOptions) => {
    return index6fe0e351fd05ac1759f0a59bc5fb44ce.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/app/conexoes-bancarias'
*/
index6fe0e351fd05ac1759f0a59bc5fb44ce.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6fe0e351fd05ac1759f0a59bc5fb44ce.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:16
* @route '/app/conexoes-bancarias'
*/
index6fe0e351fd05ac1759f0a59bc5fb44ce.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6fe0e351fd05ac1759f0a59bc5fb44ce.url(options),
    method: 'head',
})

export const index = {
    '/panel/contas': indexea4eab75445b6e636460dc1b7f1b8673,
    '/app/conexoes-bancarias': index6fe0e351fd05ac1759f0a59bc5fb44ce,
}

const AccountController = { index }

export default AccountController