<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    private static array $despesas = [
        ['desc' => 'Supermercado Extra',      'cat' => 'Alimentação',  'account' => 'Nubank'],
        ['desc' => 'iFood - Pizza',            'cat' => 'Alimentação',  'account' => 'Nubank'],
        ['desc' => 'Restaurante Sabor Caseiro','cat' => 'Alimentação',  'account' => 'Bradesco'],
        ['desc' => 'Posto Ipiranga',           'cat' => 'Transporte',   'account' => 'Nubank'],
        ['desc' => 'Uber',                     'cat' => 'Transporte',   'account' => 'Nubank'],
        ['desc' => 'Aluguel',                  'cat' => 'Moradia',      'account' => 'Bradesco'],
        ['desc' => 'Condomínio',               'cat' => 'Moradia',      'account' => 'Bradesco'],
        ['desc' => 'Conta de Luz',             'cat' => 'Moradia',      'account' => 'Bradesco'],
        ['desc' => 'Internet Vivo Fibra',      'cat' => 'Moradia',      'account' => 'Bradesco'],
        ['desc' => 'Farmácia Pague Menos',     'cat' => 'Saúde',        'account' => 'Nubank'],
        ['desc' => 'Consulta Médica',          'cat' => 'Saúde',        'account' => 'Nubank'],
        ['desc' => 'Academia Smart Fit',       'cat' => 'Saúde',        'account' => 'Nubank'],
        ['desc' => 'Udemy - Curso Online',     'cat' => 'Educação',     'account' => 'Nubank'],
        ['desc' => 'Livros Amazon',            'cat' => 'Educação',     'account' => 'Nubank'],
        ['desc' => 'Netflix',                  'cat' => 'Lazer',        'account' => 'Nubank'],
        ['desc' => 'Spotify',                  'cat' => 'Lazer',        'account' => 'Nubank'],
        ['desc' => 'Cinema',                   'cat' => 'Lazer',        'account' => 'Nubank'],
        ['desc' => 'Renner - Camiseta',        'cat' => 'Vestuário',    'account' => 'Bradesco'],
        ['desc' => 'Mercado Livre',            'cat' => 'Outros',       'account' => 'Nubank'],
        ['desc' => 'Água Mineral',             'cat' => 'Alimentação',  'account' => 'Nubank'],
    ];

    private static array $receitas = [
        ['desc' => 'Salário',        'cat' => 'Salário',       'account' => 'Bradesco'],
        ['desc' => 'Freelance Dev',  'cat' => 'Freelance',     'account' => 'Nubank'],
        ['desc' => 'Rendimento CDB', 'cat' => 'Investimentos', 'account' => 'Bradesco'],
        ['desc' => '13° Salário',    'cat' => 'Salário',       'account' => 'Bradesco'],
        ['desc' => 'Reembolso',      'cat' => 'Outros',        'account' => 'Nubank'],
    ];

    public function definition(): array
    {
        $type = $this->faker->randomElement(['despesa', 'despesa', 'despesa', 'receita']);

        if ($type === 'receita') {
            $item   = $this->faker->randomElement(self::$receitas);
            $amount = $this->faker->randomFloat(2, 500, 8000);
        } else {
            $item   = $this->faker->randomElement(self::$despesas);
            $amount = $this->faker->randomFloat(2, 10, 800);
        }

        return [
            'user_id'     => User::factory(),
            'type'        => $type,
            'description' => $item['desc'],
            'amount'      => $amount,
            'date'        => $this->faker->dateTimeBetween('-3 months', 'now')->format('Y-m-d'),
            'account'     => $item['account'],
            'category'    => $item['cat'],
            'paid'        => $this->faker->boolean(80),
            'note'        => null,
        ];
    }

    public function despesa(): static
    {
        return $this->state(function () {
            $item = $this->faker->randomElement(self::$despesas);
            return [
                'type'        => 'despesa',
                'description' => $item['desc'],
                'amount'      => $this->faker->randomFloat(2, 10, 800),
                'account'     => $item['account'],
                'category'    => $item['cat'],
            ];
        });
    }

    public function receita(): static
    {
        return $this->state(function () {
            $item = $this->faker->randomElement(self::$receitas);
            return [
                'type'        => 'receita',
                'description' => $item['desc'],
                'amount'      => $this->faker->randomFloat(2, 500, 8000),
                'account'     => $item['account'],
                'category'    => $item['cat'],
            ];
        });
    }
}
