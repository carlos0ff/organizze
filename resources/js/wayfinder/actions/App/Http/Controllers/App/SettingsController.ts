import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/configuracao',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\SettingsController::index
* @see app/Http/Controllers/App/SettingsController.php:13
* @route '/app/configuracao'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const SettingsController = { index }

export default SettingsController