<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CreditCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'bank', 'last_four', 'flag',
        'limit_amount', 'invoice_amount', 'invoice_status',
        'color_from', 'color_to', 'archived',
    ];

    protected $casts = [
        'limit_amount'   => 'decimal:2',
        'invoice_amount' => 'decimal:2',
        'archived'       => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
