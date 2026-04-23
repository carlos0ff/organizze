<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Search, Plus, X, RefreshCw, CheckCircle2, AlertCircle,
    Trash2, Shield, Zap, Lock, Wifi, MoreVertical,
    ArrowUpRight, ChevronRight, Landmark,
} from 'lucide-vue-next';

// ==================== BANCO DATA ====================
const BANKS = [
    { id: 'nubank',    name: 'Nubank',          logo: 'https://assets.organizze.com.br/institutions/logos/nubank.png',            bg: 'bg-purple-600',  tag: 'Fintech' },
    { id: 'inter',     name: 'Banco Inter',      logo: 'https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/1221/2023/05/Logomarca_Banco_Inter-1.png', bg: 'bg-orange-500', tag: 'Fintech' },
    { id: 'itau',      name: 'Itaú',             logo: 'https://assets.organizze.com.br/institutions/logos/itau.png',              bg: 'bg-orange-600',  tag: 'Tradicional' },
    { id: 'bradesco',  name: 'Bradesco',         logo: 'https://assets.organizze.com.br/institutions/logos/bradesco.png',          bg: 'bg-red-600',     tag: 'Tradicional' },
    { id: 'bb',        name: 'Banco do Brasil',  logo: 'https://assets.organizze.com.br/institutions/logos/bb.png',               bg: 'bg-yellow-500',  tag: 'Tradicional' },
    { id: 'santander', name: 'Santander',        logo: 'https://assets.organizze.com.br/institutions/logos/santander.png',        bg: 'bg-red-700',     tag: 'Tradicional' },
    { id: 'caixa',     name: 'Caixa',            logo: 'https://assets.organizze.com.br/institutions/logos/caixa.png',            bg: 'bg-blue-700',    tag: 'Tradicional' },
    { id: 'c6',        name: 'C6 Bank',          logo: 'https://assets.organizze.com.br/institutions/logos/c6bank.png',           bg: 'bg-gray-800',    tag: 'Fintech' },
    { id: 'xp',        name: 'XP Investimentos', logo: 'https://assets.organizze.com.br/institutions/logos/xp.png',              bg: 'bg-gray-900',    tag: 'Investimentos' },
    { id: 'picpay',    name: 'PicPay',           logo: 'https://assets.organizze.com.br/institutions/logos/picpay.png',           bg: 'bg-green-500',   tag: 'Fintech' },
    { id: 'sicoob',    name: 'Sicoob',           logo: 'https://assets.organizze.com.br/institutions/logos/sicoob.png',          bg: 'bg-green-700',   tag: 'Cooperativa' },
    { id: 'original',  name: 'Banco Original',   logo: 'https://assets.organizze.com.br/institutions/logos/original.png',        bg: 'bg-green-800',   tag: 'Digital' },
];

// ==================== CONTAS CONECTADAS ====================
const connected = ref([
    {
        id: 1, bankId: 'nubank', name: 'Nubank', type: 'Conta Corrente',
        logo: 'https://assets.organizze.com.br/institutions/logos/nubank.png',
        bg: 'bg-purple-600', balance: 3842.50, status: 'synced', lastSync: 'há 2 min',
    },
    {
        id: 2, bankId: 'inter', name: 'Banco Inter', type: 'Conta Corrente',
        logo: 'https://cdn-sites-assets.mziq.com/wp-content/uploads/sites/1221/2023/05/Logomarca_Banco_Inter-1.png',
        bg: 'bg-orange-500', balance: 12202.30, status: 'synced', lastSync: 'há 5 min',
    },
    {
        id: 3, bankId: 'bradesco', name: 'Bradesco', type: 'Poupança',
        logo: 'https://assets.organizze.com.br/institutions/logos/bradesco.png',
        bg: 'bg-red-600', balance: 5100.00, status: 'error', lastSync: 'Falha',
    },
]);

// ==================== BUSCA + FILTRO ====================
const search     = ref('');
const activeTag  = ref('Todos');
const TAGS = ['Todos', 'Tradicional', 'Fintech', 'Digital', 'Investimentos', 'Cooperativa'];

const availableBanks = computed(() => {
    const ids = new Set(connected.value.map(c => c.bankId));
    return BANKS.filter(b => {
        const notConnected  = !ids.has(b.id);
        const matchSearch   = b.name.toLowerCase().includes(search.value.toLowerCase());
        const matchTag      = activeTag.value === 'Todos' || b.tag === activeTag.value;
        return notConnected && matchSearch && matchTag;
    });
});

const totalBalance = computed(() =>
    connected.value.filter(c => c.status !== 'error').reduce((s, c) => s + c.balance, 0)
);

// ==================== MODAL ====================
const step         = ref(1);
const showModal    = ref(false);
const selectedBank = ref(null);
const credentials  = ref({ agency: '', account: '', password: '' });
const modalSearch  = ref('');
const modalBanks   = computed(() =>
    BANKS.filter(b => b.name.toLowerCase().includes(modalSearch.value.toLowerCase()))
);

function openModal(bank = null) {
    selectedBank.value = bank;
    step.value = bank ? 2 : 1;
    credentials.value = { agency: '', account: '', password: '' };
    modalSearch.value = '';
    showModal.value = true;
}

function closeModal() { showModal.value = false; }

function selectBank(bank) {
    selectedBank.value = bank;
    step.value = 2;
}

async function connect() {
    step.value = 3;
    await new Promise(r => setTimeout(r, 2500));
    connected.value.unshift({
        id: Date.now(),
        bankId: selectedBank.value.id,
        name:   selectedBank.value.name,
        type:   'Conta Corrente',
        logo:   selectedBank.value.logo,
        bg:     selectedBank.value.bg,
        balance: 0, status: 'synced', lastSync: 'agora mesmo',
    });
    step.value = 4;
}

function finishConnect() { closeModal(); }

function disconnect(id) {
    if (!confirm('Desconectar esta conta?')) return;
    connected.value = connected.value.filter(c => c.id !== id);
}

function syncAccount(acc) {
    acc.status = 'syncing';
    setTimeout(() => { acc.status = 'synced'; acc.lastSync = 'agora mesmo'; }, 1800);
}

// ==================== HELPERS ====================
function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const STATUS = {
    synced:  { label: 'Sincronizado', icon: CheckCircle2, color: 'text-emerald-500' },
    error:   { label: 'Erro',         icon: AlertCircle,  color: 'text-red-500' },
    syncing: { label: 'Atualizando',  icon: RefreshCw,    color: 'text-blue-500' },
};
</script>

<template>
    <Navbar />

    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">

        <!-- ── HERO ─────────────────────────────────── -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-10 mb-8 text-white">
            <!-- decoração -->
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
                <div class="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl"></div>
            </div>

            <div class="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <!-- texto -->
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[10px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                            Open Finance • BACEN
                        </span>
                    </div>
                    <h1 class="text-2xl sm:text-3xl font-black leading-tight">Conexão Bancária</h1>
                    <p class="text-white/60 text-sm mt-2 max-w-lg">
                        Conecte suas contas e carteiras para sincronizar transações automaticamente, em tempo real.
                    </p>
                </div>

                <!-- stats + botão -->
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div class="flex gap-6">
                        <div class="text-center">
                            <p class="text-2xl font-black">{{ connected.length }}</p>
                            <p class="text-[10px] text-white/50 uppercase font-semibold">Contas</p>
                        </div>
                        <div class="w-px bg-white/10"></div>
                        <div class="text-center">
                            <p class="text-2xl font-black">{{ fmtMoney(totalBalance) }}</p>
                            <p class="text-[10px] text-white/50 uppercase font-semibold">Saldo total</p>
                        </div>
                    </div>
                    <button @click="openModal()"
                        class="flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/40 shrink-0">
                        <Plus class="w-4 h-4" /> Conectar conta
                    </button>
                </div>
            </div>

            <!-- selos de segurança -->
            <div class="relative mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6">
                <div class="flex items-center gap-2 text-xs text-white/50">
                    <Lock class="w-3.5 h-3.5 text-emerald-400" />
                    <span>Criptografia AES-256</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-white/50">
                    <Shield class="w-3.5 h-3.5 text-emerald-400" />
                    <span>Regulamentado pelo BACEN</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-white/50">
                    <Zap class="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sincronização a cada hora</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-white/50">
                    <Wifi class="w-3.5 h-3.5 text-emerald-400" />
                    <span>Dados em tempo real</span>
                </div>
            </div>
        </div>

        <!-- ── GRID PRINCIPAL ────────────────────────── -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

            <!-- ── COLUNA ESQUERDA: Contas conectadas ── -->
            <div class="lg:col-span-2">
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
                    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h2 class="text-sm font-bold text-gray-800">Minhas contas</h2>
                            <p class="text-[10px] text-gray-400 mt-0.5">{{ connected.length }} conta{{ connected.length !== 1 ? 's' : '' }} conectada{{ connected.length !== 1 ? 's' : '' }}</p>
                        </div>
                        <button @click="openModal()" class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors flex items-center justify-center" title="Adicionar conta">
                            <Plus class="w-4 h-4" />
                        </button>
                    </div>

                    <!-- Lista de contas -->
                    <div class="divide-y divide-gray-50">
                        <div
                            v-for="acc in connected" :key="acc.id"
                            class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors group"
                        >
                            <!-- Logo -->
                            <div :class="acc.bg" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <img :src="acc.logo" :alt="acc.name" class="w-8 h-8 object-contain rounded-lg" />
                            </div>

                            <!-- Info -->
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-semibold text-gray-800 truncate">{{ acc.name }}</p>
                                <p class="text-[10px] text-gray-400">{{ acc.type }}</p>
                            </div>

                            <!-- Saldo + status -->
                            <div class="text-right shrink-0">
                                <p class="text-sm font-bold" :class="acc.status === 'error' ? 'text-gray-400' : 'text-gray-800'">
                                    {{ acc.status === 'error' ? '—' : fmtMoney(acc.balance) }}
                                </p>
                                <div class="flex items-center justify-end gap-1 mt-0.5">
                                    <component :is="STATUS[acc.status].icon"
                                        :class="[STATUS[acc.status].color, acc.status === 'syncing' ? 'animate-spin' : '']"
                                        class="w-3 h-3" />
                                    <span class="text-[10px]" :class="STATUS[acc.status].color">{{ STATUS[acc.status].label }}</span>
                                </div>
                            </div>

                            <!-- Ações hover -->
                            <div class="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity ml-1">
                                <button @click="syncAccount(acc)" class="p-1.5 rounded-lg hover:bg-blue-50 text-gray-300 hover:text-blue-500 transition-colors" title="Sincronizar">
                                    <RefreshCw class="w-3.5 h-3.5" />
                                </button>
                                <button @click="disconnect(acc.id)" class="p-1.5 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors" title="Desconectar">
                                    <Trash2 class="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        <!-- Empty state -->
                        <div v-if="connected.length === 0" class="px-5 py-12 flex flex-col items-center gap-3 text-center">
                            <div class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                                <Landmark class="w-5 h-5 text-gray-300" />
                            </div>
                            <p class="text-sm text-gray-400">Nenhuma conta conectada</p>
                            <button @click="openModal()" class="text-xs font-semibold text-emerald-600 hover:underline">
                                Conectar meu primeiro banco
                            </button>
                        </div>
                    </div>

                    <!-- Rodapé do card -->
                    <div v-if="connected.length > 0" class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                        <p class="text-[10px] text-gray-400 font-semibold uppercase">Saldo consolidado</p>
                        <p class="text-sm font-black text-emerald-600">{{ fmtMoney(totalBalance) }}</p>
                    </div>
                </div>
            </div>

            <!-- ── COLUNA DIREITA: Bancos disponíveis ── -->
            <div class="lg:col-span-3 space-y-5">

                <!-- Busca + filtro por categoria -->
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h2 class="text-sm font-bold text-gray-800 mb-4">Adicionar instituição</h2>

                    <!-- Search -->
                    <div class="relative mb-4">
                        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input v-model="search" type="text" placeholder="Buscar banco ou instituição…"
                            class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all" />
                    </div>

                    <!-- Filtro de categoria -->
                    <div class="flex flex-wrap gap-1.5 mb-5">
                        <button v-for="tag in TAGS" :key="tag"
                            @click="activeTag = tag"
                            :class="activeTag === tag
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300 hover:text-emerald-600'"
                            class="px-3 py-1 text-[11px] font-semibold rounded-full border transition-all">
                            {{ tag }}
                        </button>
                    </div>

                    <!-- Grid de bancos -->
                    <div v-if="availableBanks.length > 0" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <button v-for="bank in availableBanks" :key="bank.id"
                            @click="openModal(bank)"
                            class="group flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-sm transition-all text-left">
                            <div :class="bank.bg" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                                <img :src="bank.logo" :alt="bank.name" class="w-8 h-8 object-contain rounded-lg" />
                            </div>
                            <div class="min-w-0">
                                <p class="text-xs font-bold text-gray-700 group-hover:text-emerald-700 transition-colors truncate">{{ bank.name }}</p>
                                <p class="text-[10px] text-gray-400">{{ bank.tag }}</p>
                            </div>
                            <ChevronRight class="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-400 ml-auto shrink-0 transition-colors" />
                        </button>
                    </div>

                    <div v-else class="py-10 text-center">
                        <Search class="w-8 h-8 text-gray-200 mx-auto mb-2" />
                        <p class="text-sm text-gray-400">Nenhum resultado para <b>"{{ search }}"</b></p>
                    </div>
                </div>

                <!-- Selos de segurança -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-3">
                        <div class="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                            <Lock class="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-700">Criptografia AES-256</p>
                            <p class="text-[11px] text-gray-400 mt-0.5 leading-snug">Sua senha bancária nunca é armazenada.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-3">
                        <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                            <Zap class="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-700">Sync automático</p>
                            <p class="text-[11px] text-gray-400 mt-0.5 leading-snug">Transações importadas a cada hora.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-3">
                        <div class="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                            <Shield class="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-700">Open Finance BACEN</p>
                            <p class="text-[11px] text-gray-400 mt-0.5 leading-snug">Regulamentado pelo Banco Central.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- ==================== MODAL ==================== -->
    <Teleport to="body">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" @click.self="closeModal">
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

                <!-- STEP 1: Selecionar banco -->
                <template v-if="step === 1">
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <div>
                            <h2 class="text-base font-bold text-gray-800">Escolha seu banco</h2>
                            <p class="text-[11px] text-gray-400 mt-0.5">{{ BANKS.length }} instituições disponíveis</p>
                        </div>
                        <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors">
                            <X class="w-4 h-4" />
                        </button>
                    </div>
                    <div class="px-5 py-4">
                        <div class="relative mb-4">
                            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input v-model="modalSearch" type="text" placeholder="Buscar…"
                                class="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all" />
                        </div>
                        <div class="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                            <button v-for="bank in modalBanks" :key="bank.id"
                                @click="selectBank(bank)"
                                class="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all text-left">
                                <div :class="bank.bg" class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                    <img :src="bank.logo" :alt="bank.name" class="w-7 h-7 object-contain rounded-lg" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-semibold text-gray-700 group-hover:text-emerald-700 truncate">{{ bank.name }}</p>
                                    <p class="text-[10px] text-gray-400">{{ bank.tag }}</p>
                                </div>
                                <ChevronRight class="w-4 h-4 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                            </button>
                        </div>
                    </div>
                </template>

                <!-- STEP 2: Credenciais -->
                <template v-if="step === 2">
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <div class="flex items-center gap-3">
                            <div :class="selectedBank.bg" class="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                                <img :src="selectedBank.logo" :alt="selectedBank.name" class="w-8 h-8 object-contain rounded-lg" />
                            </div>
                            <div>
                                <h2 class="text-sm font-bold text-gray-800">{{ selectedBank.name }}</h2>
                                <p class="text-[10px] text-gray-400">Conectar via Open Finance</p>
                            </div>
                        </div>
                        <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors">
                            <X class="w-4 h-4" />
                        </button>
                    </div>

                    <div class="px-6 py-5 space-y-4">
                        <div class="flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700">
                            <Lock class="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <p>Sua senha é criptografada em trânsito e <b>nunca armazenada</b> em nossos servidores.</p>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Agência</label>
                            <input v-model="credentials.agency" type="text" placeholder="0000"
                                class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Conta</label>
                            <input v-model="credentials.account" type="text" placeholder="00000-0"
                                class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5">Senha eletrônica</label>
                            <input v-model="credentials.password" type="password" placeholder="••••••••"
                                class="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all" />
                        </div>
                    </div>

                    <div class="flex gap-2 px-6 py-4 border-t border-gray-100">
                        <button @click="step = 1" class="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-xl transition-colors">
                            Voltar
                        </button>
                        <button @click="connect" class="flex-1 py-2.5 text-sm font-bold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200">
                            Conectar conta
                        </button>
                    </div>
                </template>

                <!-- STEP 3: Conectando -->
                <template v-if="step === 3">
                    <div class="px-6 py-14 flex flex-col items-center gap-5 text-center">
                        <div class="relative">
                            <div :class="selectedBank.bg" class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                <img :src="selectedBank.logo" class="w-12 h-12 object-contain rounded-xl" />
                            </div>
                            <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow">
                                <RefreshCw class="w-3 h-3 text-emerald-500 animate-spin" />
                            </div>
                        </div>
                        <div>
                            <p class="text-base font-bold text-gray-800">Conectando ao {{ selectedBank.name }}</p>
                            <p class="text-sm text-gray-400 mt-1">Autenticando com segurança…</p>
                        </div>
                        <div class="flex gap-1.5">
                            <div v-for="i in 3" :key="i"
                                class="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"
                                :style="`animation-delay:${(i-1)*0.18}s`" />
                        </div>
                        <div class="w-full max-w-xs bg-gray-100 rounded-full h-1 overflow-hidden">
                            <div class="h-full w-3/4 bg-emerald-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                </template>

                <!-- STEP 4: Sucesso -->
                <template v-if="step === 4">
                    <div class="px-6 py-14 flex flex-col items-center gap-4 text-center">
                        <div class="relative">
                            <div :class="selectedBank.bg" class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                                <img :src="selectedBank.logo" class="w-12 h-12 object-contain rounded-xl" />
                            </div>
                            <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow">
                                <CheckCircle2 class="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div>
                            <p class="text-lg font-black text-gray-800">Conta conectada!</p>
                            <p class="text-sm text-gray-400 mt-1">
                                <b class="text-gray-600">{{ selectedBank.name }}</b> está sincronizando suas transações.
                            </p>
                        </div>
                        <button @click="finishConnect"
                            class="mt-2 px-8 py-2.5 text-sm font-bold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200">
                            Concluir
                        </button>
                    </div>
                </template>

            </div>
        </div>
    </Teleport>
</template>
