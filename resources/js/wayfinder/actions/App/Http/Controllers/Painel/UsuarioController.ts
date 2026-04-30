import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Painel\UsuarioController::index
* @see app/Http/Controllers/Painel/UsuarioController.php:15
* @route '/painel/usuarios'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/painel/usuarios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Painel\UsuarioController::index
* @see app/Http/Controllers/Painel/UsuarioController.php:15
* @route '/painel/usuarios'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\UsuarioController::index
* @see app/Http/Controllers/Painel/UsuarioController.php:15
* @route '/painel/usuarios'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Painel\UsuarioController::index
* @see app/Http/Controllers/Painel/UsuarioController.php:15
* @route '/painel/usuarios'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Painel\UsuarioController::show
* @see app/Http/Controllers/Painel/UsuarioController.php:38
* @route '/painel/usuarios/{usuario}'
*/
export const show = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/painel/usuarios/{usuario}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Painel\UsuarioController::show
* @see app/Http/Controllers/Painel/UsuarioController.php:38
* @route '/painel/usuarios/{usuario}'
*/
show.url = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { usuario: args }
    }

    if (Array.isArray(args)) {
        args = {
            usuario: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        usuario: args.usuario,
    }

    return show.definition.url
            .replace('{usuario}', parsedArgs.usuario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\UsuarioController::show
* @see app/Http/Controllers/Painel/UsuarioController.php:38
* @route '/painel/usuarios/{usuario}'
*/
show.get = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Painel\UsuarioController::show
* @see app/Http/Controllers/Painel/UsuarioController.php:38
* @route '/painel/usuarios/{usuario}'
*/
show.head = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Painel\UsuarioController::update
* @see app/Http/Controllers/Painel/UsuarioController.php:47
* @route '/painel/usuarios/{usuario}'
*/
export const update = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/painel/usuarios/{usuario}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Painel\UsuarioController::update
* @see app/Http/Controllers/Painel/UsuarioController.php:47
* @route '/painel/usuarios/{usuario}'
*/
update.url = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { usuario: args }
    }

    if (Array.isArray(args)) {
        args = {
            usuario: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        usuario: args.usuario,
    }

    return update.definition.url
            .replace('{usuario}', parsedArgs.usuario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\UsuarioController::update
* @see app/Http/Controllers/Painel/UsuarioController.php:47
* @route '/painel/usuarios/{usuario}'
*/
update.put = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Painel\UsuarioController::destroy
* @see app/Http/Controllers/Painel/UsuarioController.php:60
* @route '/painel/usuarios/{usuario}'
*/
export const destroy = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/painel/usuarios/{usuario}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Painel\UsuarioController::destroy
* @see app/Http/Controllers/Painel/UsuarioController.php:60
* @route '/painel/usuarios/{usuario}'
*/
destroy.url = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { usuario: args }
    }

    if (Array.isArray(args)) {
        args = {
            usuario: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        usuario: args.usuario,
    }

    return destroy.definition.url
            .replace('{usuario}', parsedArgs.usuario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Painel\UsuarioController::destroy
* @see app/Http/Controllers/Painel/UsuarioController.php:60
* @route '/painel/usuarios/{usuario}'
*/
destroy.delete = (args: { usuario: string | number } | [usuario: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const UsuarioController = { index, show, update, destroy }

export default UsuarioController