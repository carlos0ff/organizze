import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\App\BankConnectionController::index
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/conexao-bancaria',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\App\BankConnectionController::index
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\App\BankConnectionController::index
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\App\BankConnectionController::index
* @see app/Http/Controllers/App/BankConnectionController.php:9
* @route '/app/conexao-bancaria'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const BankConnectionController = { index }

export default BankConnectionController