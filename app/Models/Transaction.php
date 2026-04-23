<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    protected $fillable = [
        'user_id',
        'type',
        'description',
        'amount',
        'date',
        'account',
        'category',
        'note',
        'paid',
    ];

    protected $casts = [
        'date'   => 'date',
        'amount' => 'decimal:2',
        'paid'   => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
