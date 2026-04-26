<?php

namespace App\Http\Controllers\Painel;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

/** Responsável pelo gerenciamento de usuários no painel administrativo. */
class UsuarioController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $query = User::query();

        if ($request->filled('search')) {
            $query->where(fn ($q) => $q
                ->where('name', 'like', "%{$request->search}%")
                ->orWhere('email', 'like', "%{$request->search}%")
            );
        }

        if ($request->filled('plan'))   $query->where('plan', $request->plan);
        if ($request->filled('status')) $query->where('status', $request->status);
        if ($request->filled('role'))   $query->where('role', $request->role);

        $users = $query->latest()->paginate(20)->withQueryString();

        return Inertia::render('Panel/Users/Index', [
            'users'   => $users,
            'filters' => $request->only(['search', 'plan', 'status', 'role']),
        ]);
    }

    public function show(User $user): \Inertia\Response
    {
        $user->load([]);

        return Inertia::render('Panel/Users/Show', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, User $user): JsonResponse
    {
        $data = $request->validate([
            'plan'   => [Rule::in(['free', 'basic', 'pro'])],
            'status' => [Rule::in(['active', 'suspended', 'inactive'])],
            'role'   => [Rule::in(['admin', 'user'])],
        ]);

        $user->update($data);

        return response()->json($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
