import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::edit
* @see app/Http/Controllers/App/Perfil/PerfilController.php:23
* @route '/app/perfil/editar'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/app/perfil/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::edit
* @see app/Http/Controllers/App/Perfil/PerfilController.php:23
* @route '/app/perfil/editar'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::edit
* @see app/Http/Controllers/App/Perfil/PerfilController.php:23
* @route '/app/perfil/editar'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::edit
* @see app/Http/Controllers/App/Perfil/PerfilController.php:23
* @route '/app/perfil/editar'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::update
* @see app/Http/Controllers/App/Perfil/PerfilController.php:32
* @route '/app/perfil'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/perfil',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::update
* @see app/Http/Controllers/App/Perfil/PerfilController.php:32
* @route '/app/perfil'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Perfil\PerfilController::update
* @see app/Http/Controllers/App/Perfil/PerfilController.php:32
* @route '/app/perfil'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const perfil = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default perfil