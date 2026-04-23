import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SpendingLimitController::index
* @see app/Http/Controllers/Api/SpendingLimitController.php:15
* @route '/api/spending-limits'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/spending-limits',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::index
* @see app/Http/Controllers/Api/SpendingLimitController.php:15
* @route '/api/spending-limits'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::index
* @see app/Http/Controllers/Api/SpendingLimitController.php:15
* @route '/api/spending-limits'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::index
* @see app/Http/Controllers/Api/SpendingLimitController.php:15
* @route '/api/spending-limits'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::store
* @see app/Http/Controllers/Api/SpendingLimitController.php:38
* @route '/api/spending-limits'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/spending-limits',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::store
* @see app/Http/Controllers/Api/SpendingLimitController.php:38
* @route '/api/spending-limits'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::store
* @see app/Http/Controllers/Api/SpendingLimitController.php:38
* @route '/api/spending-limits'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::update
* @see app/Http/Controllers/Api/SpendingLimitController.php:55
* @route '/api/spending-limits/{spending_limit}'
*/
export const update = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/spending-limits/{spending_limit}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::update
* @see app/Http/Controllers/Api/SpendingLimitController.php:55
* @route '/api/spending-limits/{spending_limit}'
*/
update.url = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spending_limit: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { spending_limit: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            spending_limit: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        spending_limit: typeof args.spending_limit === 'object'
        ? args.spending_limit.id
        : args.spending_limit,
    }

    return update.definition.url
            .replace('{spending_limit}', parsedArgs.spending_limit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::update
* @see app/Http/Controllers/Api/SpendingLimitController.php:55
* @route '/api/spending-limits/{spending_limit}'
*/
update.put = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::update
* @see app/Http/Controllers/Api/SpendingLimitController.php:55
* @route '/api/spending-limits/{spending_limit}'
*/
update.patch = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::destroy
* @see app/Http/Controllers/Api/SpendingLimitController.php:71
* @route '/api/spending-limits/{spending_limit}'
*/
export const destroy = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/spending-limits/{spending_limit}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::destroy
* @see app/Http/Controllers/Api/SpendingLimitController.php:71
* @route '/api/spending-limits/{spending_limit}'
*/
destroy.url = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { spending_limit: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { spending_limit: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            spending_limit: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        spending_limit: typeof args.spending_limit === 'object'
        ? args.spending_limit.id
        : args.spending_limit,
    }

    return destroy.definition.url
            .replace('{spending_limit}', parsedArgs.spending_limit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SpendingLimitController::destroy
* @see app/Http/Controllers/Api/SpendingLimitController.php:71
* @route '/api/spending-limits/{spending_limit}'
*/
destroy.delete = (args: { spending_limit: number | { id: number } } | [spending_limit: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const spendingLimits = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default spendingLimits