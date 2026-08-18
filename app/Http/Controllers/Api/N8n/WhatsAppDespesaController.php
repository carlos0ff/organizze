<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\N8n;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WhatsAppDespesaController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'type'        => ['required', 'string', 'in:despesa,receita,transferencia'],
            'description' => ['required', 'string', 'max:255'],
            'amount'      => ['required', 'numeric', 'min:0.01'],
            'date'        => ['required', 'date_format:Y-m-d'],
            'category'    => ['nullable', 'string', 'max:100'],
            'note'        => ['nullable', 'string', 'max:1000'],
            'paid'        => ['nullable', 'boolean'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'   => 'validation_error',
                'message' => 'Payload inválido.',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $email = config('services.n8n.user_email');

        if (empty($email)) {
            return response()->json([
                'error'   => 'configuration_error',
                'message' => 'POUPAI_N8N_USER_EMAIL não configurado no servidor.',
            ], 500);
        }

        $user = User::where('email', $email)->first();

        if (! $user) {
            return response()->json([
                'error'   => 'user_not_found',
                'message' => "Usuário com e-mail '{$email}' não encontrado.",
            ], 404);
        }

        $data = $validator->validated();

        $transaction = Transaction::create([
            ...$data,
            'user_id' => $user->id,
            'paid'    => $data['paid'] ?? true,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Transação registrada com sucesso.',
            'data'    => [
                'id'          => $transaction->id,
                'type'        => $transaction->type,
                'description' => $transaction->description,
                'amount'      => $transaction->amount,
                'date'        => $transaction->date->format('Y-m-d'),
                'category'    => $transaction->category,
                'paid'        => $transaction->paid,
            ],
        ], 201);
    }
}
