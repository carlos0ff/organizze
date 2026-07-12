<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class SpendingLimitFactory extends Factory
{
    private static array $limits = [
        ['category' => 'Alimentação',  'icon' => 'utensils',    'color' => 'orange',  'amount' => 1200],
        ['category' => 'Transporte',   'icon' => 'car',         'color' => 'blue',    'amount' => 500],
        ['category' => 'Moradia',      'icon' => 'home',        'color' => 'purple',  'amount' => 2500],
        ['category' => 'Saúde',        'icon' => 'heart-pulse', 'color' => 'red',     'amount' => 400],
        ['category' => 'Educação',     'icon' => 'graduation-cap', 'color' => 'indigo', 'amount' => 300],
        ['category' => 'Lazer',        'icon' => 'gamepad-2',   'color' => 'pink',    'amount' => 350],
        ['category' => 'Vestuário',    'icon' => 'shirt',       'color' => 'yellow',  'amount' => 200],
        ['category' => 'Outros',       'icon' => 'tag',         'color' => 'emerald', 'amount' => 250],
    ];

    public function definition(): array
    {
        $item = $this->faker->randomElement(self::$limits);

        return [
            'user_id'      => User::factory(),
            'category'     => $item['category'],
            'limit_amount' => $item['amount'],
            'icon'         => $item['icon'],
            'color'        => $item['color'],
        ];
    }

    public static function allCategories(): array
    {
        return self::$limits;
    }
}
