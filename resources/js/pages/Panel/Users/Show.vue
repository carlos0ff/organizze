<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import PanelLayout from '@/Components/panel/PanelLayout.vue';
import { ArrowLeft, Save, Shield, User as UserIcon, Mail, Calendar, CreditCard } from 'lucide-vue-next';

const props = defineProps({
    user: { type: Object, required: true },
});

const form = ref({
    plan:   props.user.plan,
    status: props.user.status,
    role:   props.user.role,
});

const saving = ref(false);

async function save() {
    saving.value = true;
    await fetch(`/panel/usuarios/${props.user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
        body: JSON.stringify(form.value),
    });
    saving.value = false;
    router.reload();
}

function getCookie(name) {
    return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] ?? '';
}

function fmtDate(d) {
    return d ? new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';
}

const planColors = { free: 'gray', basic: 'blue', pro: 'emerald' };
const statusColors = { active: 'emerald', suspended: 'red', inactive: 'gray' };
</script>

<template>
    <PanelLayout :title="user.name" subtitle="Detalhes do usuário">
        <template #actions>
            <a href="/panel/usuarios" class="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <ArrowLeft class="w-4 h-4" /> Voltar
            </a>
        </template>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Card principal do usuário -->
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl font-black mb-4">
                    {{ user.name?.charAt(0)?.toUpperCase() ?? '?' }}
                </div>
                <h2 class="text-lg font-bold text-gray-800">{{ user.name }}</h2>
                <p class="text-sm text-gray-400 mt-0.5">{{ user.email }}</p>

                <div class="flex gap-2 mt-3">
                    <span :class="`bg-${planColors[user.plan]}-100 text-${planColors[user.plan]}-700`" class="text-[10px] font-bold px-2.5 py-1 rounded-full capitalize">
                        {{ user.plan }}
                    </span>
                    <span :class="`bg-${statusColors[user.status]}-100 text-${statusColors[user.status]}-700`" class="text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {{ { active: 'Ativo', suspended: 'Suspenso', inactive: 'Inativo' }[user.status] }}
                    </span>
                </div>

                <div class="w-full mt-5 pt-5 border-t border-gray-100 space-y-3 text-left">
                    <div class="flex items-center gap-2.5 text-sm text-gray-600">
                        <UserIcon class="w-4 h-4 text-gray-400 shrink-0" />
                        <span>ID #{{ user.id }}</span>
                    </div>
                    <div class="flex items-center gap-2.5 text-sm text-gray-600">
                        <Mail class="w-4 h-4 text-gray-400 shrink-0" />
                        <span class="truncate">{{ user.email }}</span>
                    </div>
                    <div class="flex items-center gap-2.5 text-sm text-gray-600">
                        <Calendar class="w-4 h-4 text-gray-400 shrink-0" />
                        <span>Cadastrado em {{ fmtDate(user.created_at) }}</span>
                    </div>
                    <div class="flex items-center gap-2.5 text-sm text-gray-600">
                        <Shield class="w-4 h-4 text-gray-400 shrink-0" />
                        <span class="capitalize">{{ user.role === 'admin' ? 'Administrador' : 'Usuário comum' }}</span>
                    </div>
                    <div v-if="user.plan_expires_at" class="flex items-center gap-2.5 text-sm text-gray-600">
                        <CreditCard class="w-4 h-4 text-gray-400 shrink-0" />
                        <span>Plano expira em {{ fmtDate(user.plan_expires_at) }}</span>
                    </div>
                </div>
            </div>

            <!-- Edição -->
            <div class="lg:col-span-2 space-y-5">

                <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h3 class="text-sm font-bold text-gray-700 mb-4">Gerenciar conta</h3>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Plano</label>
                            <select v-model="form.plan" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <option value="free">Free — gratuito</option>
                                <option value="basic">Basic — R$ 19,90/mês</option>
                                <option value="pro">Pro — R$ 39,90/mês</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Status da conta</label>
                            <select v-model="form.status" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <option value="active">Ativo</option>
                                <option value="suspended">Suspenso</option>
                                <option value="inactive">Inativo</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Papel</label>
                            <select v-model="form.role" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <option value="user">Usuário</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div>

                        <button @click="save" :disabled="saving" class="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-60">
                            <Save class="w-4 h-4" />
                            {{ saving ? 'Salvando…' : 'Salvar alterações' }}
                        </button>
                    </div>
                </div>

                <!-- Zona de perigo -->
                <div class="bg-white rounded-xl border border-red-100 shadow-sm p-6">
                    <h3 class="text-sm font-bold text-red-600 mb-1">Zona de perigo</h3>
                    <p class="text-xs text-gray-400 mb-4">Ações irreversíveis. Proceda com cuidado.</p>
                    <div class="flex flex-wrap gap-3">
                        <button
                            @click="form.status = 'suspended'; save()"
                            v-if="user.status !== 'suspended'"
                            class="px-4 py-2 text-xs font-bold text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
                        >
                            Suspender conta
                        </button>
                        <button
                            @click="form.status = 'active'; save()"
                            v-if="user.status === 'suspended'"
                            class="px-4 py-2 text-xs font-bold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
                        >
                            Reativar conta
                        </button>
                        <a :href="`/panel/usuarios`" @click.prevent="deleteAndGoBack" class="px-4 py-2 text-xs font-bold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                            Excluir usuário
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
