import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::create
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:23
* @route '/app/lancamentos/criar'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/app/lancamentos/criar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::create
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:23
* @route '/app/lancamentos/criar'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::create
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:23
* @route '/app/lancamentos/criar'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::create
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:23
* @route '/app/lancamentos/criar'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::despesa
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:31
* @route '/app/lancamentos/despesa'
*/
export const despesa = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: despesa.url(options),
    method: 'post',
})

despesa.definition = {
    methods: ["post"],
    url: '/app/lancamentos/despesa',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::despesa
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:31
* @route '/app/lancamentos/despesa'
*/
despesa.url = (options?: RouteQueryOptions) => {
    return despesa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::despesa
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:31
* @route '/app/lancamentos/despesa'
*/
despesa.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: despesa.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::receita
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:39
* @route '/app/lancamentos/receita'
*/
export const receita = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: receita.url(options),
    method: 'post',
})

receita.definition = {
    methods: ["post"],
    url: '/app/lancamentos/receita',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::receita
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:39
* @route '/app/lancamentos/receita'
*/
receita.url = (options?: RouteQueryOptions) => {
    return receita.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::receita
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:39
* @route '/app/lancamentos/receita'
*/
receita.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: receita.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::transferencia
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:47
* @route '/app/lancamentos/transferencia'
*/
export const transferencia = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transferencia.url(options),
    method: 'post',
})

transferencia.definition = {
    methods: ["post"],
    url: '/app/lancamentos/transferencia',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::transferencia
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:47
* @route '/app/lancamentos/transferencia'
*/
transferencia.url = (options?: RouteQueryOptions) => {
    return transferencia.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::transferencia
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:47
* @route '/app/lancamentos/transferencia'
*/
transferencia.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transferencia.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::show
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:55
* @route '/app/lancamentos/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/lancamentos/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::show
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:55
* @route '/app/lancamentos/{id}'
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
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::show
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:55
* @route '/app/lancamentos/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::show
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:55
* @route '/app/lancamentos/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::edit
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:63
* @route '/app/lancamentos/{id}/editar'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/app/lancamentos/{id}/editar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::edit
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:63
* @route '/app/lancamentos/{id}/editar'
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
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::edit
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:63
* @route '/app/lancamentos/{id}/editar'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::edit
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:63
* @route '/app/lancamentos/{id}/editar'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::update
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:71
* @route '/app/lancamentos/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/app/lancamentos/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::update
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:71
* @route '/app/lancamentos/{id}'
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
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::update
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:71
* @route '/app/lancamentos/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::destroy
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:79
* @route '/app/lancamentos/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/lancamentos/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::destroy
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:79
* @route '/app/lancamentos/{id}'
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
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::destroy
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:79
* @route '/app/lancamentos/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::status
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:87
* @route '/app/lancamentos/{id}/status'
*/
export const status = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: status.url(args, options),
    method: 'patch',
})

status.definition = {
    methods: ["patch"],
    url: '/app/lancamentos/{id}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::status
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:87
* @route '/app/lancamentos/{id}/status'
*/
status.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return status.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::status
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:87
* @route '/app/lancamentos/{id}/status'
*/
status.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: status.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::conciliar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:95
* @route '/app/lancamentos/{id}/conciliar'
*/
export const conciliar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: conciliar.url(args, options),
    method: 'patch',
})

conciliar.definition = {
    methods: ["patch"],
    url: '/app/lancamentos/{id}/conciliar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::conciliar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:95
* @route '/app/lancamentos/{id}/conciliar'
*/
conciliar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return conciliar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::conciliar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:95
* @route '/app/lancamentos/{id}/conciliar'
*/
conciliar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: conciliar.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::copiar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:103
* @route '/app/lancamentos/{id}/copiar'
*/
export const copiar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: copiar.url(args, options),
    method: 'post',
})

copiar.definition = {
    methods: ["post"],
    url: '/app/lancamentos/{id}/copiar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::copiar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:103
* @route '/app/lancamentos/{id}/copiar'
*/
copiar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return copiar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Lancamento\LancamentoController::copiar
* @see app/Http/Controllers/App/Lancamento/LancamentoController.php:103
* @route '/app/lancamentos/{id}/copiar'
*/
copiar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: copiar.url(args, options),
    method: 'post',
})

const lancamentos = {
    create: Object.assign(create, create),
    despesa: Object.assign(despesa, despesa),
    receita: Object.assign(receita, receita),
    transferencia: Object.assign(transferencia, transferencia),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    status: Object.assign(status, status),
    conciliar: Object.assign(conciliar, conciliar),
    copiar: Object.assign(copiar, copiar),
}

export default lancamentos