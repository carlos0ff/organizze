<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import PanelLayout from '@/Componentes/Painel/PanelLayout.vue';
import { Search, Filter, Pencil, Trash2, Eye, ChevronLeft, ChevronRight, X } from 'lucide-vue-next';

const props = defineProps({
    users:   { type: Object, default: () => ({ data: [], links: [], meta: {} }) },
    filters: { type: Object, default: () => ({}) },
});

// ==================== FILTROS ====================
const search = ref(props.filters.search ?? '');
const plan   = ref(props.filters.plan   ?? '');
const status = ref(props.filters.status ?? '');
const role   = ref(props.filters.role   ?? '');

function applyFilters() {
    router.get('/panel/usuarios', {
        search: search.value || undefined,
        plan:   plan.value   || undefined,
        status: status.value || undefined,
        role:   role.value   || undefined,
    }, { preserveState: true, replace: true });
}

function clearFilters() {
    search.value = ''; plan.value = ''; status.value = ''; role.value = '';
    applyFilters();
}

// ==================== EDIÇÃO INLINE ====================
const editingUser = ref(null);
const editForm    = ref({});

function openEdit(user) {
    editingUser.value = user.id;
    editForm.value = { plan: user.plan, status: user.status, role: user.role };
}

function cancelEdit() { editingUser.value = null; }

async function saveEdit(user) {
    await fetch(`/panel/usuarios/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
        body: JSON.stringify(editForm.value),
    });
    editingUser.value = null;
    router.reload({ only: ['users'] });
}

async function deleteUser(id) {
    if (!confirm('Excluir este usuário? Esta ação não pode ser desfeita.')) return;
    await fetch(`/panel/usuarios/${id}`, {
        method: 'DELETE',
        headers: { 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
    });
    router.reload({ only: ['users'] });
}

function getCookie(name) {
    return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] ?? '';
}

// ==================== HELPERS ====================
const planBadge = {
    free:  'bg-gray-100 text-gray-600',
    basic: 'bg-blue-100 text-blue-700',
    pro:   'bg-emerald-100 text-emerald-700',
};
const statusBadge = {
    active:    'bg-emerald-100 text-emerald-700',
    suspended: 'bg-red-100 text-red-600',
    inactive:  'bg-gray-100 text-gray-500',
};
const roleBadge = {
    admin: 'bg-purple-100 text-purple-700',
    user:  'bg-gray-100 text-gray-500',
};

function fmtDate(d) { return new Date(d).toLocaleDateString('pt-BR'); }
</script>

<template>
    <PanelLayout title="Usuários" subtitle="Gerencie todos os usuários da plataforma">
        <template #actions>
            <div class="flex items-center gap-2 text-xs text-gray-500">
                <span class="font-semibold">{{ users.meta?.total ?? users.data?.length ?? 0 }}</span> usuários
            </div>
        </template>

        <!-- Filtros -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-5 flex flex-wrap gap-3 items-end">
            <div class="flex-1 min-w-48 relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input v-model="search" @keyup.enter="applyFilters" type="text" placeholder="Nome ou email..."
                    class="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <select v-model="plan" class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="">Todos os planos</option>
                <option value="free">Free</option>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
            </select>
            <select v-model="status" class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="">Todos os status</option>
                <option value="active">Ativo</option>
                <option value="suspended">Suspenso</option>
                <option value="inactive">Inativo</option>
            </select>
            <select v-model="role" class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="">Todos os papéis</option>
                <option value="admin">Admin</option>
                <option value="user">Usuário</option>
            </select>
            <button @click="applyFilters" class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                <Filter class="w-3.5 h-3.5" /> Filtrar
            </button>
            <button @click="clearFilters" class="flex items-center gap-1 px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <X class="w-3.5 h-3.5" /> Limpar
            </button>
        </div>

        <!-- Tabela -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-gray-100 bg-gray-50">
                        <th class="text-left px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Usuário</th>
                        <th class="text-left px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Plano</th>
                        <th class="text-left px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Status</th>
                        <th class="text-left px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden xl:table-cell">Papel</th>
                        <th class="text-left px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Cadastro</th>
                        <th class="text-right px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                    <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-50 transition-colors group">
                        <!-- Usuário -->
                        <td class="px-5 py-3">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    {{ user.name?.charAt(0)?.toUpperCase() ?? '?' }}
                                </div>
                                <div class="min-w-0">
                                    <p class="font-semibold text-gray-800 truncate">{{ user.name }}</p>
                                    <p class="text-[11px] text-gray-400 truncate">{{ user.email }}</p>
                                </div>
                            </div>
                        </td>

                        <!-- Plano -->
                        <td class="px-4 py-3 hidden md:table-cell">
                            <template v-if="editingUser === user.id">
                                <select v-model="editForm.plan" class="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-400">
                                    <option value="free">Free</option>
                                    <option value="basic">Basic</option>
                                    <option value="pro">Pro</option>
                                </select>
                            </template>
                            <span v-else :class="planBadge[user.plan]" class="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                                {{ user.plan }}
                            </span>
                        </td>

                        <!-- Status -->
                        <td class="px-4 py-3 hidden lg:table-cell">
                            <template v-if="editingUser === user.id">
                                <select v-model="editForm.status" class="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-400">
                                    <option value="active">Ativo</option>
                                    <option value="suspended">Suspenso</option>
                                    <option value="inactive">Inativo</option>
                                </select>
                            </template>
                            <span v-else :class="statusBadge[user.status]" class="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                                {{ { active: 'Ativo', suspended: 'Suspenso', inactive: 'Inativo' }[user.status] ?? user.status }}
                            </span>
                        </td>

                        <!-- Papel -->
                        <td class="px-4 py-3 hidden xl:table-cell">
                            <template v-if="editingUser === user.id">
                                <select v-model="editForm.role" class="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-400">
                                    <option value="user">Usuário</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </template>
                            <span v-else :class="roleBadge[user.role]" class="text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                                {{ user.role === 'admin' ? 'Admin' : 'Usuário' }}
                            </span>
                        </td>

                        <!-- Cadastro -->
                        <td class="px-4 py-3 text-[11px] text-gray-400 hidden lg:table-cell">
                            {{ fmtDate(user.created_at) }}
                        </td>

                        <!-- Ações -->
                        <td class="px-5 py-3 text-right">
                            <div v-if="editingUser === user.id" class="flex items-center justify-end gap-2">
                                <button @click="saveEdit(user)" class="text-xs font-bold text-emerald-600 hover:underline">Salvar</button>
                                <button @click="cancelEdit" class="text-xs text-gray-400 hover:text-gray-600">Cancelar</button>
                            </div>
                            <div v-else class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a :href="`/panel/usuarios/${user.id}`" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Ver detalhes">
                                    <Eye class="w-3.5 h-3.5" />
                                </a>
                                <button @click="openEdit(user)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Editar">
                                    <Pencil class="w-3.5 h-3.5" />
                                </button>
                                <button @click="deleteUser(user.id)" class="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" title="Excluir">
                                    <Trash2 class="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </td>
                    </tr>

                    <tr v-if="users.data?.length === 0">
                        <td colspan="6" class="px-5 py-12 text-center text-sm text-gray-400">Nenhum usuário encontrado.</td>
                    </tr>
                </tbody>
            </table>

            <!-- Paginação -->
            <div v-if="users.links?.length > 3" class="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
                <p class="text-xs text-gray-400">
                    Página {{ users.meta?.current_page }} de {{ users.meta?.last_page }}
                    · {{ users.meta?.total }} registros
                </p>
                <div class="flex gap-1">
                    <a v-for="link in users.links" :key="link.label"
                        :href="link.url ?? '#'"
                        :class="[
                            link.active ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300',
                            !link.url ? 'opacity-40 pointer-events-none' : '',
                        ]"
                        class="px-3 py-1.5 text-xs font-semibold border rounded-lg transition-colors"
                        v-html="link.label"
                    />
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
