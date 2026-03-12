import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const AccountController = { index }

export default AccountController