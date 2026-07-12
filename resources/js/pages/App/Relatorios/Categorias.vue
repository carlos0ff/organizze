<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import Footer from '@/Components/layout/Footer.vue';
import {
    ChevronLeft, ChevronRight, Download, TrendingUp, TrendingDown,
    BarChart2, Calendar, Scale, Layers,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, ShoppingCart,
} from 'lucide-vue-next';

const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const currentMonth = ref(new Date().getMonth() + 1);
const currentYear  = ref(new Date().getFullYear());
const monthLabel   = computed(() => `${MONTHS[currentMonth.value - 1]} de ${currentYear.value}`);

function navigate(delta) {
    let m = currentMonth.value + delta, y = currentYear.value;
    if (m > 12) { m = 1;  y++; }
    if (m < 1)  { m = 12; y--; }
    currentMonth.value = m;
    currentYear.value  = y;
}

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const categories = computed(() => [
    { name: 'Moradia',     value: 1800, prevValue: 1800, icon: Home,          color: '#3b82f6', bg: 'bg-blue-50',    text: 'text-blue-600'    },
    { name: 'Alimentação', value: 780,  prevValue: 720,  icon: Utensils,      color: '#f97316', bg: 'bg-orange-50',  text: 'text-orange-600'  },
    { name: 'Transporte',  value: 320,  prevValue: 380,  icon: Car,           color: '#8b5cf6', bg: 'bg-purple-50',  text: 'text-purple-600'  },
    { name: 'Saúde',       value: 280,  prevValue: 210,  icon: HeartPulse,    color: '#ec4899', bg: 'bg-pink-50',    text: 'text-pink-600'    },
    { name: 'Lazer',       value: 240,  prevValue: 290,  icon: TreePalm,      color: '#f59e0b', bg: 'bg-amber-50',   text: 'text-amber-600'   },
    { name: 'Assinaturas', value: 180,  prevValue: 180,  icon: TvMinimalPlay, color: '#6366f1', bg: 'bg-indigo-50',  text: 'text-indigo-600'  },
    { name: 'Educação',    value: 150,  prevValue: 120,  icon: GraduationCap, color: '#10b981', bg: 'bg-emerald-50', text: 'text-emerald-600' },
    { name: 'Outros',      value: 817,  prevValue: 650,  icon: ShoppingCart,  color: '#6b7280', bg: 'bg-gray-100',   text: 'text-gray-500'    },
]);

const total    = computed(() => categories.value.reduce((s, c) => s + c.value, 0));
const prevTotal = computed(() => categories.value.reduce((s, c) => s + c.prevValue, 0));
const totalDiff = computed(() => ((total.value - prevTotal.value) / prevTotal.value * 100).toFixed(1));

const topCategory    = computed(() => [...categories.value].sort((a, b) => b.value - a.value)[0]);
const bottomCategory = computed(() => [...categories.value].sort((a, b) => a.value - b.value)[0]);

const withPct = computed(() => categories.value.map(c => ({
    ...c,
    pct:  Math.round((c.value / total.value) * 100),
    diff: c.prevValue > 0 ? ((c.value - c.prevValue) / c.prevValue * 100).toFixed(1) : '0.0',
})));

// SVG donut — r = 70, circumference ≈ 439.8
const CIRCUM = 2 * Math.PI * 70;
const segments = computed(() => {
    let offset = 0;
    return withPct.value.map(c => {
        const dash = (c.pct / 100) * CIRCUM;
        const gap  = CIRCUM - dash;
        const seg  = { color: c.color, dash, gap, offset };
        offset += dash;
        return seg;
    });
});
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <Layers class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Gastos por Categoria</h1>
                </div>
                <p class="text-sm text-gray-400">Detalhamento de despesas — {{ monthLabel }}</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                    <button @click="navigate(-1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                        <ChevronLeft class="w-4 h-4 text-gray-500" />
                    </button>
                    <span class="text-sm font-semibold text-gray-700 w-40 text-center capitalize">{{ monthLabel }}</span>
                    <button @click="navigate(1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                        <ChevronRight class="w-4 h-4 text-gray-500" />
                    </button>
                </div>
                <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-gray-600 rounded-xl shadow-sm hover:border-gray-300 transition-colors">
                    <Download class="w-4 h-4" /> Exportar
                </button>
            </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-2 mb-6 overflow-x-auto pb-1">
            <a href="/app/relatorios/mensal"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Calendar class="w-4 h-4" /> Mensal
            </a>
            <a href="/app/relatorios/anual"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <BarChart2 class="w-4 h-4" /> Anual
            </a>
            <a href="/app/relatorios/categorias"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-xl whitespace-nowrap">
                <Layers class="w-4 h-4" /> Por Categoria
            </a>
            <a href="/app/relatorios/receitas-despesas"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Scale class="w-4 h-4" /> Receitas vs Despesas
            </a>
        </div>

        <!-- KPI cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Total Gasto</p>
                <p class="text-xl font-bold text-gray-800">{{ fmtMoney(total) }}</p>
                <div class="flex items-center gap-1 mt-1">
                    <TrendingUp v-if="Number(totalDiff) > 0" class="w-3.5 h-3.5 text-red-400" />
                    <TrendingDown v-else class="w-3.5 h-3.5 text-emerald-500" />
                    <span class="text-xs font-medium" :class="Number(totalDiff) > 0 ? 'text-red-500' : 'text-emerald-500'">
                        {{ Math.abs(Number(totalDiff)) }}% vs anterior
                    </span>
                </div>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Categorias</p>
                <p class="text-xl font-bold text-gray-800">{{ categories.length }}</p>
                <p class="text-xs text-gray-400 mt-1">com movimentação</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Maior Gasto</p>
                <p class="text-xl font-bold text-gray-800">{{ fmtMoney(topCategory.value) }}</p>
                <p class="text-xs text-gray-400 mt-1 truncate">{{ topCategory.name }}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Menor Gasto</p>
                <p class="text-xl font-bold text-gray-800">{{ fmtMoney(bottomCategory.value) }}</p>
                <p class="text-xs text-gray-400 mt-1 truncate">{{ bottomCategory.name }}</p>
            </div>
        </div>

        <!-- Main grid: donut + lista -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <!-- Donut -->
            <div class="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <p class="text-sm font-semibold text-gray-700 mb-4">Distribuição</p>
                <div class="flex justify-center">
                    <div class="relative">
                        <svg class="w-52 h-52 -rotate-90" viewBox="0 0 160 160">
                            <circle cx="80" cy="80" r="70" fill="none" stroke="#f1f5f9" stroke-width="16" />
                            <circle
                                v-for="(seg, i) in segments"
                                :key="i"
                                cx="80" cy="80" r="70"
                                fill="none"
                                :stroke="seg.color"
                                stroke-width="16"
                                stroke-linecap="butt"
                                :stroke-dasharray="`${seg.dash} ${seg.gap}`"
                                :stroke-dashoffset="-seg.offset"
                            />
                        </svg>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <span class="text-xs text-gray-400">Total</span>
                            <span class="text-lg font-black text-gray-800 leading-tight">{{ fmtMoney(total) }}</span>
                        </div>
                    </div>
                </div>
                <!-- Legenda -->
                <div class="mt-5 space-y-2">
                    <div v-for="c in withPct" :key="c.name" class="flex items-center justify-between text-xs">
                        <div class="flex items-center gap-1.5">
                            <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="`background:${c.color}`"></span>
                            <span class="text-gray-600">{{ c.name }}</span>
                        </div>
                        <span class="font-semibold text-gray-700">{{ c.pct }}%</span>
                    </div>
                </div>
            </div>

            <!-- Lista detalhada -->
            <div class="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <p class="text-sm font-semibold text-gray-700 mb-4">Detalhamento</p>
                <div class="space-y-3.5">
                    <div v-for="c in withPct" :key="c.name" class="flex items-center gap-3">
                        <div class="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center" :class="[c.bg, c.text]">
                            <component :is="c.icon" class="w-4 h-4" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-800">{{ c.name }}</span>
                                <div class="flex items-center gap-3">
                                    <span class="text-[11px] font-medium tabular-nums"
                                        :class="Number(c.diff) > 0 ? 'text-red-400' : Number(c.diff) < 0 ? 'text-emerald-500' : 'text-gray-400'">
                                        {{ Number(c.diff) > 0 ? '+' : '' }}{{ c.diff }}%
                                    </span>
                                    <span class="text-sm font-semibold text-gray-700 tabular-nums w-24 text-right">{{ fmtMoney(c.value) }}</span>
                                </div>
                            </div>
                            <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-700"
                                    :style="`width: ${c.pct}%; background: ${c.color}`">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabela comparativa -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100">
                <h2 class="text-sm font-semibold text-gray-700">Comparativo com mês anterior</h2>
            </div>
            <div class="divide-y divide-gray-50">
                <div class="grid grid-cols-4 px-6 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    <span>Categoria</span>
                    <span class="text-right">Mês anterior</span>
                    <span class="text-right">Mês atual</span>
                    <span class="text-right">Variação</span>
                </div>
                <div v-for="c in withPct" :key="c.name"
                    class="grid grid-cols-4 px-6 py-3 hover:bg-gray-50 transition-colors items-center">
                    <div class="flex items-center gap-2.5">
                        <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="`background:${c.color}`"></span>
                        <span class="text-sm text-gray-700">{{ c.name }}</span>
                    </div>
                    <span class="text-sm text-gray-500 text-right tabular-nums">{{ fmtMoney(c.prevValue) }}</span>
                    <span class="text-sm font-semibold text-gray-800 text-right tabular-nums">{{ fmtMoney(c.value) }}</span>
                    <div class="flex items-center justify-end gap-1">
                        <TrendingUp   v-if="Number(c.diff) > 0"  class="w-3.5 h-3.5 text-red-400" />
                        <TrendingDown v-else-if="Number(c.diff) < 0" class="w-3.5 h-3.5 text-emerald-500" />
                        <span v-if="Number(c.diff) === 0" class="text-sm text-gray-400">—</span>
                        <span v-else class="text-sm font-medium tabular-nums"
                            :class="Number(c.diff) > 0 ? 'text-red-500' : 'text-emerald-500'">
                            {{ Number(c.diff) > 0 ? '+' : '' }}{{ c.diff }}%
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </main>
</template>
