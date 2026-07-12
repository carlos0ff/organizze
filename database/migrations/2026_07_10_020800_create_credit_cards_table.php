<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('credit_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('bank');
            $table->string('last_four', 4);
            $table->enum('flag', ['visa', 'mastercard', 'elo', 'amex'])->default('mastercard');
            $table->decimal('limit_amount', 10, 2)->default(0);
            $table->decimal('invoice_amount', 10, 2)->default(0);
            $table->enum('invoice_status', ['aberta', 'fechada', 'paga'])->default('aberta');
            $table->string('color_from')->default('purple-600');
            $table->string('color_to')->default('indigo-800');
            $table->boolean('archived')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('credit_cards');
    }
};
