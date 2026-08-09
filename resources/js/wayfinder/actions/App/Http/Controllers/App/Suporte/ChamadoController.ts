import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::index
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/chamados',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::index
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::index
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::index
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:15
* @route '/app/chamados'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::store
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:31
* @route '/app/chamados'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/chamados',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::store
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:31
* @route '/app/chamados'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::store
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:31
* @route '/app/chamados'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::show
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:39
* @route '/app/chamados/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/chamados/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::show
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:39
* @route '/app/chamados/{id}'
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
* @see \App\Http\Controllers\App\Suporte\ChamadoController::show
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:39
* @route '/app/chamados/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::show
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:39
* @route '/app/chamados/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::responder
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:47
* @route '/app/chamados/{id}/responder'
*/
export const responder = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: responder.url(args, options),
    method: 'post',
})

responder.definition = {
    methods: ["post"],
    url: '/app/chamados/{id}/responder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::responder
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:47
* @route '/app/chamados/{id}/responder'
*/
responder.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return responder.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::responder
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:47
* @route '/app/chamados/{id}/responder'
*/
responder.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: responder.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::fechar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:55
* @route '/app/chamados/{id}/fechar'
*/
export const fechar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: fechar.url(args, options),
    method: 'patch',
})

fechar.definition = {
    methods: ["patch"],
    url: '/app/chamados/{id}/fechar',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::fechar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:55
* @route '/app/chamados/{id}/fechar'
*/
fechar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return fechar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::fechar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:55
* @route '/app/chamados/{id}/fechar'
*/
fechar.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: fechar.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::reabrir
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:63
* @route '/app/chamados/{id}/reabrir'
*/
export const reabrir = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reabrir.url(args, options),
    method: 'patch',
})

reabrir.definition = {
    methods: ["patch"],
    url: '/app/chamados/{id}/reabrir',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::reabrir
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:63
* @route '/app/chamados/{id}/reabrir'
*/
reabrir.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reabrir.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::reabrir
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:63
* @route '/app/chamados/{id}/reabrir'
*/
reabrir.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reabrir.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::avaliar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:71
* @route '/app/chamados/{id}/avaliar'
*/
export const avaliar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: avaliar.url(args, options),
    method: 'post',
})

avaliar.definition = {
    methods: ["post"],
    url: '/app/chamados/{id}/avaliar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::avaliar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:71
* @route '/app/chamados/{id}/avaliar'
*/
avaliar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return avaliar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\Suporte\ChamadoController::avaliar
* @see app/Http/Controllers/App/Suporte/ChamadoController.php:71
* @route '/app/chamados/{id}/avaliar'
*/
avaliar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: avaliar.url(args, options),
    method: 'post',
})

const ChamadoController = { index, store, show, responder, fechar, reabrir, avaliar }

export default ChamadoController