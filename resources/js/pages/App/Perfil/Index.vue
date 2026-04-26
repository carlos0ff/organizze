<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    User, Mail, Phone, Lock, Camera, Save, Eye, EyeOff,
    Bell, Shield, Trash2, ChevronRight, Check,
} from 'lucide-vue-next';

const tab = ref('dados');

const form = ref({
    name: 'Thiago Santos',
    email: 'thiago@email.com',
    phone: '(11) 9 8765-4321',
    birth: '1990-05-14',
    cpf: '***.***.***-**',
});

const passwords = ref({ current: '', newPass: '', confirm: '' });
const showCurrent = ref(false);
const showNew = ref(false);
const saved = ref(false);

function saveProfile() {
    saved.value = true;
    setTimeout(() => (saved.value = false), 2500);
}

const avatarUrl = ref('https://i.pravatar.cc/200?img=12');

const TABS = [
    { key: 'dados',    label: 'Dados Pessoais', icon: User },
    { key: 'senha',    label: 'Senha',           icon: Lock },
    { key: 'notif',   label: 'Notificações',    icon: Bell },
    { key: 'privacy', label: 'Privacidade',      icon: Shield },
];
</script>

<template>
    <Navbar />

    <main class="max-w-5xl mx-auto px-4 pt-24 pb-16">

        <!-- Header -->
        <div class="mb-8">
            <h1 class="text-2xl font-bold text-gray-800">Meu Perfil</h1>
            <p class="text-sm text-gray-400 mt-1">Gerencie suas informações pessoais e preferências</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">

            <!-- Sidebar -->
            <aside class="lg:w-64 shrink-0">
                <!-- Avatar card -->
                <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center mb-4">
                    <div class="relative group mb-4">
                        <img :src="avatarUrl" class="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-100" />
                        <button class="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera class="w-5 h-5 text-white" />
                        </button>
                    </div>
                    <p class="font-bold text-gray-800">{{ form.name }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ form.email }}</p>
                    <span class="mt-3 text-[10px] font-bold px-3 py-1 bg-amber-50 text-amber-600 rounded-full border border-amber-100 uppercase">Plano Free</span>
                </div>

                <!-- Nav tabs -->
                <nav class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <button
                        v-for="t in TABS" :key="t.key"
                        @click="tab = t.key"
                        :class="tab === t.key ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500' : 'text-gray-600 hover:bg-gray-50'"
                        class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors"
                    >
                        <component :is="t.icon" class="w-4 h-4" />
                        {{ t.label }}
                        <ChevronRight class="w-3.5 h-3.5 ml-auto opacity-40" />
                    </button>
                </nav>
            </aside>

            <!-- Content -->
            <div class="flex-1">

                <!-- Dados Pessoais -->
                <div v-if="tab === 'dados'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-6">Dados Pessoais</h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div class="sm:col-span-2">
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Nome completo</label>
                            <div class="relative">
                                <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input v-model="form.name" type="text"
                                    class="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            </div>
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">E-mail</label>
                            <div class="relative">
                                <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input v-model="form.email" type="email"
                                    class="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            </div>
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Telefone</label>
                            <div class="relative">
                                <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input v-model="form.phone" type="tel"
                                    class="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            </div>
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Data de nascimento</label>
                            <input v-model="form.birth" type="date"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">CPF</label>
                            <input v-model="form.cpf" type="text" disabled
                                class="w-full px-4 py-2.5 border border-gray-100 bg-gray-50 rounded-lg text-sm text-gray-400 cursor-not-allowed" />
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-between pt-5 border-t border-gray-50">
                        <p v-if="saved" class="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                            <Check class="w-4 h-4" /> Alterações salvas!
                        </p>
                        <div v-else></div>
                        <button @click="saveProfile"
                            class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar alterações
                        </button>
                    </div>
                </div>

                <!-- Senha -->
                <div v-if="tab === 'senha'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-6">Alterar Senha</h2>

                    <div class="space-y-5 max-w-md">
                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Senha atual</label>
                            <div class="relative">
                                <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input v-model="passwords.current" :type="showCurrent ? 'text' : 'password'"
                                    class="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none" />
                                <button @click="showCurrent = !showCurrent" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <component :is="showCurrent ? EyeOff : Eye" class="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Nova senha</label>
                            <div class="relative">
                                <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                <input v-model="passwords.newPass" :type="showNew ? 'text' : 'password'"
                                    class="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none" />
                                <button @click="showNew = !showNew" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <component :is="showNew ? EyeOff : Eye" class="w-4 h-4" />
                                </button>
                            </div>
                            <p class="text-[10px] text-gray-400 mt-1">Mínimo 8 caracteres, com letras e números</p>
                        </div>

                        <div>
                            <label class="text-xs font-semibold text-gray-500 block mb-1.5">Confirmar nova senha</label>
                            <input v-model="passwords.confirm" type="password"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-emerald-400 outline-none" />
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-gray-50">
                        <button class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Lock class="w-4 h-4" /> Atualizar senha
                        </button>
                    </div>
                </div>

                <!-- Notificações -->
                <div v-if="tab === 'notif'" class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 class="text-base font-bold text-gray-800 mb-6">Preferências de Notificações</h2>

                    <div class="space-y-4">
                        <div v-for="item in [
                            { label: 'Contas a vencer', desc: 'Receba alertas quando uma conta estiver próxima do vencimento', on: true },
                            { label: 'Novas funcionalidades', desc: 'Seja o primeiro a saber sobre novidades no app', on: true },
                            { label: 'Relatório semanal', desc: 'Resumo financeiro toda segunda-feira por e-mail', on: false },
                            { label: 'Dicas financeiras', desc: 'Conteúdo do blog e dicas personalizadas', on: false },
                            { label: 'Limites atingidos', desc: 'Quando você atingir 80% ou 100% de um limite de gastos', on: true },
                        ]" :key="item.label"
                            class="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                            <div>
                                <p class="text-sm font-semibold text-gray-800">{{ item.label }}</p>
                                <p class="text-xs text-gray-400 mt-0.5">{{ item.desc }}</p>
                            </div>
                            <button
                                :class="item.on ? 'bg-emerald-500' : 'bg-gray-200'"
                                class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none"
                                @click="item.on = !item.on"
                            >
                                <span :class="item.on ? 'translate-x-4' : 'translate-x-0.5'"
                                    class="inline-block h-4 w-4 mt-0.5 transform rounded-full bg-white shadow transition duration-200"></span>
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-gray-50">
                        <button class="flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors">
                            <Save class="w-4 h-4" /> Salvar preferências
                        </button>
                    </div>
                </div>

                <!-- Privacidade -->
                <div v-if="tab === 'privacy'" class="space-y-4">
                    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h2 class="text-base font-bold text-gray-800 mb-4">Privacidade & Segurança</h2>

                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p class="text-sm font-semibold text-gray-800">Autenticação em dois fatores</p>
                                    <p class="text-xs text-gray-400 mt-0.5">Proteja sua conta com uma segunda verificação</p>
                                </div>
                                <button class="text-xs font-bold text-emerald-600 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition">
                                    Ativar
                                </button>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p class="text-sm font-semibold text-gray-800">Sessões ativas</p>
                                    <p class="text-xs text-gray-400 mt-0.5">2 dispositivos conectados</p>
                                </div>
                                <button class="text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                                    Gerenciar
                                </button>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p class="text-sm font-semibold text-gray-800">Exportar meus dados</p>
                                    <p class="text-xs text-gray-400 mt-0.5">Baixe todos os seus dados em CSV</p>
                                </div>
                                <button class="text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                                    Exportar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl border border-red-100 shadow-sm p-6">
                        <h2 class="text-base font-bold text-red-600 mb-2">Zona de perigo</h2>
                        <p class="text-sm text-gray-500 mb-4">Ao excluir sua conta, todos os seus dados serão permanentemente removidos. Esta ação não pode ser desfeita.</p>
                        <button class="flex items-center gap-2 px-5 py-2 bg-red-50 text-red-600 border border-red-200 text-sm font-semibold rounded-lg hover:bg-red-100 transition-colors">
                            <Trash2 class="w-4 h-4" /> Excluir minha conta
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
