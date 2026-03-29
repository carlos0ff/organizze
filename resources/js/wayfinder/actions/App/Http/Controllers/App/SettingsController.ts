import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
const index02fb94053db72022dd0615dc0ff77243 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02fb94053db72022dd0615dc0ff77243.url(options),
    method: 'get',
})

index02fb94053db72022dd0615dc0ff77243.definition = {
    methods: ["get","head"],
    url: '/panel/configuracoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
index02fb94053db72022dd0615dc0ff77243.url = (options?: RouteQueryOptions) => {
    return index02fb94053db72022dd0615dc0ff77243.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
index02fb94053db72022dd0615dc0ff77243.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02fb94053db72022dd0615dc0ff77243.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/panel/configuracoes'
*/
index02fb94053db72022dd0615dc0ff77243.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index02fb94053db72022dd0615dc0ff77243.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
const index82a144d4132d692f7d12c75c355af1db = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index82a144d4132d692f7d12c75c355af1db.url(options),
    method: 'get',
})

index82a144d4132d692f7d12c75c355af1db.definition = {
    methods: ["get","head"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index82a144d4132d692f7d12c75c355af1db.url = (options?: RouteQueryOptions) => {
    return index82a144d4132d692f7d12c75c355af1db.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index82a144d4132d692f7d12c75c355af1db.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index82a144d4132d692f7d12c75c355af1db.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index82a144d4132d692f7d12c75c355af1db.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index82a144d4132d692f7d12c75c355af1db.url(options),
    method: 'head',
})

export const index = {
    '/panel/configuracoes': index02fb94053db72022dd0615dc0ff77243,
    '/app/configuracao': index82a144d4132d692f7d12c75c355af1db,
}

const SettingsController = { index }

export default SettingsController