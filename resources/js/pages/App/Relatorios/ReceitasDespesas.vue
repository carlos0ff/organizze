<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    ChevronLeft, ChevronRight, Download, TrendingUp, TrendingDown,
    ArrowUpCircle, ArrowDownCircle, BarChart2, Calendar, Scale,
    PiggyBank, Target, Layers,
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

// Dados mock
const totalReceitas = ref(7000);
const totalDespesas = ref(4567.40);
const saldo = computed(() => totalReceitas.value - totalDespesas.value);
const pctEconomia = computed(() => (saldo.value / totalReceitas.value * 100).toFixed(1));

const receitasCats = computed(() => [
    { name: 'Salário',      value: 5800, color: '#10b981', pct: 83 },
    { name: 'Freelance',    value: 1200, color: '#34d399', pct: 17 },
]);

const despesasCats = computed(() => [
    { name: 'Alimentação',  value: 780,  color: '#f97316', pct: 17 },
    { name: 'Moradia',      value: 1800, color: '#3b82f6', pct: 39 },
    { name: 'Transporte',   value: 320,  color: '#8b5cf6', pct: 7  },
    { name: 'Saúde',        value: 347,  color: '#ec4899', pct: 8  },
    { name: 'Lazer',        value: 240,  color: '#f59e0b', pct: 5  },
    { name: 'Outros',       value: 1080, color: '#6b7280', pct: 24 },
]);

// Histórico 6 meses para o gráfico de linha
const history = computed(() => {
    return Array.from({ length: 6 }, (_, i) => {
        const idx = (currentMonth.value - 1 - (5 - i) + 12) % 12;
        const seed = (idx + 1) * 17;
        return {
            month: MONTHS[idx].substring(0, 3),
            receita: 5500 + (seed % 2000),
            despesa: 3500 + (seed % 1500),
        };
    });
});

const maxH = computed(() => Math.max(...history.value.map(h => Math.max(h.receita, h.despesa)), 1));
function hPct(v) { return (v / maxH.value * 100).toFixed(1); }
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <Scale class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Receitas vs Despesas</h1>
                </div>
                <p class="text-sm text-gray-400">Comparativo de entradas e saídas — {{ monthLabel }}</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                    <button @click="navigate(-1)" class="p-0.5 rounded hover:bg-gray-100"><ChevronLeft class="w-4 h-4 text-gray-500" /></button>
                    <span class="text-sm font-bold text-gray-700 w-36 text-center capitalize">{{ monthLabel }}</span>
                    <button @click="navigate(1)" class="p-0.5 rounded hover:bg-gray-100"><ChevronRight class="w-4 h-4 text-gray-500" /></button>
                </div>
                <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-gray-600 rounded-xl shadow-sm hover:border-gray-300 transition-colors">
                    <Download class="w-4 h-4" /> Exportar
                </button>
            </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-2 mb-6 overflow-x-auto pb-1">
            <a href="/app/relatorios/mensal" class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Calendar class="w-4 h-4" /> Mensal
            </a>
            <a href="/app/relatorios/anual" class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <BarChart2 class="w-4 h-4" /> Anual
            </a>
            <a href="/app/relatorios/categorias" class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Layers class="w-4 h-4" /> Por Categoria
            </a>
            <a href="/app/relatorios/receitas-despesas" class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-xl whitespace-nowrap">
                <Scale class="w-4 h-4" /> Receitas vs Despesas
            </a>
        </div>

        <!-- Comparativo visual grande -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 class="text-sm font-bold text-gray-700 mb-5">Balanço do Mês</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <!-- Receitas -->
                <div class="text-center">
                    <div class="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                        <ArrowUpCircle class="w-8 h-8 text-emerald-500" />
                    </div>
                    <p class="text-xs font-bold text-gray-400 uppercase mb-1">Total de Receitas</p>
                    <p class="text-3xl font-extrabold text-emerald-600">{{ fmtMoney(totalReceitas) }}</p>
                    <p class="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
                        <TrendingUp class="w-3 h-3 text-emerald-400" /> +8.2% vs mês anterior
                    </p>
                </div>

                <!-- Saldo central -->
                <div class="text-center">
                    <div class="relative">
                        <!-- Barra de progresso circular simplificada -->
                        <div class="w-28 h-28 rounded-full mx-auto flex items-center justify-center relative"
                            :style="{ background: `conic-gradient(#10b981 ${pctEconomia}%, #fee2e2 0%)` }">
                            <div class="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center">
                                <p class="text-lg font-extrabold" :class="saldo >= 0 ? 'text-emerald-600' : 'text-red-500'">{{ pctEconomia }}%</p>
                                <p class="text-[9px] text-gray-400">economia</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm font-bold text-gray-700 mt-3">Saldo</p>
                    <p class="text-2xl font-extrabold mt-1" :class="saldo >= 0 ? 'text-emerald-600' : 'text-red-500'">
                        {{ fmtMoney(saldo) }}
                    </p>
                </div>

                <!-- Despesas -->
                <div class="text-center">
                    <div class="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-3">
                        <ArrowDownCircle class="w-8 h-8 text-red-400" />
                    </div>
                    <p class="text-xs font-bold text-gray-400 uppercase mb-1">Total de Despesas</p>
                    <p class="text-3xl font-extrabold text-red-500">{{ fmtMoney(totalDespesas) }}</p>
                    <p class="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
                        <TrendingDown class="w-3 h-3 text-emerald-400" /> −3.1% vs mês anterior
                    </p>
                </div>
            </div>

            <!-- Barra de progresso receita vs despesa -->
            <div class="mt-6 pt-4 border-t border-gray-50">
                <div class="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Despesas representam {{ (totalDespesas / totalReceitas * 100).toFixed(1) }}% da renda</span>
                    <span>{{ fmtMoney(totalReceitas - totalDespesas) }} disponível</span>
                </div>
                <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-700"
                        :style="{ width: Math.min(totalDespesas / totalReceitas * 100, 100) + '%' }"
                        :class="totalDespesas / totalReceitas > 0.8 ? 'bg-red-400' : totalDespesas / totalReceitas > 0.6 ? 'bg-amber-400' : 'bg-emerald-400'">
                    </div>
                </div>
            </div>
        </div>

        <!-- Gráfico histórico 6 meses -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 class="text-sm font-bold text-gray-700 mb-5">Histórico — Últimos 6 Meses</h2>
            <div class="flex items-end gap-4" style="height:150px">
                <div v-for="h in history" :key="h.month" class="flex-1 flex flex-col items-center gap-1 group">
                    <div class="flex items-end gap-1 w-full" style="height:120px">
                        <div :style="{ height: hPct(h.receita) + '%' }"
                            class="flex-1 bg-emerald-400 group-hover:bg-emerald-500 rounded-t-sm transition-colors"
                            :title="'Receita: ' + fmtMoney(h.receita)"></div>
                        <div :style="{ height: hPct(h.despesa) + '%' }"
                            class="flex-1 bg-red-400 group-hover:bg-red-500 rounded-t-sm transition-colors"
                            :title="'Despesa: ' + fmtMoney(h.despesa)"></div>
                    </div>
                    <span class="text-[10px] text-gray-400">{{ h.month }}</span>
                </div>
            </div>
        </div>

        <!-- Categorias lado a lado -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Receitas por categoria -->
            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center gap-2 mb-5">
                    <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <PiggyBank class="w-4 h-4 text-emerald-500" />
                    </div>
                    <h2 class="text-sm font-bold text-gray-700">Origens das Receitas</h2>
                </div>
                <div class="space-y-4">
                    <div v-for="cat in receitasCats" :key="cat.name">
                        <div class="flex items-center justify-between mb-1.5">
                            <div class="flex items-center gap-2">
                                <div class="w-2.5 h-2.5 rounded-full" :style="{ background: cat.color }"></div>
                                <span class="text-sm text-gray-700">{{ cat.name }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-bold text-emerald-600">{{ fmtMoney(cat.value) }}</span>
                                <span class="text-xs text-gray-400 w-8 text-right">{{ cat.pct }}%</span>
                            </div>
                        </div>
                        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full" :style="{ width: cat.pct + '%', background: cat.color }"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Despesas por categoria -->
            <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center gap-2 mb-5">
                    <div class="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center">
                        <Target class="w-4 h-4 text-red-400" />
                    </div>
                    <h2 class="text-sm font-bold text-gray-700">Distribuição das Despesas</h2>
                </div>
                <div class="space-y-3">
                    <div v-for="cat in despesasCats" :key="cat.name">
                        <div class="flex items-center justify-between mb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-2.5 h-2.5 rounded-full" :style="{ background: cat.color }"></div>
                                <span class="text-xs text-gray-700">{{ cat.name }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold text-red-500">{{ fmtMoney(cat.value) }}</span>
                                <span class="text-[10px] text-gray-400 w-7 text-right">{{ cat.pct }}%</span>
                            </div>
                        </div>
                        <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full" :style="{ width: cat.pct + '%', background: cat.color }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
