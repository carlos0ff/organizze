<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '@/Components/navigation/Navbar.vue';

import {
    ChevronLeft, ChevronRight, Plus, Search, Filter,
    ArrowUpCircle, ArrowDownCircle, ArrowRightLeft,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, ShoppingCart, Wifi, Zap,
    Briefcase, Coffee, Shirt, Dumbbell, X, Check,
    Pencil, Trash2, MoreHorizontal, SlidersHorizontal,
} from 'lucide-vue-next';

import Footer from '@/Components/layout/Footer.vue';

// ── Emits ──────────────────────────────────────────────────
const emit = defineEmits(['filter-applied', 'filter-cleared']);

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

// ── Filtro de Data ──────────────────────────────────────────
const currentDate = ref(new Date(2026, 6, 1)); // Julho 2026
const showDateFilter = ref(false);
const startDate = ref(null);
const endDate = ref(null);
const isFilterActive = ref(false);
const activePreset = ref(null);

const datePresets = [
    { label: 'Hoje', value: 'today' },
    { label: 'Esta semana', value: 'week' },
    { label: 'Este mês', value: 'month' },
    { label: 'Este ano', value: 'year' }
];

const currentMonthName = computed(() => {
    const month = currentDate.value.toLocaleString('pt-BR', { month: 'long' });
    return month.charAt(0).toUpperCase() + month.slice(1);
});

// ── Métodos do Filtro de Data ──────────────────────────────
function previousMonth() {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() - 1);
    currentDate.value = newDate;
    clearPreset();
}

function nextMonth() {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() + 1);
    currentDate.value = newDate;
    clearPreset();
}

function toggleFilter() {
    showDateFilter.value = !showDateFilter.value;
}

function closeFilter() {
    showDateFilter.value = false;
}

function applyPreset(value) {
    const today = new Date();
    let start, end;

    switch(value) {
        case 'today':
            start = end = new Date(today);
            break;
        case 'week':
            start = new Date(today);
            start.setDate(today.getDate() - today.getDay());
            end = new Date(start);
            end.setDate(start.getDate() + 6);
            break;
        case 'month':
            start = new Date(today.getFullYear(), today.getMonth(), 1);
            end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            break;
        case 'quarter':
            const qMonth = Math.floor(today.getMonth() / 3) * 3;
            start = new Date(today.getFullYear(), qMonth, 1);
            end = new Date(today.getFullYear(), qMonth + 3, 0);
            break;
        case 'year':
            start = new Date(today.getFullYear(), 0, 1);
            end = new Date(today.getFullYear(), 11, 31);
            break;
    }

    startDate.value = formatDateInput(start);
    endDate.value = formatDateInput(end);
    activePreset.value = value;
    isFilterActive.value = true;

    applyDateFilter();
}

function clearPreset() {
    activePreset.value = null;
}

function formatDateInput(date) {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDateRange(start, end) {
    const format = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    };
    return `${format(start)} até ${format(end)}`;
}

function applyDateFilter() {
    if (!startDate.value || !endDate.value) {
        return;
    }

    if (new Date(startDate.value) > new Date(endDate.value)) {
        alert('A data inicial deve ser anterior à data final.');
        return;
    }

    isFilterActive.value = true;
    activePreset.value = null;
    showDateFilter.value = false;

    emit('filter-applied', {
        startDate: startDate.value,
        endDate: endDate.value
    });

    console.log('Filtro aplicado:', {
        start: startDate.value,
        end: endDate.value
    });
}

function clearDateFilter() {
    startDate.value = null;
    endDate.value = null;
    isFilterActive.value = false;
    activePreset.value = null;
    showDateFilter.value = false;

    emit('filter-cleared');
    console.log('Filtro limpo');
}

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

// ── Lifecycle ────────────────────────────────────────────────
function handleClickOutside(e) {
    if (showDateFilter.value && !e.target.closest('.relative')) {
        showDateFilter.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

// ── Expor métodos para uso no template ──────────────────────
defineExpose({
    previousMonth,
    nextMonth,
    applyDateFilter,
    clearDateFilter,
    toggleFilter,
    closeFilter
});
</script>

<template>

    <Navbar />

    <div class="flex min-h-screen flex-col">
        <main class="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">

            <!-- Cabeçalho -->
            <header class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <!-- Navegação entre meses -->
                <div class="relative flex items-center justify-between gap-2">
                    <!-- Mês anterior -->
                    <button type="button" aria-label="Mês anterior" class="group flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-90" @click="previousMonth">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <!-- Botão do filtro -->
                    <button type="button" class="group relative flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/80 px-3 py-2  backdrop-blur-sm transition-all duration-300 " @click="toggleFilter" aria-expanded="showDateFilter" aria-haspopup="true">
                        <!-- Ícone de calendário -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-700/70" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>

                        <!-- Título com mês/ano -->
                        <span class="text-base font-semibold tracking-tight text-gray-900">
                        {{ currentMonthName }}
                        <span class="ml-1 font-normal text-gray-500">{{ currentYear }}</span>
                    </span>

                        <!-- Ícone da seta -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': showDateFilter }" aria-hidden="true">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>

                    <!-- Próximo mês -->
                    <button type="button" aria-label="Próximo mês" class="group flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2" @click="nextMonth">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    <!-- Dropdown do filtro -->
                    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95 -translate-y-2" enter-to-class="opacity-100 scale-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 -translate-y-2">
                        <div v-if="showDateFilter" class="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 rounded-2xl border border-gray-200/80 bg-white/95 p-5 shadow-xl backdrop-blur-sm" role="dialog" aria-label="Filtro de data" @click.stop>
                            <!-- Cabeçalho do dropdown -->
                            <div class="mb-4 flex items-start justify-between">
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-900">Filtrar por período</h3>
                                    <p class="mt-1 text-xs text-gray-500">Selecione um intervalo de datas</p>
                                </div>
                                <button type="button" class="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600" @click="closeFilter" aria-label="Fechar filtro">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Filtros rápidos -->
                            <div class="mb-4 flex justify-center gap-2">
                                <button v-for="preset in datePresets" :key="preset.label" type="button" class="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-all hover:bg-gray-300/60" :class="{'bg-gray-900 text-white': activePreset === preset.value}" @click="applyPreset(preset.value)">
                                    {{ preset.label }}
                                </button>
                            </div>

                            <!-- Divisor -->
                            <div class="relative my-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-200"></div>
                                </div>
                                <div class="relative flex justify-center text-xs">
                                    <span class="bg-white px-2 text-gray-400">ou escolha manualmente</span>
                                </div>
                            </div>

                            <!-- Inputs de data -->
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label for="start-date" class="mb-1.5 block text-xs font-medium text-gray-600">Data inicial</label>
                                    <input id="start-date" v-model="startDate" type="date" class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 hover:border-gray-300" :max="endDate || undefined"/>
                                </div>

                                <div>
                                    <label for="end-date" class="mb-1.5 block text-xs font-medium text-gray-600">Data final</label>
                                    <input id="end-date" v-model="endDate" type="date" class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 hover:border-gray-300" :min="startDate || undefined"/>
                                </div>
                            </div>

                            <!-- Preview do período selecionado -->
                            <div v-if="startDate && endDate" class="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-center text-xs text-gray-600">
                                <span class="font-medium">Período selecionado:</span>
                                {{ formatDateRange(startDate, endDate) }}
                            </div>

                            <!-- Botões de ação -->
                            <div class="mt-4 flex items-center justify-end gap-2 border-t border-gray-100 pt-4">
                                <button type="button" class="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700" @click="clearDateFilter">Limpar</button>

                                <button type="button" class="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-xs " @click="applyDateFilter" :disabled="!startDate || !endDate" :class="{ 'cursor-not-allowed opacity-50': !startDate || !endDate }">
                                    Aplicar filtro
                                </button>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="grid grid-cols-2 gap-2 sm:flex">
                    <button type="button" class="inline-flex items-center justify-center gap-1.5 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                            <path d="M5 12h14" />
                        </svg>
                        <span>Despesa</span>
                    </button>

                    <button type="button" class="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                        <span>Receita</span>
                    </button>

                    <button type="button" class="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                            <path d="m16 3 4 4-4 4" />
                            <path d="M20 7H4" />
                            <path d="m8 21-4-4 4-4" />
                            <path d="M4 17h16" />
                        </svg>
                        <span>Transferência</span>
                    </button>
                </div>
            </header>

            <!-- Resumo financeiro -->
            <section aria-label="Resumo financeiro do mês" class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <!-- Receitas -->
                <div class="group relative flex items-center gap-4 rounded-md bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 shrink-0 text-emerald-500" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m16 12-4-4-4 4" />
                        <path d="M12 16V8" />
                    </svg>

                    <div class="flex flex-1 items-center justify-between">
                        <dl>
                            <dt class="text-xs font-bold uppercase tracking-wide text-gray-400">Receitas</dt>
                            <dd class="text-2xl font-bold text-emerald-600">R$ 0,00</dd>
                        </dl>

                        <div class="flex flex-col items-end gap-0.5">
                        <span class="flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                <path d="M5 12h14" />
                            </svg>
                            0%
                        </span>
                            <span class="text-xs text-gray-400">vs. mês anterior</span>
                        </div>
                    </div>
                </div>

                <!-- Despesas -->
                <div class="group relative flex items-center gap-4 rounded-sm bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 shrink-0 text-red-500" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="m8 12 4 4 4-4" />
                    </svg>

                    <div class="flex flex-1 items-center justify-between">
                        <dl>
                            <dt class="text-xs font-bold uppercase tracking-wide text-gray-400">Despesas</dt>
                            <dd class="text-2xl font-bold text-red-500">R$ 0,00</dd>
                        </dl>

                        <div class="flex flex-col items-end gap-0.5">
                        <span class="flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                <path d="M5 12h14" />
                            </svg>
                            0%
                        </span>
                            <span class="text-xs text-gray-400">vs. mês anterior</span>
                        </div>
                    </div>
                </div>

                <!-- Saldo -->
                <div class="group relative flex items-center gap-4 rounded-md bg-white p-6 shadow-xs ring-1 ring-gray-100 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 shrink-0 text-emerald-500" aria-hidden="true">
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <path d="M17 6.5A4 4 0 0 0 13.5 4H10a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8H9.5A4 4 0 0 1 6 17" />
                    </svg>

                    <div class="flex flex-1 items-center justify-between">
                        <dl>
                            <dt class="text-xs font-bold uppercase tracking-wide text-gray-400">Saldo</dt>
                            <dd class="text-2xl font-bold text-emerald-600">R$ 0,00</dd>
                        </dl>

                        <div class="flex flex-col items-end gap-0.5">
                        <span class="flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                <path d="M5 12h14" />
                            </svg>
                            0%
                        </span>
                            <span class="text-xs text-gray-400">vs. mês anterior</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Filtros -->
            <nav aria-label="Filtros de lançamentos" class="mb-6 flex gap-2 overflow-x-auto pb-1">
                <button type="button" aria-pressed="true" class="shrink-0 rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors">
                    Todos
                </button>

                <button type="button" aria-pressed="false" class="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 transition-colors hover:border-emerald-300 hover:text-emerald-600">
                    Receitas
                </button>

                <button type="button" aria-pressed="false" class="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 transition-colors hover:border-emerald-300 hover:text-emerald-600">
                    Despesas
                </button>

                <button type="button" aria-pressed="false" class="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 transition-colors hover:border-emerald-300 hover:text-emerald-600">
                    Transferências
                </button>
            </nav>

            <!-- Lista de lançamentos -->
            <section aria-label="Lançamentos financeiros">
                <!-- Estado vazio -->
                <div class="rounded-xl bg-white px-6 py-12 text-center text-gray-400 shadow-sm" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"  stroke-linejoin="round" class="mx-auto mb-3 h-10 w-10 text-gray-300" aria-hidden="true">
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500"> Nenhum lançamento em julho de 2026</p>
                    <p class="mt-1 text-xs">Use os botões acima para adicionar uma nova movimentação.</p>
                </div>
            </section>

        </main>

        <Footer />
    </div>

</template>
