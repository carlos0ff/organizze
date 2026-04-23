<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SpendingLimit;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SpendingLimitController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $month = (int) $request->get('month', now()->month);
        $year  = (int) $request->get('year', now()->year);

        $limits = SpendingLimit::where('user_id', Auth::id())->get();

        $spent = Transaction::where('user_id', Auth::id())
            ->where('type', 'despesa')
            ->whereMonth('date', $month)
            ->whereYear('date', $year)
            ->select('category', DB::raw('SUM(amount) as total'))
            ->groupBy('category')
            ->pluck('total', 'category');

        $result = $limits->map(fn ($limit) => [
            ...$limit->toArray(),
            'spent' => (float) ($spent[$limit->category] ?? 0),
        ]);

        return response()->json($result);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'category'     => ['required', 'string', 'max:100'],
            'limit_amount' => ['required', 'numeric', 'min:1'],
            'icon'         => ['nullable', 'string', 'max:50'],
            'color'        => ['nullable', 'string', 'max:50'],
        ]);

        $limit = SpendingLimit::updateOrCreate(
            ['user_id' => Auth::id(), 'category' => $data['category']],
            [...$data, 'user_id' => Auth::id()],
        );

        return response()->json($limit, 201);
    }

    public function update(Request $request, SpendingLimit $spendingLimit): JsonResponse
    {
        abort_if($spendingLimit->user_id !== Auth::id(), 403);

        $data = $request->validate([
            'category'     => ['string', 'max:100'],
            'limit_amount' => ['numeric', 'min:1'],
            'icon'         => ['nullable', 'string', 'max:50'],
            'color'        => ['nullable', 'string', 'max:50'],
        ]);

        $spendingLimit->update($data);

        return response()->json($spendingLimit);
    }

    public function destroy(SpendingLimit $spendingLimit): JsonResponse
    {
        abort_if($spendingLimit->user_id !== Auth::id(), 403);
        $spendingLimit->delete();

        return response()->json(null, 204);
    }
}
