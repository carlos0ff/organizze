<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    User, Mail, Phone, Calendar, MapPin, Camera,
    Lock, Eye, EyeOff, Shield, Trash2, LogOut,
    Check, AlertTriangle, Edit3, Save, X,
    CreditCard, TrendingUp, ArrowUpCircle, ArrowDownCircle,
} from 'lucide-vue-next';

// --- Estado do perfil ---
const editing = ref(false);

const profile = ref({
    name:      'Carlos Silva',
    email:     'carlos@exemplo.com.br',
    phone:     '(11) 99999-0000',
    birthdate: '1995-04-22',
    city:      'São Paulo, SP',
    avatar:    null,
});

const draft = ref({ ...profile.value });

function startEdit() {
    draft.value = { ...profile.value };
    editing.value = true;
}
function cancelEdit() { editing.value = false; }
function saveEdit() {
    profile.value = { ...draft.value };
    editing.value = false;
    showToast('Perfil atualizado com sucesso!');
}

// --- Senha ---
const showPass = ref({ current: false, next: false, confirm: false });
const passForm = ref({ current: '', next: '', confirm: '' });
const passError = ref('');

function togglePass(field) { showPass.value[field] = !showPass.value[field]; }

function savePassword() {
    passError.value = '';
    if (!passForm.value.current) { passError.value = 'Informe a senha atual.'; return; }
    if (passForm.value.next.length < 8) { passError.value = 'A nova senha deve ter ao menos 8 caracteres.'; return; }
    if (passForm.value.next !== passForm.value.confirm) { passError.value = 'As senhas não coincidem.'; return; }
    passForm.value = { current: '', next: '', confirm: '' };
    showToast('Senha alterada com sucesso!');
}

// --- Estatísticas ---
const stats = [
    { label: 'Transações', value: '248', icon: ArrowUpCircle,   bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Receitas',   value: 'R$ 5.500', icon: TrendingUp, bg: 'bg-blue-50',    color: 'text-blue-600'    },
    { label: 'Despesas',   value: 'R$ 2.470', icon: ArrowDownCircle, bg: 'bg-red-50', color: 'text-red-500'   },
    { label: 'Cartões',    value: '3',         icon: CreditCard, bg: 'bg-purple-50',  color: 'text-purple-600' },
];

// --- Toast ---
const toast = ref({ show: false, msg: '' });
function showToast(msg) {
    toast.value = { show: true, msg };
    setTimeout(() => (toast.value.show = false), 3000);
}

// --- Zona de perigo ---
const confirmDelete = ref(false);
</script>

<template>
    <Navbar />

    <main class="max-w-3xl mx-auto px-4 pt-24 pb-16">

        <!-- Toast -->
        <Transition enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-2"
                    leave-active-class="transition duration-200 ease-in"
                    leave-to-class="opacity-0 -translate-y-2">
            <div v-if="toast.show"
                class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl">
                <Check class="w-4 h-4 text-emerald-400" />
                {{ toast.msg }}
            </div>
        </Transition>

        <!-- Header -->
        <div class="flex items-center gap-2 mb-8">
            <User class="w-5 h-5 text-emerald-500" />
            <h1 class="text-xl font-bold text-gray-800">Meu Perfil</h1>
        </div>

        <!-- Card avatar + info principal -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div class="flex items-start gap-5">

                <!-- Avatar -->
                <div class="relative shrink-0">
                    <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow">
                        <span class="text-3xl font-bold text-white select-none">
                            {{ profile.name.charAt(0).toUpperCase() }}
                        </span>
                    </div>
                    <button class="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors">
                        <Camera class="w-3.5 h-3.5 text-gray-500" />
                    </button>
                </div>

                <!-- Nome + plano -->
                <div class="flex-1 min-w-0">
                    <h2 class="text-lg font-bold text-gray-900 truncate">{{ profile.name }}</h2>
                    <p class="text-sm text-gray-400 truncate">{{ profile.email }}</p>
                    <div class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <Shield class="w-3.5 h-3.5 text-emerald-500" />
                        <span class="text-xs font-semibold text-emerald-600">Plano Premium</span>
                    </div>
                </div>

                <!-- Botão editar -->
                <button v-if="!editing" @click="startEdit"
                    class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <Edit3 class="w-4 h-4" /> Editar
                </button>
            </div>
        </div>

        <!-- Estatísticas rápidas -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div v-for="s in stats" :key="s.label"
                class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center" :class="s.bg">
                    <component :is="s.icon" class="w-5 h-5" :class="s.color" />
                </div>
                <p class="text-base font-bold text-gray-800">{{ s.value }}</p>
                <p class="text-xs text-gray-400">{{ s.label }}</p>
            </div>
        </div>

        <!-- Dados pessoais -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div class="flex items-center justify-between mb-5">
                <h3 class="text-sm font-bold text-gray-700">Dados pessoais</h3>
                <div v-if="editing" class="flex gap-2">
                    <button @click="cancelEdit"
                        class="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        <X class="w-3.5 h-3.5" /> Cancelar
                    </button>
                    <button @click="saveEdit"
                        class="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors">
                        <Save class="w-3.5 h-3.5" /> Salvar
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <!-- Nome -->
                <div>
                    <label class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
                        <User class="w-3.5 h-3.5" /> Nome completo
                    </label>
                    <input v-if="editing" v-model="draft.name" type="text"
                        class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                    <p v-else class="text-sm font-medium text-gray-800 px-1">{{ profile.name }}</p>
                </div>

                <!-- Email -->
                <div>
                    <label class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
                        <Mail class="w-3.5 h-3.5" /> E-mail
                    </label>
                    <input v-if="editing" v-model="draft.email" type="email"
                        class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                    <p v-else class="text-sm font-medium text-gray-800 px-1">{{ profile.email }}</p>
                </div>

                <!-- Telefone -->
                <div>
                    <label class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
                        <Phone class="w-3.5 h-3.5" /> Telefone
                    </label>
                    <input v-if="editing" v-model="draft.phone" type="tel"
                        class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                    <p v-else class="text-sm font-medium text-gray-800 px-1">{{ profile.phone }}</p>
                </div>

                <!-- Nascimento -->
                <div>
                    <label class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
                        <Calendar class="w-3.5 h-3.5" /> Data de nascimento
                    </label>
                    <input v-if="editing" v-model="draft.birthdate" type="date"
                        class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                    <p v-else class="text-sm font-medium text-gray-800 px-1">
                        {{ new Date(profile.birthdate + 'T00:00:00').toLocaleDateString('pt-BR') }}
                    </p>
                </div>

                <!-- Cidade -->
                <div class="sm:col-span-2">
                    <label class="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1.5">
                        <MapPin class="w-3.5 h-3.5" /> Cidade
                    </label>
                    <input v-if="editing" v-model="draft.city" type="text"
                        class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                    <p v-else class="text-sm font-medium text-gray-800 px-1">{{ profile.city }}</p>
                </div>
            </div>
        </div>

        <!-- Alterar senha -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div class="flex items-center gap-2 mb-5">
                <Lock class="w-4 h-4 text-gray-400" />
                <h3 class="text-sm font-bold text-gray-700">Alterar senha</h3>
            </div>

            <div class="space-y-4">

                <div v-for="(field, key) in { current: 'Senha atual', next: 'Nova senha', confirm: 'Confirmar nova senha' }"
                    :key="key">
                    <label class="text-xs font-semibold text-gray-500 block mb-1.5">{{ field }}</label>
                    <div class="relative">
                        <input v-model="passForm[key]"
                            :type="showPass[key] ? 'text' : 'password'"
                            class="w-full px-4 py-2.5 pr-10 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition"
                            :placeholder="field" />
                        <button type="button" @click="togglePass(key)"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <component :is="showPass[key] ? EyeOff : Eye" class="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <p v-if="passError" class="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                    <AlertTriangle class="w-3.5 h-3.5" /> {{ passError }}
                </p>

                <button @click="savePassword"
                    class="w-full py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors">
                    Alterar senha
                </button>
            </div>
        </div>

        <!-- Zona de perigo -->
        <div class="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
            <div class="flex items-center gap-2 mb-4">
                <AlertTriangle class="w-4 h-4 text-red-400" />
                <h3 class="text-sm font-bold text-red-500">Zona de perigo</h3>
            </div>

            <div v-if="!confirmDelete" class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-semibold text-gray-700">Excluir conta</p>
                    <p class="text-xs text-gray-400 mt-0.5">Esta ação é irreversível. Todos os seus dados serão removidos.</p>
                </div>
                <button @click="confirmDelete = true"
                    class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
                    <Trash2 class="w-4 h-4" /> Excluir
                </button>
            </div>

            <div v-else class="bg-red-50 border border-red-100 rounded-xl p-4">
                <p class="text-sm font-bold text-red-600 mb-1">Tem certeza?</p>
                <p class="text-xs text-red-400 mb-4">Todos os lançamentos, limites e configurações serão perdidos permanentemente.</p>
                <div class="flex gap-2">
                    <button @click="confirmDelete = false"
                        class="flex-1 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-white transition-colors">
                        Cancelar
                    </button>
                    <button class="flex-1 py-2 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors">
                        Confirmar exclusão
                    </button>
                </div>
            </div>
        </div>

    </main>
</template>
