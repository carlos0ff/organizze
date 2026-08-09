import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Conta\ContaController::index
* @see app/Http/Controllers/App/Conta/ContaController.php:15
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
* @see \App\Http\Controllers\App\Conta\ContaController::index
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::index
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::index
* @see app/Http/Controllers/App/Conta/ContaController.php:15
* @route '/app/contas'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::create
* @see app/Http/Controllers/App/Conta/ContaController.php:23
* @route '/app/contas/criar'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/app/contas/criar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::create
* @see app/Http/Controllers/App/Conta/ContaController.php:23
* @route '/app/contas/criar'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::create
* @see app/Http/Controllers/App/Conta/ContaController.php:23
* @route '/app/contas/criar'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::create
* @see app/Http/Controllers/App/Conta/ContaController.php:23
* @route '/app/contas/criar'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::store
* @see app/Http/Controllers/App/Conta/ContaController.php:31
* @route '/app/contas'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/contas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::store
* @see app/Http/Controllers/App/Conta/ContaController.php:31
* @route '/app/contas'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::store
* @see app/Http/Controllers/App/Conta/ContaController.php:31
* @route '/app/contas'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::show
* @see app/Http/Controllers/App/Conta/ContaController.php:39
* @route '/app/contas/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/contas/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::show
* @see app/Http/Controllers/App/Conta/ContaController.php:39
* @route '/app/contas/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::show
* @see app/Http/Controllers/App/Conta/ContaController.php:39
* @route '/app/contas/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::show
* @see app/Http/Controllers/App/Conta/ContaController.php:39
* @route '/app/contas/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::edit
* @see app/Http/Controllers/App/Conta/ContaController.php:47
* @route '/app/contas/{id}/editar'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/app/contas/{id}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::edit
* @see app/Http/Controllers/App/Conta/ContaController.php:47
* @route '/app/contas/{id}/editar'
*/
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::edit
* @see app/Http/Controllers/App/Conta/ContaController.php:47
* @route '/app/contas/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::edit
* @see app/Http/Controllers/App/Conta/ContaController.php:47
* @route '/app/contas/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::update
* @see app/Http/Controllers/App/Conta/ContaController.php:55
* @route '/app/contas/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/contas/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::update
* @see app/Http/Controllers/App/Conta/ContaController.php:55
* @route '/app/contas/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::update
* @see app/Http/Controllers/App/Conta/ContaController.php:55
* @route '/app/contas/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::destroy
* @see app/Http/Controllers/App/Conta/ContaController.php:63
* @route '/app/contas/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/contas/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::destroy
* @see app/Http/Controllers/App/Conta/ContaController.php:63
* @route '/app/contas/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::destroy
* @see app/Http/Controllers/App/Conta/ContaController.php:63
* @route '/app/contas/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::arquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:71
* @route '/app/contas/{id}/arquivar'
*/
export const arquivar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: arquivar.url(args, options),
    method: 'patch',
})

arquivar.definition = {
    methods: ["patch"],
    url: '/app/contas/{id}/arquivar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::arquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:71
* @route '/app/contas/{id}/arquivar'
*/
arquivar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return arquivar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::arquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:71
* @route '/app/contas/{id}/arquivar'
*/
arquivar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: arquivar.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\Conta\ContaController::desarquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:79
* @route '/app/contas/{id}/desarquivar'
*/
export const desarquivar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: desarquivar.url(args, options),
    method: 'patch',
})

desarquivar.definition = {
    methods: ["patch"],
    url: '/app/contas/{id}/desarquivar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Conta\ContaController::desarquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:79
* @route '/app/contas/{id}/desarquivar'
*/
desarquivar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return desarquivar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Conta\ContaController::desarquivar
* @see app/Http/Controllers/App/Conta/ContaController.php:79
* @route '/app/contas/{id}/desarquivar'
*/
desarquivar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: desarquivar.url(args, options),
    method: 'patch',
})

const ContaController = { index, create, store, show, edit, update, destroy, arquivar, desarquivar }

export default ContaController