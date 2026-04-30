import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\PerfilController::index
* @see app/Http/Controllers/App/PerfilController.php:12
* @route '/app/perfil'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/perfil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\PerfilController::index
* @see app/Http/Controllers/App/PerfilController.php:12
* @route '/app/perfil'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\PerfilController::index
* @see app/Http/Controllers/App/PerfilController.php:12
* @route '/app/perfil'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\PerfilController::index
* @see app/Http/Controllers/App/PerfilController.php:12
* @route '/app/perfil'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const PerfilController = { index }

export default PerfilController