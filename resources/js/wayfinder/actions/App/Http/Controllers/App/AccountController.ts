import { queryParams, type RouteDefinition, type RouteQueryOptions } from './../../../../../wayfinder';
/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/panel/contas'
 */
const indexea4eab75445b6e636460dc1b7f1b8673 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'get',
});

indexea4eab75445b6e636460dc1b7f1b8673.definition = {
    methods: ['get', 'head'],
    url: '/panel/contas',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/panel/contas'
 */
indexea4eab75445b6e636460dc1b7f1b8673.url = (options?: RouteQueryOptions) => {
    return indexea4eab75445b6e636460dc1b7f1b8673.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/panel/contas'
 */
indexea4eab75445b6e636460dc1b7f1b8673.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/panel/contas'
 */
indexea4eab75445b6e636460dc1b7f1b8673.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexea4eab75445b6e636460dc1b7f1b8673.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/contas'
 */
const index97d1bce32d14980a02a1da8f4d371174 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'get',
});

index97d1bce32d14980a02a1da8f4d371174.definition = {
    methods: ['get', 'head'],
    url: '/app/contas',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/contas'
 */
index97d1bce32d14980a02a1da8f4d371174.url = (options?: RouteQueryOptions) => {
    return index97d1bce32d14980a02a1da8f4d371174.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/contas'
 */
index97d1bce32d14980a02a1da8f4d371174.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/contas'
 */
index97d1bce32d14980a02a1da8f4d371174.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index97d1bce32d14980a02a1da8f4d371174.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/cards'
 */
const index884d33b2d400c034e53dd54eb34207d2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index884d33b2d400c034e53dd54eb34207d2.url(options),
    method: 'get',
});

index884d33b2d400c034e53dd54eb34207d2.definition = {
    methods: ['get', 'head'],
    url: '/app/cards',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/cards'
 */
index884d33b2d400c034e53dd54eb34207d2.url = (options?: RouteQueryOptions) => {
    return index884d33b2d400c034e53dd54eb34207d2.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/cards'
 */
index884d33b2d400c034e53dd54eb34207d2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index884d33b2d400c034e53dd54eb34207d2.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\App\AccountController::index
 * @see app/Http/Controllers/App/AccountController.php:14
 * @route '/app/cards'
 */
index884d33b2d400c034e53dd54eb34207d2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index884d33b2d400c034e53dd54eb34207d2.url(options),
    method: 'head',
});

export const index = {
    '/panel/contas': indexea4eab75445b6e636460dc1b7f1b8673,
    '/app/contas': index97d1bce32d14980a02a1da8f4d371174,
    '/app/cards': index884d33b2d400c034e53dd54eb34207d2,
};

const AccountController = { index };

export default AccountController;
