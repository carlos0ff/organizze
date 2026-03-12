import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
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
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.url = (options?: RouteQueryOptions) => {
    return indexea4eab75445b6e636460dc1b7f1b8673.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/panel/contas'
*/
indexea4eab75445b6e636460dc1b7f1b8673.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
const index97d1bce32d14980a02a1da8f4d371174 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'get',
})

index97d1bce32d14980a02a1da8f4d371174.definition = {
    methods: ["get","head"],
    url: '/app/contas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index97d1bce32d14980a02a1da8f4d371174.url = (options?: RouteQueryOptions) => {
    return index97d1bce32d14980a02a1da8f4d371174.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index97d1bce32d14980a02a1da8f4d371174.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\AccountController::index
* @see app/Http/Controllers/App/AccountController.php:14
* @route '/app/contas'
*/
index97d1bce32d14980a02a1da8f4d371174.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'head',
})

export const index = {
    '/panel/contas': indexea4eab75445b6e636460dc1b7f1b8673,
    '/app/contas': index97d1bce32d14980a02a1da8f4d371174,
}

const AccountController = { index }

export default AccountController