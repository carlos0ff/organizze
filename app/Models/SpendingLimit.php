<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SpendingLimit extends Model
{
    protected $fillable = ['user_id', 'category', 'limit_amount', 'icon', 'color'];

    protected $casts = ['limit_amount' => 'decimal:2'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
