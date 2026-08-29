<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('cpf', 11)->nullable()->unique()->after('email');
            $table->date('birthdate')->nullable()->after('cpf');
            $table->string('gender', 30)->nullable()->after('birthdate');
            $table->string('avatar', 500)->nullable()->after('gender');
            $table->enum('status', ['pending', 'active', 'blocked'])->default('pending')->after('avatar');
            $table->timestamp('last_login_at')->nullable()->after('status');
            $table->softDeletes();

            $table->index('status');
            $table->index('last_login_at');
            $table->index('deleted_at');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['last_login_at']);
            $table->dropIndex(['deleted_at']);
            $table->dropColumn(['cpf', 'birthdate', 'gender', 'avatar', 'status', 'last_login_at', 'deleted_at']);
        });
    }
};
