<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    ChevronLeft, ChevronRight, TrendingUp, TrendingDown,
    ArrowUpCircle, ArrowDownCircle, Download, BarChart2,
    Layers, Scale, Calendar,
} from 'lucide-vue-next';


const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const currentMonth = ref(new Date().getMonth() + 1);
const currentYear  = ref(new Date().getFullYear());
const monthLabel   = computed(() => `${MONTHS[currentMonth.value - 1]} ${currentYear.value}`);

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

// ── Dados Mock ────────────────────────────────────────────────
const dailyData = computed(() => {
    const days = new Date(currentYear.value, currentMonth.value, 0).getDate();
    return Array.from({ length: days }, (_, i) => {
        const day = i + 1;
        const seed = day * 7 + currentMonth.value * 13;
        const rec = day % 5 === 0 ? (seed % 800) + 200 : 0;
        const dep = (seed % 300) + 20;
        return { day, receita: rec, despesa: dep };
    });
});

const totalReceitas = computed(() => dailyData.value.reduce((s, d) => s + d.receita, 0));
const totalDespesas = computed(() => dailyData.value.reduce((s, d) => s + d.despesa, 0));
const saldo         = computed(() => totalReceitas.value - totalDespesas.value);
const economia      = computed(() => totalReceitas.value > 0 ? (saldo.value / totalReceitas.value * 100).toFixed(1) : 0);

const prevReceitas = computed(() => totalReceitas.value * 0.88);
const prevDespesas = computed(() => totalDespesas.value * 1.05);
const diffReceitas = computed(() => ((totalReceitas.value - prevReceitas.value) / prevReceitas.value * 100).toFixed(1));
const diffDespesas = computed(() => ((totalDespesas.value - prevDespesas.value) / prevDespesas.value * 100).toFixed(1));

const categories = computed(() => [
    { name: 'Alimentação', value: 780,  color: '#f97316', pct: 28 },
    { name: 'Moradia',     value: 650,  color: '#3b82f6', pct: 23 },
    { name: 'Transporte',  value: 320,  color: '#8b5cf6', pct: 11 },
    { name: 'Saúde',       value: 280,  color: '#ec4899', pct: 10 },
    { name: 'Lazer',       value: 240,  color: '#f59e0b', pct: 9  },
    { name: 'Educação',    value: 180,  color: '#10b981', pct: 6  },
    { name: 'Outros',      value: 350,  color: '#6b7280', pct: 13 },
]);

// Altura máxima relativa para o gráfico de barras
const maxBar = computed(() => Math.max(...dailyData.value.map(d => Math.max(d.receita, d.despesa)), 1));
function barH(val) { return Math.round((val / maxBar.value) * 100); }

// Mostrar apenas dias com movimento no gráfico (todos os dias)
const chartDays = computed(() => dailyData.value.filter((_, i) => i % 2 === 0)); // a cada 2 dias p/ não poluir
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <BarChart2 class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Relatório Mensal</h1>
                </div>
                <p class="text-sm text-gray-400">Visão detalhada das suas finanças no mês</p>
            </div>

            <div class="flex items-center gap-3">
                <!-- Navegação de mês -->
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                    <button @click="navigate(-1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                        <ChevronLeft class="w-4 h-4 text-gray-500" />
                    </button>
                    <span class="text-sm font-semibold text-gray-700 w-36 text-center capitalize">{{ monthLabel }}</span>
                    <button @click="navigate(1)" class="p-0.5 rounded hover:bg-gray-100 transition-colors">
                        <ChevronRight class="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-gray-600 rounded-xl shadow-sm hover:border-gray-300 transition-colors">
                    <Download class="w-4 h-4" /> Exportar
                </button>
            </div>
        </div>

        <!-- Tabs de navegação entre relatórios -->
        <div class="flex gap-2 mb-6 overflow-x-auto pb-1">
            <a href="/app/relatorios/mensal"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-xl whitespace-nowrap">
                <Calendar class="w-4 h-4" /> Mensal
            </a>
            <a href="/app/relatorios/anual"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <BarChart2 class="w-4 h-4" /> Anual
            </a>
            <a href="/app/relatorios/categorias"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Layers class="w-4 h-4" /> Por Categoria
            </a>
            <a href="/app/relatorios/receitas-despesas"
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 transition-colors whitespace-nowrap">
                <Scale class="w-4 h-4" /> Receitas vs Despesas
            </a>
        </div>

        <!-- Cards de resumo -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <ArrowUpCircle class="w-5 h-5 text-emerald-500" />
                    </div>
                    <span class="text-xs font-bold flex items-center gap-0.5" :class="+diffReceitas >= 0 ? 'text-emerald-500' : 'text-red-500'">
                        <TrendingUp v-if="+diffReceitas >= 0" class="w-3 h-3" />
                        <TrendingDown v-else class="w-3 h-3" />
                        {{ Math.abs(diffReceitas) }}%
                    </span>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Receitas</p>
                <p class="text-xl font-extrabold text-emerald-600">{{ fmtMoney(totalReceitas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">vs {{ fmtMoney(prevReceitas) }} mês anterior</p>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                        <ArrowDownCircle class="w-5 h-5 text-red-400" />
                    </div>
                    <span class="text-xs font-bold flex items-center gap-0.5" :class="+diffDespesas <= 0 ? 'text-emerald-500' : 'text-red-500'">
                        <TrendingDown v-if="+diffDespesas <= 0" class="w-3 h-3" />
                        <TrendingUp v-else class="w-3 h-3" />
                        {{ Math.abs(diffDespesas) }}%
                    </span>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Despesas</p>
                <p class="text-xl font-extrabold text-red-500">{{ fmtMoney(totalDespesas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">vs {{ fmtMoney(prevDespesas) }} mês anterior</p>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center" :class="saldo >= 0 ? 'bg-emerald-50' : 'bg-red-50'">
                        <span class="text-base font-black" :class="saldo >= 0 ? 'text-emerald-500' : 'text-red-400'">Σ</span>
                    </div>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Saldo do Mês</p>
                <p class="text-xl font-extrabold" :class="saldo >= 0 ? 'text-emerald-600' : 'text-red-500'">{{ fmtMoney(saldo) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">{{ saldo >= 0 ? 'Você ficou no azul!' : 'Gastos acima da renda' }}</p>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                        <TrendingUp class="w-5 h-5 text-blue-500" />
                    </div>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Taxa de Economia</p>
                <p class="text-xl font-extrabold text-blue-600">{{ economia }}%</p>
                <p class="text-[10px] text-gray-300 mt-1">da renda economizada</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Gráfico de barras diário -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center justify-between mb-5">
                    <h2 class="text-sm font-bold text-gray-700">Evolução Diária</h2>
                    <div class="flex items-center gap-4 text-xs text-gray-400">
                        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block"></span> Receitas</span>
                        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-red-400 inline-block"></span> Despesas</span>
                    </div>
                </div>

                <!-- Gráfico SVG -->
                <div class="overflow-x-auto">
                    <div class="flex items-end gap-1 min-w-max" style="height:140px">
                        <div v-for="d in dailyData" :key="d.day" class="flex flex-col items-center gap-0.5 group" style="width:18px">
                            <div class="flex items-end gap-0.5 h-24">
                                <div :style="{ height: barH(d.receita) + '%' }"
                                    class="w-2 rounded-t bg-emerald-400 group-hover:bg-emerald-500 transition-colors min-h-0"
                                    :title="'Receita: ' + fmtMoney(d.receita)"></div>
                                <div :style="{ height: barH(d.despesa) + '%' }"
                                    class="w-2 rounded-t bg-red-400 group-hover:bg-red-500 transition-colors min-h-0"
                                    :title="'Despesa: ' + fmtMoney(d.despesa)"></div>
                            </div>
                            <span class="text-[8px] text-gray-300">{{ d.day }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categorias -->
            <div class="bg-white rounded-xl shadow-sm p-6">
                <h2 class="text-sm font-bold text-gray-700 mb-5">Despesas por Categoria</h2>
                <div class="space-y-3">
                    <div v-for="cat in categories" :key="cat.name">
                        <div class="flex items-center justify-between mb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-2.5 h-2.5 rounded-full" :style="{ background: cat.color }"></div>
                                <span class="text-xs text-gray-700">{{ cat.name }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold text-gray-600">{{ fmtMoney(cat.value) }}</span>
                                <span class="text-[10px] text-gray-400">{{ cat.pct }}%</span>
                            </div>
                        </div>
                        <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-700"
                                :style="{ width: cat.pct + '%', background: cat.color }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabela top gastos -->
        <div class="mt-6 bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-sm font-bold text-gray-700 mb-4">Top Despesas do Mês</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-gray-100">
                            <th class="text-left text-xs font-bold text-gray-400 pb-3">Descrição</th>
                            <th class="text-left text-xs font-bold text-gray-400 pb-3">Categoria</th>
                            <th class="text-left text-xs font-bold text-gray-400 pb-3">Data</th>
                            <th class="text-right text-xs font-bold text-gray-400 pb-3">Valor</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                        <tr v-for="row in [
                            { desc: 'Supermercado Extra', cat: 'Alimentação', date: '05/06', val: 245.80 },
                            { desc: 'Aluguel',            cat: 'Moradia',     date: '01/06', val: 1800.00 },
                            { desc: 'Conta de luz',       cat: 'Moradia',     date: '05/06', val: 127.50 },
                            { desc: 'Farmácia',           cat: 'Saúde',       date: '01/06', val: 67.40 },
                            { desc: 'Uber',               cat: 'Transporte',  date: '04/06', val: 35.90 },
                        ]" :key="row.desc" class="hover:bg-gray-50 transition-colors">
                            <td class="py-3 font-medium text-gray-800">{{ row.desc }}</td>
                            <td class="py-3 text-gray-400 text-xs">{{ row.cat }}</td>
                            <td class="py-3 text-gray-400 text-xs">{{ row.date }}</td>
                            <td class="py-3 text-right font-bold text-red-500">−{{ fmtMoney(row.val) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
