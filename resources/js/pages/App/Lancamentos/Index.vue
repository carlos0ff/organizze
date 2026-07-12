<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    ChevronLeft, ChevronRight, Plus, Search, Filter,
    ArrowUpCircle, ArrowDownCircle, ArrowRightLeft,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, ShoppingCart, Wifi, Zap,
    Briefcase, Coffee, Shirt, Dumbbell, X, Check,
    Pencil, Trash2, MoreHorizontal, SlidersHorizontal,
} from 'lucide-vue-next';

// ── Navegação de mês ─────────────────────────────────────────
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const currentMonth = ref(new Date().getMonth() + 1);
const currentYear  = ref(new Date().getFullYear());
const monthLabel   = computed(() => `${MONTHS[currentMonth.value - 1]} de ${currentYear.value}`);
function navigate(d) {
    let m = currentMonth.value + d, y = currentYear.value;
    if (m > 12) { m = 1; y++; }
    if (m < 1)  { m = 12; y--; }
    currentMonth.value = m; currentYear.value = y;
}

function fmtMoney(v) {
    return Math.abs(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function fmtDate(d) {
    return new Date(d + 'T00:00:00').toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' });
}

// ── Dados mock ───────────────────────────────────────────────
const transactions = ref([
    { id: 1,  date: '2025-11-10', desc: 'Salário',           cat: 'Renda',        account: 'Nubank',    type: 'receita',  amount:  5500.00, icon: Briefcase,    iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', status: 'pago' },
    { id: 2,  date: '2025-11-10', desc: 'Aluguel',           cat: 'Casa',         account: 'Itaú',      type: 'despesa',  amount: -1200.00, icon: Home,         iconBg: 'bg-blue-50',    iconText: 'text-blue-600',    status: 'pago' },
    { id: 3,  date: '2025-11-08', desc: 'Supermercado Extra',cat: 'Alimentação',  account: 'Nubank',    type: 'despesa',  amount:  -245.80, icon: ShoppingCart, iconBg: 'bg-orange-50',  iconText: 'text-orange-600',  status: 'pago' },
    { id: 4,  date: '2025-11-08', desc: 'Uber',              cat: 'Transporte',   account: 'Nubank',    type: 'despesa',  amount:   -35.90, icon: Car,          iconBg: 'bg-purple-50',  iconText: 'text-purple-600',  status: 'pago' },
    { id: 5,  date: '2025-11-07', desc: 'Freela Design',     cat: 'Renda',        account: 'Nubank',    type: 'receita',  amount:  1200.00, icon: Briefcase,    iconBg: 'bg-emerald-50', iconText: 'text-emerald-600', status: 'pago' },
    { id: 6,  date: '2025-11-05', desc: 'Netflix',           cat: 'Assinaturas',  account: 'Santander', type: 'despesa',  amount:   -39.90, icon: TvMinimalPlay,iconBg: 'bg-red-50',     iconText: 'text-red-600',     status: 'pago' },
    { id: 7,  date: '2025-11-05', desc: 'Internet Vivo',     cat: 'Serviços',     account: 'Itaú',      type: 'despesa',  amount:   -99.90, icon: Wifi,         iconBg: 'bg-indigo-50',  iconText: 'text-indigo-600',  status: 'pago' },
    { id: 8,  date: '2025-11-04', desc: 'Cafeteria',         cat: 'Alimentação',  account: 'Nubank',    type: 'despesa',  amount:   -28.50, icon: Coffee,       iconBg: 'bg-amber-50',   iconText: 'text-amber-600',   status: 'pago' },
    { id: 9,  date: '2025-11-03', desc: 'Energia Elétrica',  cat: 'Casa',         account: 'Itaú',      type: 'despesa',  amount:  -145.80, icon: Zap,          iconBg: 'bg-yellow-50',  iconText: 'text-yellow-600',  status: 'pendente' },
    { id: 10, date: '2025-11-03', desc: 'Academia SmartFit', cat: 'Saúde',        account: 'Santander', type: 'despesa',  amount:   -89.90, icon: Dumbbell,     iconBg: 'bg-pink-50',    iconText: 'text-pink-600',    status: 'pago' },
    { id: 11, date: '2025-11-02', desc: 'Farmácia',          cat: 'Saúde',        account: 'Nubank',    type: 'despesa',  amount:   -67.40, icon: HeartPulse,   iconBg: 'bg-rose-50',    iconText: 'text-rose-600',    status: 'pago' },
    { id: 12, date: '2025-11-01', desc: 'Transferência',     cat: 'Transferência',account: 'Itaú→Nubank',type: 'transf', amount:   500.00, icon: ArrowRightLeft,iconBg: 'bg-gray-100',  iconText: 'text-gray-500',    status: 'pago' },
    { id: 13, date: '2025-11-01', desc: 'Zara',              cat: 'Vestuário',    account: 'Santander', type: 'despesa',  amount:  -189.90, icon: Shirt,        iconBg: 'bg-purple-50',  iconText: 'text-purple-600',  status: 'pago' },
    { id: 14, date: '2025-11-01', desc: 'Lazer - Cinema',    cat: 'Lazer',        account: 'Nubank',    type: 'despesa',  amount:   -48.00, icon: TreePalm,     iconBg: 'bg-cyan-50',    iconText: 'text-cyan-600',    status: 'pendente' },
]);

// ── Filtros ──────────────────────────────────────────────────
const search   = ref('');
const typeFilter = ref('todos'); // todos | receita | despesa | transf
const openMenu = ref(null);

const filtered = computed(() => {
    let list = transactions.value;
    if (typeFilter.value !== 'todos') list = list.filter(t => t.type === typeFilter.value);
    if (search.value.trim()) {
        const q = search.value.toLowerCase();
        list = list.filter(t =>
            t.desc.toLowerCase().includes(q) ||
            t.cat.toLowerCase().includes(q) ||
            t.account.toLowerCase().includes(q)
        );
    }
    return list;
});

// ── Agrupamento por data ─────────────────────────────────────
const grouped = computed(() => {
    const map = new Map();
    for (const t of filtered.value) {
        if (!map.has(t.date)) map.set(t.date, []);
        map.get(t.date).push(t);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
});

function dayTotal(txs) {
    return txs.reduce((s, t) => s + (t.type === 'receita' ? t.amount : t.type === 'despesa' ? t.amount : 0), 0);
}

// ── KPIs ─────────────────────────────────────────────────────
const totalReceitas = computed(() => transactions.value.filter(t => t.type === 'receita').reduce((s, t) => s + t.amount, 0));
const totalDespesas = computed(() => transactions.value.filter(t => t.type === 'despesa').reduce((s, t) => s + t.amount, 0));
const saldo         = computed(() => totalReceitas.value + totalDespesas.value);

// ── Modal nova transação ─────────────────────────────────────
const showModal = ref(false);
const form = ref({ desc: '', amount: '', type: 'despesa', cat: '', date: '', account: '' });
function openModal() { showModal.value = true; }
function closeModal() { showModal.value = false; form.value = { desc: '', amount: '', type: 'despesa', cat: '', date: '', account: '' }; }

function removeTransaction(id) {
    transactions.value = transactions.value.filter(t => t.id !== id);
    openMenu.value = null;
}
</script>

<template>
    <Navbar />

    <main class="max-w-5xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <h1 class="text-xl font-bold text-gray-800">Lançamentos</h1>
                <p class="text-xs text-gray-400 mt-0.5">Controle todas as suas movimentações financeiras</p>
            </div>
            <button
                @click="openModal"
                class="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-100"
            >
                <Plus class="w-4 h-4" /> Nova transação
            </button>
        </div>

        <!-- Navegação de mês -->
        <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm w-fit mb-6">
            <button @click="navigate(-1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                <ChevronLeft class="w-4 h-4 text-gray-500" />
            </button>
            <span class="text-sm font-semibold text-gray-700 w-44 text-center capitalize">{{ monthLabel }}</span>
            <button @click="navigate(1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                <ChevronRight class="w-4 h-4 text-gray-500" />
            </button>
        </div>

        <!-- KPIs -->
        <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <ArrowUpCircle class="w-4 h-4 text-emerald-500" />
                    </div>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Receitas</span>
                </div>
                <p class="text-xl font-extrabold text-emerald-600">{{ fmtMoney(totalReceitas) }}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                        <ArrowDownCircle class="w-4 h-4 text-red-400" />
                    </div>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Despesas</span>
                </div>
                <p class="text-xl font-extrabold text-red-500">{{ fmtMoney(totalDespesas) }}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center" :class="saldo >= 0 ? 'bg-emerald-50' : 'bg-red-50'">
                        <ArrowRightLeft class="w-4 h-4" :class="saldo >= 0 ? 'text-emerald-500' : 'text-red-400'" />
                    </div>
                    <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Saldo</span>
                </div>
                <p class="text-xl font-extrabold" :class="saldo >= 0 ? 'text-emerald-600' : 'text-red-500'">
                    {{ saldo >= 0 ? '' : '-' }}{{ fmtMoney(saldo) }}
                </p>
            </div>
        </div>

        <!-- Filtros -->
        <div class="flex flex-col sm:flex-row gap-3 mb-5">
            <!-- Busca -->
            <div class="relative flex-1">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    v-model="search"
                    type="text"
                    placeholder="Buscar lançamento..."
                    class="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
            </div>
            <!-- Tipo -->
            <div class="flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
                <button v-for="opt in [
                    { key: 'todos',   label: 'Todos' },
                    { key: 'receita', label: 'Receitas' },
                    { key: 'despesa', label: 'Despesas' },
                    { key: 'transf',  label: 'Transf.' },
                ]" :key="opt.key"
                    @click="typeFilter = opt.key"
                    class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors"
                    :class="typeFilter === opt.key
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-500 hover:bg-gray-100'"
                >
                    {{ opt.label }}
                </button>
            </div>
        </div>

        <!-- Lista agrupada por data -->
        <div class="space-y-5">
            <div v-if="grouped.length === 0" class="text-center py-16 text-gray-400">
                <SlidersHorizontal class="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p class="text-sm">Nenhum lançamento encontrado.</p>
            </div>

            <div v-for="[date, txs] in grouped" :key="date">
                <!-- Cabeçalho do dia -->
                <div class="flex items-center justify-between mb-2 px-1">
                    <span class="text-xs font-bold text-gray-500 capitalize">{{ fmtDate(date) }}</span>
                    <span class="text-xs font-semibold tabular-nums"
                        :class="dayTotal(txs) >= 0 ? 'text-emerald-600' : 'text-red-500'">
                        {{ dayTotal(txs) >= 0 ? '+' : '' }}{{ (dayTotal(txs) < 0 ? '-' : '') }}{{ fmtMoney(dayTotal(txs)) }}
                    </span>
                </div>

                <!-- Transações do dia -->
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                    <div
                        v-for="t in txs"
                        :key="t.id"
                        class="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/60 transition-colors group relative"
                    >
                        <!-- Ícone -->
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            :class="[t.iconBg, t.iconText]">
                            <component :is="t.icon" class="w-4 h-4" />
                        </div>

                        <!-- Info -->
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-semibold text-gray-800 truncate">{{ t.desc }}</span>
                                <span v-if="t.status === 'pendente'"
                                    class="text-[10px] font-semibold bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full shrink-0">
                                    Pendente
                                </span>
                            </div>
                            <p class="text-xs text-gray-400">{{ t.cat }} · {{ t.account }}</p>
                        </div>

                        <!-- Valor -->
                        <span class="text-sm font-bold tabular-nums shrink-0"
                            :class="{
                                'text-emerald-600': t.type === 'receita',
                                'text-red-500':     t.type === 'despesa',
                                'text-gray-500':    t.type === 'transf',
                            }">
                            {{ t.type === 'receita' ? '+' : t.type === 'despesa' ? '-' : '' }}{{ fmtMoney(t.amount) }}
                        </span>

                        <!-- Menu ações -->
                        <div class="relative">
                            <button
                                @click.stop="openMenu = openMenu === t.id ? null : t.id"
                                class="p-1.5 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <MoreHorizontal class="w-4 h-4" />
                            </button>
                            <div v-if="openMenu === t.id"
                                class="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl border border-gray-100 shadow-lg z-10 py-1">
                                <button class="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors">
                                    <Pencil class="w-3.5 h-3.5 text-gray-400" /> Editar
                                </button>
                                <button
                                    @click="removeTransaction(t.id)"
                                    class="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors">
                                    <Trash2 class="w-3.5 h-3.5" /> Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Modal nova transação -->
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeModal"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
                <div class="flex items-center justify-between mb-5">
                    <h2 class="text-base font-bold text-gray-800">Nova Transação</h2>
                    <button @click="closeModal" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <X class="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                <!-- Tipo -->
                <div class="flex gap-2 mb-4">
                    <button v-for="opt in [
                        { key: 'despesa', label: 'Despesa', cls: 'bg-red-500' },
                        { key: 'receita', label: 'Receita', cls: 'bg-emerald-500' },
                        { key: 'transf',  label: 'Transferência', cls: 'bg-gray-500' },
                    ]" :key="opt.key"
                        @click="form.type = opt.key"
                        class="flex-1 py-2 rounded-xl text-xs font-semibold border transition-all"
                        :class="form.type === opt.key
                            ? opt.cls + ' text-white border-transparent'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'"
                    >
                        {{ opt.label }}
                    </button>
                </div>

                <div class="space-y-3">
                    <div>
                        <label class="text-xs font-semibold text-gray-500 mb-1 block">Descrição</label>
                        <input v-model="form.desc" type="text" placeholder="Ex: Supermercado"
                            class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-xs font-semibold text-gray-500 mb-1 block">Valor (R$)</label>
                            <input v-model="form.amount" type="number" step="0.01" placeholder="0,00"
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 mb-1 block">Data</label>
                            <input v-model="form.date" type="date"
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-xs font-semibold text-gray-500 mb-1 block">Categoria</label>
                            <select v-model="form.cat"
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white">
                                <option value="">Selecionar</option>
                                <option>Alimentação</option>
                                <option>Casa</option>
                                <option>Transporte</option>
                                <option>Saúde</option>
                                <option>Lazer</option>
                                <option>Assinaturas</option>
                                <option>Vestuário</option>
                                <option>Educação</option>
                                <option>Renda</option>
                                <option>Outros</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-500 mb-1 block">Conta</label>
                            <select v-model="form.account"
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white">
                                <option value="">Selecionar</option>
                                <option>Nubank</option>
                                <option>Itaú</option>
                                <option>Santander</option>
                                <option>Dinheiro</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex gap-3 mt-6">
                    <button @click="closeModal"
                        class="flex-1 py-2.5 border border-gray-200 text-sm font-semibold text-gray-500 rounded-xl hover:bg-gray-50 transition-colors">
                        Cancelar
                    </button>
                    <button @click="closeModal"
                        class="flex-1 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors">
                        <Check class="w-4 h-4 inline mr-1" /> Salvar
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
