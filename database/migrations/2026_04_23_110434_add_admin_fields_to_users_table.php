<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role',   ['admin', 'user'])                    ->default('user')   ->after('email');
            $table->enum('plan',   ['free', 'basic', 'pro'])             ->default('free')   ->after('role');
            $table->enum('status', ['active', 'suspended', 'inactive'])  ->default('active') ->after('plan');
            $table->timestamp('plan_expires_at')->nullable()->after('status');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'plan', 'status', 'plan_expires_at']);
        });
    }
};
