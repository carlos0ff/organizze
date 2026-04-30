<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Componentes/Layout/Navbar.vue';
import {
    Search, Plus, X, RefreshCw, CheckCircle2, AlertCircle,
    Trash2, Shield, Zap, Lock, Wifi, ChevronRight,
    Landmark, ArrowLeft, Eye, EyeOff, AlertTriangle,
} from 'lucide-vue-next';

const BANKS = [
    { id: 'nubank',    name: 'Nubank',          logo: 'https://assets.organizze.com.br/institutions/logos/nubank.png',            bg: '#7C3AED', tag: 'Fintech' },
    { id: 'inter',     name: 'Banco Inter',      logo: 'https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/1221/2023/05/Logomarca_Banco_Inter-1.png', bg: '#F97316', tag: 'Fintech' },
    { id: 'itau',      name: 'Itaú',             logo: 'https://assets.organizze.com.br/institutions/logos/itau.png',              bg: '#EA580C', tag: 'Tradicional' },
    { id: 'bradesco',  name: 'Bradesco',         logo: 'https://assets.organizze.com.br/institutions/logos/bradesco.png',          bg: '#DC2626', tag: 'Tradicional' },
    { id: 'bb',        name: 'Banco do Brasil',  logo: 'https://assets.organizze.com.br/institutions/logos/bb.png',               bg: '#CA8A04', tag: 'Tradicional' },
    { id: 'santander', name: 'Santander',        logo: 'https://assets.organizze.com.br/institutions/logos/santander.png',        bg: '#B91C1C', tag: 'Tradicional' },
    { id: 'caixa',     name: 'Caixa',            logo: 'https://assets.organizze.com.br/institutions/logos/caixa.png',            bg: '#1D4ED8', tag: 'Tradicional' },
    { id: 'c6',        name: 'C6 Bank',          logo: 'https://assets.organizze.com.br/institutions/logos/c6bank.png',           bg: '#1F2937', tag: 'Fintech' },
    { id: 'xp',        name: 'XP Investimentos', logo: 'https://assets.organizze.com.br/institutions/logos/xp.png',               bg: '#111827', tag: 'Investimentos' },
    { id: 'picpay',    name: 'PicPay',           logo: 'https://assets.organizze.com.br/institutions/logos/picpay.png',           bg: '#16A34A', tag: 'Fintech' },
    { id: 'sicoob',    name: 'Sicoob',           logo: 'https://assets.organizze.com.br/institutions/logos/sicoob.png',           bg: '#15803D', tag: 'Cooperativa' },
    { id: 'original',  name: 'Banco Original',   logo: 'https://assets.organizze.com.br/institutions/logos/original.png',        bg: '#166534', tag: 'Digital' },
];

const TAGS = ['Todos', 'Tradicional', 'Fintech', 'Digital', 'Investimentos', 'Cooperativa'];

const connected = ref([
    { id: 1, bankId: 'nubank',   name: 'Nubank',      type: 'Conta Corrente', logo: 'https://assets.organizze.com.br/institutions/logos/nubank.png',  bg: '#7C3AED', balance: 3842.50,  status: 'synced', lastSync: 'há 2 min' },
    { id: 2, bankId: 'inter',    name: 'Banco Inter', type: 'Conta Corrente', logo: 'https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/1221/2023/05/Logomarca_Banco_Inter-1.png', bg: '#F97316', balance: 12202.30, status: 'synced', lastSync: 'há 5 min' },
    { id: 3, bankId: 'bradesco', name: 'Bradesco',    type: 'Poupança',       logo: 'https://assets.organizze.com.br/institutions/logos/bradesco.png', bg: '#DC2626', balance: 5100.00,  status: 'error',  lastSync: 'Falha' },
]);

const search    = ref('');
const activeTag = ref('Todos');

const availableBanks = computed(() => {
    const ids = new Set(connected.value.map(c => c.bankId));
    return BANKS.filter(b => {
        const notConnected = !ids.has(b.id);
        const matchSearch  = b.name.toLowerCase().includes(search.value.toLowerCase());
        const matchTag     = activeTag.value === 'Todos' || b.tag === activeTag.value;
        return notConnected && matchSearch && matchTag;
    });
});

const totalBalance = computed(() =>
    connected.value.filter(c => c.status !== 'error').reduce((s, c) => s + c.balance, 0)
);

// ── Modal ──────────────────────────────────────────────────────
const step         = ref(1);
const showModal    = ref(false);
const selectedBank = ref(null);
const credentials  = ref({ agency: '', account: '', password: '' });
const modalSearch  = ref('');
const showPassword = ref(false);

const modalBanks = computed(() =>
    BANKS.filter(b => b.name.toLowerCase().includes(modalSearch.value.toLowerCase()))
);

function openModal(bank = null) {
    selectedBank.value = bank;
    step.value         = bank ? 2 : 1;
    credentials.value  = { agency: '', account: '', password: '' };
    modalSearch.value  = '';
    showPassword.value = false;
    showModal.value    = true;
}

function closeModal() { showModal.value = false; }
function selectBank(bank) { selectedBank.value = bank; step.value = 2; }

async function connect() {
    step.value = 3;
    await new Promise(r => setTimeout(r, 2500));
    connected.value.unshift({
        id: Date.now(), bankId: selectedBank.value.id,
        name: selectedBank.value.name, type: 'Conta Corrente',
        logo: selectedBank.value.logo, bg: selectedBank.value.bg,
        balance: 0, status: 'synced', lastSync: 'agora mesmo',
    });
    step.value = 4;
}

function finishConnect() { closeModal(); }

function disconnect(id) {
    if (!confirm('Deseja desconectar esta conta?')) return;
    connected.value = connected.value.filter(c => c.id !== id);
}

function syncAccount(acc) {
    acc.status = 'syncing';
    setTimeout(() => { acc.status = 'synced'; acc.lastSync = 'agora mesmo'; }, 1800);
}

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#F8F9FB]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-8">

            <!-- ── HEADER ─────────────────────────────────────── -->
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <p class="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-1">Open Finance · BACEN</p>
                    <h1 class="text-2xl font-black text-gray-900">Conexão Bancária</h1>
                    <p class="text-sm text-gray-400 mt-1">Sincronize suas contas e acompanhe tudo em um só lugar.</p>
                </div>
                <button @click="openModal()"
                    class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold rounded-xl transition-colors shrink-0">
                    <Plus class="w-4 h-4" />
                    Conectar banco
                </button>
            </div>

            <!-- ── CONTAS CONECTADAS ───────────────────────────── -->
            <section>
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-sm font-bold text-gray-700">
                        Contas conectadas
                        <span class="ml-1.5 text-[11px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                            {{ connected.length }}
                        </span>
                    </h2>
                    <p class="text-xs text-gray-400">
                        Saldo total:
                        <span class="font-bold text-gray-700 ml-1">{{ fmtMoney(totalBalance) }}</span>
                    </p>
                </div>

                <!-- Lista de contas -->
                <div v-if="connected.length > 0" class="space-y-3">
                    <div v-for="acc in connected" :key="acc.id"
                        class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 overflow-hidden">
                        <div class="flex items-center gap-4 px-5 py-4">

                            <!-- Logo com cor do banco -->
                            <div class="relative shrink-0">
                                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                                    :style="{ backgroundColor: acc.bg }">
                                    <img :src="acc.logo" :alt="acc.name" class="w-9 h-9 object-contain rounded-xl" />
                                </div>
                                <!-- Indicador de status -->
                                <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"
                                    :class="{
                                        'bg-emerald-400': acc.status === 'synced',
                                        'bg-red-400':     acc.status === 'error',
                                        'bg-blue-400':    acc.status === 'syncing',
                                    }">
                                    <RefreshCw v-if="acc.status === 'syncing'" class="w-2 h-2 text-white animate-spin" />
                                </span>
                            </div>

                            <!-- Info -->
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2">
                                    <p class="text-sm font-bold text-gray-800">{{ acc.name }}</p>
                                    <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                                        :class="{
                                            'bg-emerald-50 text-emerald-600': acc.status === 'synced',
                                            'bg-red-50 text-red-500':         acc.status === 'error',
                                            'bg-blue-50 text-blue-500':       acc.status === 'syncing',
                                        }">
                                        {{ acc.status === 'synced' ? 'Sincronizado' : acc.status === 'error' ? 'Erro' : 'Atualizando…' }}
                                    </span>
                                </div>
                                <p class="text-xs text-gray-400 mt-0.5">{{ acc.type }} · {{ acc.lastSync }}</p>
                            </div>

                            <!-- Saldo -->
                            <div class="text-right shrink-0">
                                <p class="text-base font-black"
                                    :class="acc.status === 'error' ? 'text-gray-300' : 'text-gray-800'">
                                    {{ acc.status === 'error' ? '—' : fmtMoney(acc.balance) }}
                                </p>
                                <p v-if="acc.status === 'error'" class="text-[11px] text-red-400 mt-0.5">Reconectar</p>
                            </div>

                            <!-- Ações -->
                            <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                                <button @click="syncAccount(acc)"
                                    class="p-2 rounded-xl hover:bg-blue-50 text-gray-300 hover:text-blue-500 transition-colors"
                                    title="Sincronizar agora">
                                    <RefreshCw class="w-4 h-4" />
                                </button>
                                <button @click="disconnect(acc.id)"
                                    class="p-2 rounded-xl hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors"
                                    title="Desconectar">
                                    <Trash2 class="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <!-- Barra de erro -->
                        <div v-if="acc.status === 'error'"
                            class="flex items-center gap-2 px-5 py-2.5 bg-red-50 border-t border-red-100 text-xs text-red-600">
                            <AlertTriangle class="w-3.5 h-3.5 shrink-0" />
                            <span>Falha ao sincronizar. Verifique suas credenciais ou</span>
                            <button @click="openModal(BANKS.find(b => b.id === acc.bankId))"
                                class="font-bold underline underline-offset-2 hover:text-red-700">
                                reconecte agora
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Empty state -->
                <div v-else
                    class="bg-white rounded-2xl border border-dashed border-gray-200 py-16 flex flex-col items-center gap-3 text-center">
                    <div class="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-1">
                        <Landmark class="w-6 h-6 text-gray-300" />
                    </div>
                    <p class="text-sm font-bold text-gray-600">Nenhuma conta conectada</p>
                    <p class="text-xs text-gray-400 max-w-xs">Conecte seu banco para sincronizar transações automaticamente.</p>
                    <button @click="openModal()"
                        class="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-gray-700 transition-colors">
                        <Plus class="w-3.5 h-3.5" /> Conectar banco
                    </button>
                </div>
            </section>

            <!-- ── ADICIONAR BANCO ────────────────────────────── -->
            <section>
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-sm font-bold text-gray-700">Adicionar instituição</h2>
                    <span class="text-xs text-gray-400">{{ availableBanks.length }} disponíveis</span>
                </div>

                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <!-- Busca -->
                    <div class="relative mb-4">
                        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input v-model="search" type="text" placeholder="Buscar banco ou instituição…"
                            class="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all" />
                        <button v-if="search" @click="search = ''"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors">
                            <X class="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <!-- Filtros -->
                    <div class="flex gap-2 flex-wrap mb-5">
                        <button v-for="tag in TAGS" :key="tag"
                            @click="activeTag = tag"
                            :class="activeTag === tag
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'"
                            class="px-3 py-1 text-[11px] font-semibold rounded-lg transition-all">
                            {{ tag }}
                        </button>
                    </div>

                    <!-- Grid -->
                    <div v-if="availableBanks.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        <button v-for="bank in availableBanks" :key="bank.id"
                            @click="openModal(bank)"
                            class="group flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all text-left">
                            <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-150"
                                :style="{ backgroundColor: bank.bg }">
                                <img :src="bank.logo" :alt="bank.name" class="w-7 h-7 object-contain rounded-lg" />
                            </div>
                            <div class="min-w-0">
                                <p class="text-xs font-bold text-gray-700 truncate">{{ bank.name }}</p>
                                <p class="text-[10px] text-gray-400">{{ bank.tag }}</p>
                            </div>
                        </button>
                    </div>

                    <!-- Sem resultados -->
                    <div v-else class="py-10 text-center">
                        <p class="text-sm text-gray-400">
                            Nenhum resultado para <b class="text-gray-600">"{{ search }}"</b>
                        </p>
                        <button @click="search = ''; activeTag = 'Todos'"
                            class="mt-2 text-xs text-emerald-600 hover:underline font-semibold">
                            Limpar filtros
                        </button>
                    </div>
                </div>
            </section>

            <!-- ── SELOS DE SEGURANÇA ─────────────────────────── -->
            <section class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3.5">
                    <div class="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                        <Lock class="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-700">AES-256</p>
                        <p class="text-[11px] text-gray-400">Senha jamais armazenada.</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3.5">
                    <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <Zap class="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-700">Sync automático</p>
                        <p class="text-[11px] text-gray-400">Atualizado a cada hora.</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3.5">
                    <div class="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                        <Shield class="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-700">Open Finance BACEN</p>
                        <p class="text-[11px] text-gray-400">Regulamentado pelo BC.</p>
                    </div>
                </div>
            </section>

        </div>
    </div>

    <!-- ── MODAL ──────────────────────────────────────────────── -->
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="showModal"
                class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4"
                @click.self="closeModal">

                <Transition name="slide-up">
                    <div v-if="showModal"
                        class="bg-white w-full sm:max-w-[420px] rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        style="max-height: 90dvh">

                        <!-- STEP 1 ─ Escolher banco -->
                        <template v-if="step === 1">
                            <div class="flex items-center justify-between px-5 pt-6 pb-4">
                                <div>
                                    <h2 class="text-base font-black text-gray-800">Escolha o banco</h2>
                                    <p class="text-xs text-gray-400 mt-0.5">{{ BANKS.length }} instituições disponíveis</p>
                                </div>
                                <button @click="closeModal"
                                    class="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
                                    <X class="w-4 h-4" />
                                </button>
                            </div>

                            <div class="px-5 pb-3">
                                <div class="relative">
                                    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    <input v-model="modalSearch" type="text" placeholder="Buscar…" autofocus
                                        class="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all" />
                                </div>
                            </div>

                            <div class="overflow-y-auto flex-1 px-3 pb-4">
                                <div class="space-y-0.5">
                                    <button v-for="bank in modalBanks" :key="bank.id"
                                        @click="selectBank(bank)"
                                        class="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left">
                                        <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                                            :style="{ backgroundColor: bank.bg }">
                                            <img :src="bank.logo" :alt="bank.name" class="w-7 h-7 object-contain rounded-lg" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-gray-700">{{ bank.name }}</p>
                                            <p class="text-[10px] text-gray-400">{{ bank.tag }}</p>
                                        </div>
                                        <ChevronRight class="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                                    </button>
                                    <div v-if="modalBanks.length === 0" class="py-8 text-center text-sm text-gray-400">
                                        Nenhum banco encontrado.
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- STEP 2 ─ Credenciais -->
                        <template v-if="step === 2">
                            <div class="flex items-center gap-3 px-5 pt-6 pb-4">
                                <button @click="step = 1"
                                    class="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors shrink-0">
                                    <ArrowLeft class="w-4 h-4" />
                                </button>
                                <div class="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm shrink-0"
                                    :style="{ backgroundColor: selectedBank.bg }">
                                    <img :src="selectedBank.logo" class="w-7 h-7 object-contain rounded-lg" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h2 class="text-sm font-black text-gray-800">{{ selectedBank.name }}</h2>
                                    <p class="text-[10px] text-gray-400">Conectar via Open Finance</p>
                                </div>
                                <button @click="closeModal"
                                    class="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors shrink-0">
                                    <X class="w-4 h-4" />
                                </button>
                            </div>

                            <div class="px-5 pb-5 space-y-4 overflow-y-auto flex-1">
                                <div class="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-3 text-xs text-amber-700">
                                    <Lock class="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                    <p>Seus dados são criptografados. A senha bancária <b>nunca é armazenada</b>.</p>
                                </div>

                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-xs font-bold text-gray-500 mb-1.5">Agência</label>
                                        <input v-model="credentials.agency" type="text" placeholder="0000"
                                            class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all" />
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold text-gray-500 mb-1.5">Conta</label>
                                        <input v-model="credentials.account" type="text" placeholder="00000-0"
                                            class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all" />
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold text-gray-500 mb-1.5">Senha eletrônica</label>
                                        <div class="relative">
                                            <input v-model="credentials.password"
                                                :type="showPassword ? 'text' : 'password'"
                                                placeholder="••••••"
                                                class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 pr-10 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all" />
                                            <button type="button" @click="showPassword = !showPassword"
                                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                                <component :is="showPassword ? EyeOff : Eye" class="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-5 py-4 border-t border-gray-100 flex gap-2">
                                <button @click="step = 1"
                                    class="px-4 py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                    Voltar
                                </button>
                                <button @click="connect"
                                    class="flex-1 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors">
                                    Conectar conta
                                </button>
                            </div>
                        </template>

                        <!-- STEP 3 ─ Conectando -->
                        <template v-if="step === 3">
                            <div class="px-6 py-16 flex flex-col items-center gap-6 text-center">
                                <div class="relative">
                                    <div class="w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg"
                                        :style="{ backgroundColor: selectedBank.bg, width: '72px', height: '72px' }">
                                        <img :src="selectedBank.logo" class="object-contain rounded-xl" style="width:52px;height:52px" />
                                    </div>
                                    <span class="absolute inset-0 rounded-2xl border-2 border-emerald-400/40 animate-ping" />
                                </div>
                                <div>
                                    <p class="text-base font-black text-gray-800">Conectando ao {{ selectedBank.name }}…</p>
                                    <p class="text-sm text-gray-400 mt-1">Autenticando com segurança</p>
                                </div>
                                <div class="flex gap-1.5">
                                    <div v-for="i in 3" :key="i"
                                        class="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                                        :style="`animation-delay:${(i-1)*0.15}s`" />
                                </div>
                            </div>
                        </template>

                        <!-- STEP 4 ─ Sucesso -->
                        <template v-if="step === 4">
                            <div class="px-6 py-16 flex flex-col items-center gap-5 text-center">
                                <div class="relative">
                                    <div class="w-18 h-18 rounded-2xl flex items-center justify-center shadow-lg"
                                        :style="{ backgroundColor: selectedBank.bg, width: '72px', height: '72px' }">
                                        <img :src="selectedBank.logo" class="object-contain rounded-xl" style="width:52px;height:52px" />
                                    </div>
                                    <div class="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-white shadow">
                                        <CheckCircle2 class="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <p class="text-xl font-black text-gray-800">Tudo pronto!</p>
                                    <p class="text-sm text-gray-400 mt-1 max-w-[220px] mx-auto">
                                        <b class="text-gray-600">{{ selectedBank.name }}</b> está sincronizando suas transações.
                                    </p>
                                </div>
                                <button @click="finishConnect"
                                    class="px-8 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors">
                                    Concluir
                                </button>
                            </div>
                        </template>

                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.slide-up-enter-active { transition: transform .25s cubic-bezier(.32,1.2,.6,1), opacity .2s ease; }
.slide-up-leave-active { transition: transform .2s ease, opacity .15s ease; }
.slide-up-enter-from   { transform: translateY(24px); opacity: 0; }
.slide-up-leave-to     { transform: translateY(12px); opacity: 0; }

@media (max-width: 640px) {
    .slide-up-enter-from { transform: translateY(100%); }
    .slide-up-leave-to   { transform: translateY(100%); }
}
</style>
