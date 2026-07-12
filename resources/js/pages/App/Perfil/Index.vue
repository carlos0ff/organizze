<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import Footer from '@/Components/layout/Footer.vue';
import {
    User, Settings, Shield, Bell, Link2, Download,
    Camera, Trash2, Save, AlertTriangle, Eye, EyeOff,
    Check, Moon, Sun, Globe, DollarSign, Clock,
} from 'lucide-vue-next';

// --- Seção ativa ---
const active = ref('perfil');

const nav = [
    { key: 'perfil',        label: 'Perfil',        icon: User     },
    { key: 'preferencias',  label: 'Preferências',  icon: Settings },
    { key: 'seguranca',     label: 'Segurança',     icon: Shield   },
    { key: 'notificacoes',  label: 'Notificações',  icon: Bell     },
    { key: 'integracoes',   label: 'Integrações',   icon: Link2    },
    { key: 'backup',        label: 'Backup',        icon: Download },
];

// --- Perfil ---
const profile = ref({
    name:      'Felipe Silva Santos',
    email:     'felipe@email.com',
    phone:     '(11) 99999-9999',
    birthdate: '1990-05-15',
    address:   'Rua das Flores, 123 - São Paulo, SP',
});

// --- Toast ---
const toast = ref({ show: false, msg: '' });
function showToast(msg) {
    toast.value = { show: true, msg };
    setTimeout(() => (toast.value.show = false), 3000);
}

function savePerfil() { showToast('Alterações salvas com sucesso!'); }

// --- Senha ---
const passForm = ref({ current: '', next: '', confirm: '' });
const showPass  = ref({ current: false, next: false, confirm: false });
const passError = ref('');

function savePassword() {
    passError.value = '';
    if (!passForm.value.current)           { passError.value = 'Informe a senha atual.'; return; }
    if (passForm.value.next.length < 8)    { passError.value = 'Mínimo 8 caracteres.'; return; }
    if (passForm.value.next !== passForm.value.confirm) { passError.value = 'As senhas não coincidem.'; return; }
    passForm.value = { current: '', next: '', confirm: '' };
    showToast('Senha alterada com sucesso!');
}

// --- Preferências ---
const prefs = ref({
    moeda:  'BRL',
    idioma: 'pt-BR',
    fuso:   'America/Sao_Paulo',
    tema:   'light',
});

function savePrefs() { showToast('Preferências salvas!'); }

// --- Notificações ---
const notifSettings = ref({
    email_lancamentos: true,
    email_relatorios:  true,
    email_limites:     false,
    push_lancamentos:  true,
    push_alertas:      true,
    push_dicas:        false,
});

function saveNotif() { showToast('Notificações atualizadas!'); }

// --- Zona de perigo ---
const confirmDelete = ref(false);
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-gray-50 pt-20">

        <!-- Toast -->
        <Transition enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-2"
                    leave-active-class="transition duration-200"
                    leave-to-class="opacity-0 -translate-y-2">
            <div v-if="toast.show"
                class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl">
                <Check class="w-4 h-4 text-emerald-400" /> {{ toast.msg }}
            </div>
        </Transition>

        <div class="max-w-5xl mx-auto px-4 py-10">

            <!-- Page header -->
            <div class="mb-8">
                <h1 class="text-2xl font-bold text-gray-900">Configurações</h1>
                <p class="text-sm text-gray-500 mt-1">Gerencie suas preferências e dados pessoais</p>
            </div>

            <div class="flex gap-6 items-start">

                <!-- Sidebar -->
                <aside class="w-60 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <nav class="p-2">
                        <button v-for="item in nav" :key="item.key"
                            @click="active = item.key"
                            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                            :class="active === item.key
                                ? 'bg-emerald-500 text-white'
                                : 'text-gray-600 hover:bg-gray-50'">
                            <component :is="item.icon" class="w-4 h-4 shrink-0" />
                            {{ item.label }}
                        </button>
                    </nav>
                </aside>

                <!-- Conteúdo -->
                <div class="flex-1 min-w-0 space-y-5">

                    <!-- ── PERFIL ── -->
                    <div v-if="active === 'perfil'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-6">Informações do Perfil</h2>

                        <!-- Avatar -->
                        <div class="flex items-center gap-4 mb-7">
                            <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                <User class="w-8 h-8 text-emerald-500" />
                            </div>
                            <div class="flex gap-2">
                                <button class="px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                    Alterar Foto
                                </button>
                                <button class="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    Remover
                                </button>
                            </div>
                        </div>

                        <!-- Formulário -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">Nome Completo</label>
                                <input v-model="profile.name" type="text"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                            </div>

                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">E-mail</label>
                                <input v-model="profile.email" type="email"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                            </div>

                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">Telefone</label>
                                <input v-model="profile.phone" type="tel"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                            </div>

                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">Data de Nascimento</label>
                                <input v-model="profile.birthdate" type="date"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                            </div>

                            <div class="sm:col-span-2">
                                <label class="block text-sm text-gray-600 mb-1.5">Endereço</label>
                                <input v-model="profile.address" type="text"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button @click="savePerfil"
                                class="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                Salvar Alterações
                            </button>
                        </div>
                    </div>

                    <!-- ── PREFERÊNCIAS ── -->
                    <div v-if="active === 'preferencias'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-6">Preferências</h2>

                        <div class="space-y-5">

                            <div>
                                <label class="flex items-center gap-1.5 text-sm text-gray-600 mb-1.5">
                                    <DollarSign class="w-4 h-4 text-gray-400" /> Moeda
                                </label>
                                <select v-model="prefs.moeda"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 transition bg-white">
                                    <option value="BRL">R$ — Real Brasileiro</option>
                                    <option value="USD">$ — Dólar Americano</option>
                                    <option value="EUR">€ — Euro</option>
                                </select>
                            </div>

                            <div>
                                <label class="flex items-center gap-1.5 text-sm text-gray-600 mb-1.5">
                                    <Globe class="w-4 h-4 text-gray-400" /> Idioma
                                </label>
                                <select v-model="prefs.idioma"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 transition bg-white">
                                    <option value="pt-BR">Português (Brasil)</option>
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                </select>
                            </div>

                            <div>
                                <label class="flex items-center gap-1.5 text-sm text-gray-600 mb-1.5">
                                    <Clock class="w-4 h-4 text-gray-400" /> Fuso horário
                                </label>
                                <select v-model="prefs.fuso"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 transition bg-white">
                                    <option value="America/Sao_Paulo">Brasília (UTC-3)</option>
                                    <option value="America/Manaus">Manaus (UTC-4)</option>
                                    <option value="America/Belem">Belém (UTC-3)</option>
                                </select>
                            </div>

                            <div>
                                <label class="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                                    <Sun class="w-4 h-4 text-gray-400" /> Tema
                                </label>
                                <div class="flex gap-3">
                                    <button v-for="t in [{ val: 'light', label: 'Claro', icon: Sun }, { val: 'dark', label: 'Escuro', icon: Moon }]"
                                        :key="t.val"
                                        @click="prefs.tema = t.val"
                                        class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors"
                                        :class="prefs.tema === t.val
                                            ? 'bg-emerald-500 text-white border-emerald-500'
                                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'">
                                        <component :is="t.icon" class="w-4 h-4" />
                                        {{ t.label }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button @click="savePrefs"
                                class="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                Salvar Alterações
                            </button>
                        </div>
                    </div>

                    <!-- ── SEGURANÇA ── -->
                    <div v-if="active === 'seguranca'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-6">Segurança</h2>

                        <div class="space-y-4">
                            <div v-for="(label, key) in { current: 'Senha atual', next: 'Nova senha', confirm: 'Confirmar nova senha' }"
                                :key="key">
                                <label class="block text-sm text-gray-600 mb-1.5">{{ label }}</label>
                                <div class="relative">
                                    <input v-model="passForm[key]"
                                        :type="showPass[key] ? 'text' : 'password'"
                                        :placeholder="label"
                                        class="w-full px-4 py-2.5 pr-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition" />
                                    <button type="button" @click="showPass[key] = !showPass[key]"
                                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <component :is="showPass[key] ? EyeOff : Eye" class="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <p v-if="passError" class="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                                <AlertTriangle class="w-3.5 h-3.5" /> {{ passError }}
                            </p>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button @click="savePassword"
                                class="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                Alterar Senha
                            </button>
                        </div>

                        <!-- Zona de perigo -->
                        <div class="mt-8 pt-6 border-t border-gray-100">
                            <h3 class="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
                                <AlertTriangle class="w-4 h-4" /> Zona de perigo
                            </h3>
                            <div v-if="!confirmDelete" class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-semibold text-gray-700">Excluir conta</p>
                                    <p class="text-xs text-gray-400 mt-0.5">Ação irreversível. Todos os dados serão removidos.</p>
                                </div>
                                <button @click="confirmDelete = true"
                                    class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                                    <Trash2 class="w-4 h-4" /> Excluir conta
                                </button>
                            </div>
                            <div v-else class="bg-red-50 border border-red-100 rounded-xl p-4">
                                <p class="text-sm font-bold text-red-600 mb-1">Tem certeza?</p>
                                <p class="text-xs text-red-400 mb-4">Esta ação não pode ser desfeita.</p>
                                <div class="flex gap-2">
                                    <button @click="confirmDelete = false"
                                        class="flex-1 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                                        Cancelar
                                    </button>
                                    <button class="flex-1 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ── NOTIFICAÇÕES ── -->
                    <div v-if="active === 'notificacoes'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-6">Notificações</h2>

                        <div class="space-y-6">
                            <div v-for="group in [
                                { title: 'Por e-mail', items: [
                                    { key: 'email_lancamentos', label: 'Lançamentos', desc: 'Aviso ao registrar novas transações' },
                                    { key: 'email_relatorios',  label: 'Relatórios mensais', desc: 'Resumo ao fechar o mês' },
                                    { key: 'email_limites',     label: 'Alertas de limite', desc: 'Quando atingir 80% do limite' },
                                ]},
                                { title: 'Push', items: [
                                    { key: 'push_lancamentos', label: 'Novos lançamentos', desc: 'Notificação em tempo real' },
                                    { key: 'push_alertas',     label: 'Alertas financeiros', desc: 'Limites e vencimentos' },
                                    { key: 'push_dicas',       label: 'Dicas da semana', desc: 'Conteúdo educativo' },
                                ]},
                            ]" :key="group.title">
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{{ group.title }}</p>
                                    <div class="space-y-3">
                                        <div v-for="item in group.items" :key="item.key"
                                            class="flex items-center justify-between py-2">
                                            <div>
                                                <p class="text-sm font-medium text-gray-700">{{ item.label }}</p>
                                                <p class="text-xs text-gray-400">{{ item.desc }}</p>
                                            </div>
                                            <button @click="notifSettings[item.key] = !notifSettings[item.key]"
                                                class="relative w-10 h-5.5 rounded-full transition-colors duration-200 focus:outline-none"
                                                :class="notifSettings[item.key] ? 'bg-emerald-500' : 'bg-gray-200'">
                                                <span class="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                                                    :class="notifSettings[item.key] ? 'translate-x-4' : 'translate-x-0'"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button @click="saveNotif"
                                class="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                Salvar Alterações
                            </button>
                        </div>
                    </div>

                    <!-- ── INTEGRAÇÕES ── -->
                    <div v-if="active === 'integracoes'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-2">Integrações</h2>
                        <p class="text-sm text-gray-400 mb-6">Conecte suas contas bancárias e serviços externos.</p>

                        <div class="space-y-3">
                            <div v-for="bank in [
                                { name: 'Nubank',   status: 'Conectado',    color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                                { name: 'Itaú',     status: 'Desconectado', color: 'text-gray-500 bg-gray-50 border-gray-100'          },
                                { name: 'Bradesco', status: 'Desconectado', color: 'text-gray-500 bg-gray-50 border-gray-100'          },
                            ]" :key="bank.name"
                                class="flex items-center justify-between px-4 py-3.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Link2 class="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-gray-700">{{ bank.name }}</p>
                                        <span class="text-xs font-medium px-2 py-0.5 rounded-full border" :class="bank.color">
                                            {{ bank.status }}
                                        </span>
                                    </div>
                                </div>
                                <button class="text-sm font-semibold px-4 py-1.5 rounded-lg border border-emerald-200 text-emerald-600 hover:bg-emerald-50 transition-colors">
                                    {{ bank.status === 'Conectado' ? 'Desconectar' : 'Conectar' }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- ── BACKUP ── -->
                    <div v-if="active === 'backup'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                        <h2 class="text-base font-bold text-gray-800 mb-2">Backup</h2>
                        <p class="text-sm text-gray-400 mb-6">Exporte ou importe seus dados financeiros.</p>

                        <div class="space-y-4">
                            <div class="flex items-center justify-between px-4 py-4 rounded-xl border border-gray-100">
                                <div>
                                    <p class="text-sm font-semibold text-gray-700">Exportar dados</p>
                                    <p class="text-xs text-gray-400 mt-0.5">Baixe todos seus lançamentos em CSV ou JSON</p>
                                </div>
                                <div class="flex gap-2">
                                    <button class="px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">CSV</button>
                                    <button class="px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">JSON</button>
                                </div>
                            </div>

                            <div class="flex items-center justify-between px-4 py-4 rounded-xl border border-gray-100">
                                <div>
                                    <p class="text-sm font-semibold text-gray-700">Importar dados</p>
                                    <p class="text-xs text-gray-400 mt-0.5">Importe um arquivo CSV ou JSON</p>
                                </div>
                                <button class="px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                                    Importar
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
