import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::create
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:23
* @route '/app/cartoes/criar'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/app/cartoes/criar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::create
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:23
* @route '/app/cartoes/criar'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::create
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:23
* @route '/app/cartoes/criar'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::create
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:23
* @route '/app/cartoes/criar'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::store
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:31
* @route '/app/cartoes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/cartoes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::store
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:31
* @route '/app/cartoes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::store
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:31
* @route '/app/cartoes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::show
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:39
* @route '/app/cartoes/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/cartoes/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::show
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:39
* @route '/app/cartoes/{id}'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::show
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:39
* @route '/app/cartoes/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::show
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:39
* @route '/app/cartoes/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::edit
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:47
* @route '/app/cartoes/{id}/editar'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/app/cartoes/{id}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::edit
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:47
* @route '/app/cartoes/{id}/editar'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::edit
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:47
* @route '/app/cartoes/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::edit
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:47
* @route '/app/cartoes/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::update
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:55
* @route '/app/cartoes/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/cartoes/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::update
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:55
* @route '/app/cartoes/{id}'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::update
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:55
* @route '/app/cartoes/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::destroy
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:63
* @route '/app/cartoes/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/cartoes/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::destroy
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:63
* @route '/app/cartoes/{id}'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::destroy
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:63
* @route '/app/cartoes/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::arquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:71
* @route '/app/cartoes/{id}/arquivar'
*/
export const arquivar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: arquivar.url(args, options),
    method: 'patch',
})

arquivar.definition = {
    methods: ["patch"],
    url: '/app/cartoes/{id}/arquivar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::arquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:71
* @route '/app/cartoes/{id}/arquivar'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::arquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:71
* @route '/app/cartoes/{id}/arquivar'
*/
arquivar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: arquivar.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::desarquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:79
* @route '/app/cartoes/{id}/desarquivar'
*/
export const desarquivar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: desarquivar.url(args, options),
    method: 'patch',
})

desarquivar.definition = {
    methods: ["patch"],
    url: '/app/cartoes/{id}/desarquivar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::desarquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:79
* @route '/app/cartoes/{id}/desarquivar'
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
* @see \App\Http\Controllers\App\CartaoCredito\CartaoController::desarquivar
* @see app/Http/Controllers/App/CartaoCredito/CartaoController.php:79
* @route '/app/cartoes/{id}/desarquivar'
*/
desarquivar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: desarquivar.url(args, options),
    method: 'patch',
})

const cartoes = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    arquivar: Object.assign(arquivar, arquivar),
    desarquivar: Object.assign(desarquivar, desarquivar),
}

export default cartoes