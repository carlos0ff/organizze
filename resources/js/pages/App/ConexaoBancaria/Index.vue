<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Plus, RefreshCw, Trash2, AlertCircle, CheckCircle2,
    Clock, Shield, Lock, WifiOff, X, Search,
    Zap, Eye, RotateCcw, TrendingUp, Activity,
    CreditCard, ArrowRight, Wifi, ChevronRight, Building2,
} from 'lucide-vue-next';

const connections = ref([
    {
        id: 1, bank: 'Nubank', type: 'Conta Corrente', number: '•••• 1122',
        logo: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3-1.png',
        from: '#7C3AED', to: '#4C1D95',
        status: 'connected', lastSync: 'há 5 minutos', balance: 3840.20, txCount: 12,
    },
    {
        id: 2, bank: 'Itaú', type: 'Cartão de Crédito', number: '•••• 4321',
        logo: 'https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png',
        from: '#F97316', to: '#C2410C',
        status: 'connected', lastSync: 'há 2 horas', balance: -1240.00, txCount: 8,
    },
    {
        id: 3, bank: 'Santander', type: 'Conta Corrente', number: '•••• 9876',
        logo: 'https://img.logo.dev/santander.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png',
        from: '#EF4444', to: '#991B1B',
        status: 'error', lastSync: 'há 3 dias', balance: null, txCount: 0,
    },
]);

const bankCat = ref('todos');
const bankSearch = ref('');
const removeTarget = ref(null);
const syncingId = ref(null);
const allSyncing = ref(false);

const allBanks = [
    { id: 'bb',          name: 'Banco do Brasil',  cat: 'tradicionais', logo: 'https://img.logo.dev/bb.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'          },
    { id: 'caixa',       name: 'Caixa Econômica',  cat: 'tradicionais', logo: 'https://img.logo.dev/caixa.gov.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'        },
    { id: 'bradesco',    name: 'Bradesco',          cat: 'tradicionais', logo: 'https://img.logo.dev/bradesco.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'     },
    { id: 'itau',        name: 'Itaú',              cat: 'tradicionais', logo: 'https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'         },
    { id: 'santander',   name: 'Santander',         cat: 'tradicionais', logo: 'https://img.logo.dev/santander.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'   },
    { id: 'sicoob',      name: 'Sicoob',            cat: 'tradicionais', logo: 'https://img.logo.dev/sicoob.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'       },
    { id: 'nubank',      name: 'Nubank',            cat: 'digitais',     logo: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3-1.png'                                                  },
    { id: 'inter',       name: 'Inter',             cat: 'digitais',     logo: 'https://img.logo.dev/bancointer.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'  },
    { id: 'c6',          name: 'C6 Bank',           cat: 'digitais',     logo: 'https://img.logo.dev/c6bank.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'       },
    { id: 'original',    name: 'Banco Original',    cat: 'digitais',     logo: 'https://img.logo.dev/original.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'    },
    { id: 'xp',          name: 'XP Investimentos',  cat: 'fintechs',     logo: 'https://img.logo.dev/xp.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'          },
    { id: 'picpay',      name: 'PicPay',            cat: 'fintechs',     logo: 'https://img.logo.dev/picpay.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'         },
    { id: 'stone',       name: 'Stone',             cat: 'fintechs',     logo: 'https://img.logo.dev/stone.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'       },
    { id: 'mercadopago', name: 'Mercado Pago',      cat: 'fintechs',     logo: 'https://img.logo.dev/mercadopago.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png' },
];

const connectedBankIds = computed(() => {
    const map = { Nubank: 'nubank', 'Itaú': 'itau', Santander: 'santander' };
    return new Set(connections.value.map(c => map[c.bank]).filter(Boolean));
});

const filteredBanks = computed(() =>
    allBanks.filter(b => {
        const catOk = bankCat.value === 'todos' || b.cat === bankCat.value;
        const searchOk = b.name.toLowerCase().includes(bankSearch.value.toLowerCase());
        return catOk && searchOk;
    })
);

const okCount  = computed(() => connections.value.filter(c => c.status === 'connected').length);
const errCount = computed(() => connections.value.filter(c => c.status === 'error').length);
const totalTx  = computed(() => connections.value.reduce((s, c) => s + c.txCount, 0));

function confirmRemove(c) { removeTarget.value = c; }
function cancelRemove()   { removeTarget.value = null; }
function doRemove() {
    connections.value = connections.value.filter(c => c.id !== removeTarget.value.id);
    removeTarget.value = null;
}
function syncNow(conn) {
    syncingId.value = conn.id;
    setTimeout(() => { conn.lastSync = 'agora mesmo'; conn.status = 'connected'; syncingId.value = null; }, 2000);
}
function syncAll() {
    allSyncing.value = true;
    setTimeout(() => {
        connections.value.forEach(c => { c.lastSync = 'agora mesmo'; c.status = 'connected'; });
        allSyncing.value = false;
    }, 2200);
}
function fmtBRL(v) { return Math.abs(v).toLocaleString('pt-BR', { minimumFractionDigits: 2 }); }
</script>

<template>
    <Navbar />

    <!-- ── Modal ──────────────────────────────────────────────────────────── -->
    <Transition name="modal">
        <div v-if="removeTarget"
            class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            @click.self="cancelRemove">
            <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden ring-1 ring-black/5">
                <div class="h-0.5 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400"></div>
                <div class="p-8 text-center">
                    <div class="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5 ring-8 ring-red-50">
                        <Trash2 class="w-6 h-6 text-red-500" />
                    </div>
                    <p class="text-base font-extrabold text-gray-900 mb-1">Remover conexão?</p>
                    <p class="text-sm text-gray-400 leading-relaxed mb-7">
                        <span class="font-semibold text-gray-600">{{ removeTarget.bank }}</span> será desconectado.
                        Seus lançamentos importados não serão excluídos.
                    </p>
                    <div class="flex gap-3">
                        <button @click="cancelRemove"
                            class="flex-1 py-3 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                            Cancelar
                        </button>
                        <button @click="doRemove"
                            class="flex-1 py-3 bg-red-500 text-white rounded-2xl text-sm font-semibold hover:bg-red-600 transition-colors">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>

    <div class="min-h-screen bg-[#F4F5F7] pt-16">

        <!-- ── HERO ───────────────────────────────────────────────────────── -->
        <div class="relative bg-[#080808] overflow-hidden">
            <!-- Dot grid -->
            <div class="absolute inset-0 opacity-[0.55]" style="background-image:radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 28px 28px;"></div>
            <!-- Glows -->
            <div class="absolute -top-24 right-[5%] w-[500px] h-[500px] bg-emerald-500 rounded-full opacity-[0.10] blur-[130px] pointer-events-none"></div>
            <div class="absolute top-[20%] -left-20 w-[380px] h-[380px] bg-violet-600 rounded-full opacity-[0.08] blur-[110px] pointer-events-none"></div>
            <div class="absolute bottom-[-20px] right-[35%] w-[260px] h-[260px] bg-teal-400 rounded-full opacity-[0.07] blur-[90px] pointer-events-none"></div>
            <!-- Bottom transition -->
            <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F4F5F7] to-transparent pointer-events-none z-10"></div>

            <div class="relative z-0 max-w-4xl mx-auto px-4 pt-14 pb-2">
                <div class="flex flex-col lg:flex-row lg:items-center gap-14">

                    <!-- ── Texto ── -->
                    <div class="flex-1">
                        <!-- Badge -->
                        <div class="inline-flex items-center gap-2.5 mb-7 bg-white/[0.06] border border-white/[0.12] text-emerald-400 text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            Open Finance · Banco Central
                        </div>

                        <!-- Título -->
                        <h1 class="mb-5 tracking-tight">
                            <span class="block text-[52px] font-black text-white leading-[1.0]">Conexão</span>
                            <span class="block text-[52px] font-black leading-[1.0] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Bancária</span>
                        </h1>

                        <p class="text-[15px] text-gray-400 leading-relaxed mb-9 max-w-[340px]">
                            Importe transações de qualquer banco automaticamente, via Open Finance. Sem digitar senha, sem trabalho manual.
                        </p>

                        <!-- CTAs -->
                        <div class="flex items-center gap-3 mb-10">
                            <button class="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_24px_rgba(52,211,153,0.30)] hover:shadow-[0_0_32px_rgba(52,211,153,0.45)] hover:-translate-y-px">
                                <Plus class="w-4 h-4" /> Adicionar banco
                            </button>
                            <button @click="syncAll"
                                class="flex items-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.12] text-white/70 hover:text-white text-sm font-semibold rounded-xl transition-all">
                                <RefreshCw class="w-4 h-4" :class="allSyncing ? 'animate-spin text-emerald-400' : ''" />
                                Sincronizar tudo
                            </button>
                        </div>

                        <!-- Trust row -->
                        <div class="flex items-center gap-3">
                            <div class="flex -space-x-2">
                                <div v-for="(src, i) in [
                                    'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3-1.png',
                                    'https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png',
                                    'https://img.logo.dev/bradesco.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png',
                                    'https://img.logo.dev/bb.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png',
                                ]" :key="i"
                                    class="w-7 h-7 rounded-full bg-white/10 border-[2.5px] border-[#080808] flex items-center justify-center overflow-hidden">
                                    <img :src="src" class="w-4 h-4 object-contain brightness-0 invert opacity-60" />
                                </div>
                                <div class="w-7 h-7 rounded-full bg-white/10 border-[2.5px] border-[#080808] flex items-center justify-center">
                                    <span class="text-[9px] font-black text-gray-400">+10</span>
                                </div>
                            </div>
                            <div class="h-3.5 w-px bg-white/10"></div>
                            <p class="text-xs text-gray-500">14 bancos compatíveis</p>
                        </div>
                    </div>

                    <!-- ── Stack de cartões ── -->
                    <div class="shrink-0 hidden lg:block">
                        <div class="relative w-[300px] h-[260px]">

                            <!-- Card 3 — Santander (fundo) -->
                            <div class="absolute w-[268px] h-[168px] rounded-2xl overflow-hidden shadow-xl"
                                style="top:24px; left:16px; transform:rotate(9deg); opacity:0.40;">
                                <div class="w-full h-full bg-gradient-to-br from-[#EF4444] to-[#7F1D1D] p-5 flex items-start">
                                    <img src="https://img.logo.dev/santander.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png"
                                        class="h-5 brightness-0 invert opacity-70" alt="" />
                                </div>
                            </div>

                            <!-- Card 2 — Itaú (meio) -->
                            <div class="absolute w-[268px] h-[168px] rounded-2xl overflow-hidden shadow-2xl"
                                style="top:12px; left:8px; transform:rotate(4.5deg); opacity:0.68;">
                                <div class="w-full h-full bg-gradient-to-br from-[#F97316] to-[#7C2D12] p-5">
                                    <div class="flex justify-between items-start">
                                        <img src="https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png"
                                            class="h-5 brightness-0 invert opacity-80" alt="" />
                                    </div>
                                    <p class="mt-auto pt-[72px] text-white/40 font-mono text-[11px] tracking-[0.18em]">•••• •••• •••• 4321</p>
                                </div>
                            </div>

                            <!-- Card 1 — Nubank (frente) -->
                            <div class="absolute top-0 left-0 w-[268px] h-[168px] rounded-2xl overflow-hidden card-float"
                                style="box-shadow: 0 24px 64px rgba(124,58,237,0.55), 0 4px 16px rgba(0,0,0,0.4);">
                                <div class="w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#3B0764] p-5 relative flex flex-col">
                                    <!-- Círculos ornamentais -->
                                    <div class="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-white/[0.08]"></div>
                                    <div class="absolute -right-3 top-2 w-20 h-20 rounded-full border border-white/[0.06]"></div>
                                    <div class="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-black/15"></div>
                                    <!-- Header -->
                                    <div class="relative flex items-center justify-between mb-auto">
                                        <img src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3-1.png"
                                            class="h-6 brightness-0 invert" alt="Nubank" />
                                        <div class="flex items-center gap-1.5 bg-emerald-400/[0.18] border border-emerald-400/30 px-2 py-0.5 rounded-full">
                                            <span class="relative flex h-1.5 w-1.5">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                                            </span>
                                            <span class="text-[10px] font-bold text-emerald-300">Online</span>
                                        </div>
                                    </div>
                                    <!-- Chip SVG -->
                                    <div class="relative mt-auto">
                                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" class="mb-2 opacity-50">
                                            <rect width="26" height="20" rx="3" fill="#C9A84C"/>
                                            <rect x="8.5" width="1.5" height="20" fill="#A8872E"/>
                                            <rect x="16" width="1.5" height="20" fill="#A8872E"/>
                                            <rect y="6.5" width="26" height="1.5" fill="#A8872E"/>
                                            <rect y="12" width="26" height="1.5" fill="#A8872E"/>
                                        </svg>
                                        <p class="text-white/40 font-mono text-[11px] tracking-[0.18em] mb-1">•••• •••• •••• 1122</p>
                                        <p class="text-[22px] font-extrabold text-white leading-none">R$ 3.840,20</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Chip: Sync -->
                            <div class="absolute -top-5 -right-6 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] px-3 py-2.5 flex items-center gap-2.5 chip-float-1">
                                <div class="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 class="w-3.5 h-3.5 text-emerald-500" />
                                </div>
                                <div>
                                    <p class="text-[11px] font-extrabold text-gray-800 leading-none">Sync concluída</p>
                                    <p class="text-[10px] text-gray-400 mt-0.5">há 5 minutos</p>
                                </div>
                            </div>

                            <!-- Chip: Transações -->
                            <div class="absolute -bottom-5 -left-10 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] px-3 py-2.5 flex items-center gap-2.5 chip-float-2">
                                <div class="w-7 h-7 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <Activity class="w-3.5 h-3.5 text-blue-500" />
                                </div>
                                <div>
                                    <p class="text-[11px] font-extrabold text-gray-800 leading-none">+20 transações</p>
                                    <p class="text-[10px] text-gray-400 mt-0.5">importadas hoje</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ── Stats bar ── -->
                <div class="relative mt-14">
                    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent"></div>
                    <div class="grid grid-cols-3">
                        <div v-for="(s, i) in [
                            { icon: CheckCircle2, label: 'Contas ativas',       value: okCount,  sub: 'sincronizadas',       color: 'text-emerald-400', ring: 'bg-emerald-400/10 ring-emerald-400/20' },
                            { icon: Activity,     label: 'Transações no mês',   value: totalTx,  sub: 'importadas auto.',    color: 'text-blue-400',    ring: 'bg-blue-400/10 ring-blue-400/20'       },
                            { icon: AlertCircle,  label: 'Precisam de atenção', value: errCount, sub: 'erro de conexão',     color: 'text-amber-400',   ring: 'bg-amber-400/10 ring-amber-400/20'     },
                        ]" :key="s.label"
                            class="flex items-center gap-4 px-6 py-6 hover:bg-white/[0.025] transition-colors"
                            :class="i < 2 ? 'border-r border-white/[0.07]' : ''">
                            <div class="w-11 h-11 rounded-2xl ring-1 flex items-center justify-center shrink-0" :class="s.ring">
                                <component :is="s.icon" class="w-5 h-5" :class="s.color" />
                            </div>
                            <div>
                                <p class="text-3xl font-black text-white leading-none">{{ s.value }}</p>
                                <p class="text-[11px] text-gray-500 mt-1.5 leading-none">{{ s.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main class="max-w-4xl mx-auto px-4 py-10 space-y-10">

            <!-- ── Aviso BCB ───────────────────────────────────────────────── -->
            <div class="flex items-center gap-4 bg-white rounded-2xl border border-blue-100 shadow-sm px-5 py-4">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                    <Shield class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1">
                    <p class="text-sm font-bold text-gray-800">Conexão 100% segura via Open Finance</p>
                    <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        Regulamentado pelo Banco Central. Suas senhas nunca passam pelo Organizze — acesso somente leitura, autorizado por você no app do banco.
                    </p>
                </div>
                <a href="#" class="shrink-0 text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 whitespace-nowrap">
                    Saiba mais <ChevronRight class="w-3.5 h-3.5" />
                </a>
            </div>

            <!-- ── Contas conectadas ───────────────────────────────────────── -->
            <section>
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xs font-bold text-gray-400 uppercase tracking-widest">Minhas conexões</h2>
                    <span v-if="errCount > 0"
                        class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                        <AlertCircle class="w-3 h-3" /> {{ errCount }} precisa{{ errCount > 1 ? 'm' : '' }} de atenção
                    </span>
                </div>

                <!-- Empty -->
                <div v-if="connections.length === 0"
                    class="bg-white rounded-3xl border-2 border-dashed border-gray-200 py-16 text-center">
                    <div class="w-16 h-16 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <WifiOff class="w-7 h-7 text-gray-300" />
                    </div>
                    <p class="text-sm font-bold text-gray-500 mb-1">Nenhuma conta conectada</p>
                    <p class="text-xs text-gray-400 mb-5">Conecte seu banco para importar transações automaticamente.</p>
                    <button class="inline-flex items-center gap-2 bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-600 transition-colors">
                        <Plus class="w-4 h-4" /> Conectar banco
                    </button>
                </div>

                <!-- Lista -->
                <div v-else class="space-y-3">
                    <div v-for="conn in connections" :key="conn.id"
                        class="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                        :class="conn.status === 'error' ? 'border-red-200 hover:border-red-300' : 'border-gray-100 hover:border-emerald-200'">
                        <div class="flex items-stretch">

                            <!-- Sidebar colorido -->
                            <div class="w-[72px] sm:w-24 flex flex-col items-center justify-center p-4 shrink-0 relative overflow-hidden"
                                :style="`background: linear-gradient(135deg, ${conn.from}, ${conn.to})`">
                                <div class="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-white/10"></div>
                                <div class="absolute -left-3 -bottom-3 w-12 h-12 rounded-full bg-black/10"></div>
                                <img :src="conn.logo" :alt="conn.bank"
                                    class="relative w-9 h-9 object-contain brightness-0 invert" />
                            </div>

                            <!-- Conteúdo -->
                            <div class="flex-1 px-5 py-4 min-w-0">
                                <div class="flex items-start justify-between gap-4">
                                    <div class="min-w-0">
                                        <div class="flex items-center gap-2 mb-0.5">
                                            <p class="text-sm font-extrabold text-gray-900">{{ conn.bank }}</p>
                                            <span v-if="conn.status === 'connected'"
                                                class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                Online
                                            </span>
                                            <span v-else
                                                class="inline-flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full">
                                                <AlertCircle class="w-3 h-3" /> Erro
                                            </span>
                                        </div>
                                        <p class="text-xs text-gray-400">{{ conn.type }} · {{ conn.number }}</p>
                                        <div class="flex items-center gap-1 mt-1">
                                            <Clock class="w-3 h-3 text-gray-300 shrink-0" />
                                            <p class="text-[11px] text-gray-400">Sync {{ conn.lastSync }}</p>
                                            <span v-if="conn.txCount > 0"
                                                class="ml-2 text-[10px] font-bold text-blue-500 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-full">
                                                +{{ conn.txCount }} novas
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Saldo + Ações -->
                                    <div class="shrink-0 text-right">
                                        <p v-if="conn.balance !== null" class="text-base font-extrabold leading-tight"
                                            :class="conn.balance >= 0 ? 'text-gray-900' : 'text-red-500'">
                                            <span class="text-xs font-normal text-gray-400 mr-0.5">R$</span>{{ fmtBRL(conn.balance) }}
                                        </p>
                                        <p v-else class="text-xs font-semibold text-red-400">Reautorizar</p>

                                        <div class="flex items-center gap-1.5 justify-end mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                            <button v-if="conn.status === 'error'"
                                                class="flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-600 text-[11px] font-bold rounded-lg transition-colors">
                                                <RotateCcw class="w-3 h-3" /> Reautorizar
                                            </button>
                                            <button v-else @click="syncNow(conn)"
                                                class="flex items-center gap-1 px-2.5 py-1.5 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 text-gray-500 hover:text-emerald-600 text-[11px] font-bold rounded-lg transition-colors">
                                                <RefreshCw class="w-3 h-3" :class="syncingId === conn.id ? 'animate-spin' : ''" />
                                                {{ syncingId === conn.id ? 'Sync…' : 'Sync' }}
                                            </button>
                                            <button @click="confirmRemove(conn)"
                                                class="p-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-300 hover:text-red-400 rounded-lg transition-colors">
                                                <Trash2 class="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Barra de progresso (só para status erro) -->
                                <div v-if="conn.status === 'error'" class="mt-3 flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                                    <AlertCircle class="w-3.5 h-3.5 text-red-400 shrink-0" />
                                    <p class="text-xs text-red-500 leading-snug flex-1">A autorização expirou. Reconecte para retomar a sincronização.</p>
                                    <button class="text-[11px] font-bold text-red-500 hover:text-red-600 whitespace-nowrap">Reconectar →</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Linha de adicionar -->
                    <button class="group w-full flex items-center gap-4 bg-white rounded-2xl border border-dashed border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/20 px-5 py-4 transition-all duration-200 shadow-sm">
                        <div class="w-[72px] sm:w-24 h-14 -mx-5 -my-4 mr-0 sm:-my-4 flex items-center justify-center bg-gray-50 group-hover:bg-emerald-50 transition-colors border-r border-dashed border-gray-200 group-hover:border-emerald-200 shrink-0">
                            <Plus class="w-5 h-5 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        <div class="ml-4 text-left">
                            <p class="text-sm font-bold text-gray-400 group-hover:text-emerald-600 transition-colors">Adicionar nova conta</p>
                            <p class="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors mt-0.5">14 instituições disponíveis</p>
                        </div>
                    </button>
                </div>
            </section>

            <!-- ── Bancos disponíveis ──────────────────────────────────────── -->
            <section>
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <h2 class="text-xs font-bold text-gray-400 uppercase tracking-widest">Adicionar instituição</h2>
                    <div class="relative">
                        <Search class="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input v-model="bankSearch" placeholder="Buscar banco…"
                            class="pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent w-48" />
                    </div>
                </div>

                <!-- Categorias -->
                <div class="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
                    <button v-for="c in ['todos','tradicionais','digitais','fintechs']" :key="c"
                        @click="bankCat = c"
                        class="whitespace-nowrap px-4 py-1.5 text-xs font-bold rounded-full transition-all capitalize"
                        :class="bankCat === c
                            ? 'bg-gray-900 text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'">
                        {{ c }}
                    </button>
                </div>

                <!-- Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    <button v-for="bank in filteredBanks" :key="bank.id"
                        class="group relative flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/60 transition-all duration-200 text-left">

                        <!-- Já conectado -->
                        <div v-if="connectedBankIds.has(bank.id)"
                            class="absolute -top-2 -right-2 flex items-center gap-1 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                            <CheckCircle2 class="w-2.5 h-2.5" /> Conectado
                        </div>

                        <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 flex items-center justify-center overflow-hidden shrink-0 transition-all">
                            <img :src="bank.logo" :alt="bank.name" class="w-7 h-7 object-contain" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-xs font-bold text-gray-700 group-hover:text-gray-900 truncate transition-colors">{{ bank.name }}</p>
                            <p class="text-[10px] text-gray-300 group-hover:text-emerald-500 font-semibold transition-colors mt-0.5">
                                {{ connectedBankIds.has(bank.id) ? 'Gerenciar' : 'Conectar →' }}
                            </p>
                        </div>
                    </button>

                    <div v-if="filteredBanks.length === 0" class="col-span-full py-10 text-center">
                        <p class="text-sm text-gray-400">Nenhum banco encontrado.</p>
                    </div>
                </div>
            </section>

            <!-- ── Como funciona ──────────────────────────────────────────── -->
            <section>
                <h2 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Como funciona</h2>
                <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div v-for="(step, i) in [
                            { icon: Building2, grad: 'from-emerald-400 to-teal-500',  shadow: 'shadow-emerald-200', n: '1', title: 'Escolha o banco',       desc: 'Selecione a instituição que deseja integrar.' },
                            { icon: Shield,    grad: 'from-blue-400 to-indigo-500',   shadow: 'shadow-blue-200',    n: '2', title: 'Autorize no app',        desc: 'Você aprova o compartilhamento diretamente no banco.' },
                            { icon: Zap,       grad: 'from-violet-400 to-purple-500', shadow: 'shadow-violet-200',  n: '3', title: 'Sync automático',       desc: 'Transações chegam no Organizze todos os dias.' },
                        ]" :key="i" class="relative p-7 flex gap-4 group hover:bg-gray-50/50 transition-colors">
                            <div class="shrink-0 relative">
                                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg"
                                    :class="[step.grad, step.shadow]">
                                    <component :is="step.icon" class="w-5 h-5 text-white" />
                                </div>
                                <span class="absolute -top-2 -right-2 w-5 h-5 bg-white border-2 border-gray-100 rounded-full text-[10px] font-black text-gray-500 flex items-center justify-center leading-none">
                                    {{ step.n }}
                                </span>
                            </div>
                            <div>
                                <p class="text-sm font-extrabold text-gray-800 mb-1">{{ step.title }}</p>
                                <p class="text-xs text-gray-400 leading-relaxed">{{ step.desc }}</p>
                            </div>
                            <!-- Seta conectora (desktop) -->
                            <div v-if="i < 2" class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-7 h-7 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                                <ChevronRight class="w-3.5 h-3.5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ── Segurança ───────────────────────────────────────────────── -->
            <section>
                <div class="relative bg-[#0D0D0D] rounded-3xl overflow-hidden">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'rgba(255,255,255,0.03)\'/%3E%3C/svg%3E')]"></div>
                    <div class="absolute -top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div class="relative p-8">
                        <div class="flex items-center gap-3 mb-7">
                            <div class="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center">
                                <Shield class="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p class="text-base font-extrabold text-white">Segurança de nível bancário</p>
                                <p class="text-xs text-gray-500">Regulamentado pelo Banco Central · ISO 27001 · PCI DSS</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div v-for="s in [
                                { icon: Eye,       badge: 'Read-only',  title: 'Acesso somente leitura',    desc: 'Nunca realizamos movimentações. Apenas lemos seu histórico de transações.' },
                                { icon: Lock,      badge: 'ISO 27001',  title: 'Criptografia TLS',           desc: 'Tudo viaja encriptado. Suas credenciais jamais são armazenadas conosco.' },
                                { icon: RotateCcw, badge: 'PCI DSS',    title: 'Revogável a qualquer hora', desc: 'Cancele diretamente no app do seu banco, sem precisar entrar no Organizze.' },
                            ]" :key="s.title"
                                class="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] rounded-2xl p-5 transition-colors">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                        <component :is="s.icon" class="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span class="text-[9px] font-black text-emerald-400/60 bg-emerald-400/8 border border-emerald-400/15 px-2 py-0.5 rounded-full uppercase tracking-wider">{{ s.badge }}</span>
                                </div>
                                <p class="text-sm font-bold text-white mb-1.5">{{ s.title }}</p>
                                <p class="text-xs text-gray-500 leading-relaxed">{{ s.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active > div, .modal-leave-active > div { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
.modal-enter-from > div, .modal-leave-to > div { transform: translateY(24px) scale(0.96); }
.scrollbar-none::-webkit-scrollbar { display: none; }

@keyframes float-card {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
}
@keyframes float-chip-1 {
    0%, 100% { transform: translateY(0px) rotate(-1deg); }
    50%       { transform: translateY(-7px) rotate(-1deg); }
}
@keyframes float-chip-2 {
    0%, 100% { transform: translateY(0px) rotate(1deg); }
    50%       { transform: translateY(-6px) rotate(1deg); }
}
.card-float    { animation: float-card   5s   ease-in-out infinite; }
.chip-float-1  { animation: float-chip-1 4.5s ease-in-out infinite 0.6s; }
.chip-float-2  { animation: float-chip-2 5.5s ease-in-out infinite 1.2s; }
</style>
