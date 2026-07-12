<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import Footer from '@/Components/layout/Footer.vue';
import {
    ChevronLeft, ChevronRight, Download, TrendingUp, TrendingDown,
    ArrowUpCircle, ArrowDownCircle, BarChart2, Calendar, Scale,
    Award, AlertTriangle, Layers,
} from 'lucide-vue-next';

const currentYear = ref(new Date().getFullYear());
const MONTHS_SHORT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const MONTHS_FULL  = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const monthlyData = computed(() => {
    return MONTHS_SHORT.map((m, i) => {
        const seed = (i + 1) * 17 + currentYear.value % 100;
        const receita = 4000 + (seed % 3000);
        const despesa = 2500 + (seed % 2500);
        return { month: m, full: MONTHS_FULL[i], receita, despesa, saldo: receita - despesa };
    });
});

const totalReceitas = computed(() => monthlyData.value.reduce((s, m) => s + m.receita, 0));
const totalDespesas = computed(() => monthlyData.value.reduce((s, m) => s + m.despesa, 0));
const totalSaldo    = computed(() => totalReceitas.value - totalDespesas.value);
const mediaMensal   = computed(() => totalDespesas.value / 12);

const bestMonth  = computed(() => [...monthlyData.value].sort((a, b) => b.saldo - a.saldo)[0]);
const worstMonth = computed(() => [...monthlyData.value].sort((a, b) => a.saldo - b.saldo)[0]);

const maxVal = computed(() => Math.max(...monthlyData.value.map(m => Math.max(m.receita, m.despesa)), 1));
function barH(v) { return Math.round((v / maxVal.value) * 120); }
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <BarChart2 class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Relatório Anual</h1>
                </div>
                <p class="text-sm text-gray-400">Visão consolidada de {{ currentYear }}</p>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                    <button @click="currentYear--" class="p-0.5 rounded hover:bg-gray-100">
                        <ChevronLeft class="w-4 h-4 text-gray-500" />
                    </button>
                    <span class="text-sm font-bold text-gray-700 w-16 text-center">{{ currentYear }}</span>
                    <button @click="currentYear++" class="p-0.5 rounded hover:bg-gray-100">
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
                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-xl whitespace-nowrap">
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

        <!-- Cards resumo anual -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                    <ArrowUpCircle class="w-5 h-5 text-emerald-500" />
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Total Receitas</p>
                <p class="text-xl font-extrabold text-emerald-600">{{ fmtMoney(totalReceitas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">média {{ fmtMoney(totalReceitas / 12) }}/mês</p>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                    <ArrowDownCircle class="w-5 h-5 text-red-400" />
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Total Despesas</p>
                <p class="text-xl font-extrabold text-red-500">{{ fmtMoney(totalDespesas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">média {{ fmtMoney(mediaMensal) }}/mês</p>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" :class="totalSaldo >= 0 ? 'bg-emerald-50' : 'bg-red-50'">
                    <TrendingUp v-if="totalSaldo >= 0" class="w-5 h-5 text-emerald-500" />
                    <TrendingDown v-else class="w-5 h-5 text-red-400" />
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Saldo Anual</p>
                <p class="text-xl font-extrabold" :class="totalSaldo >= 0 ? 'text-emerald-600' : 'text-red-500'">{{ fmtMoney(totalSaldo) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">{{ totalSaldo >= 0 ? 'Ano positivo!' : 'Atenção ao orçamento' }}</p>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-5">
                <div class="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    <Award class="w-5 h-5 text-blue-500" />
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Melhor Mês</p>
                <p class="text-xl font-extrabold text-blue-600">{{ bestMonth?.month }}</p>
                <p class="text-[10px] text-gray-300 mt-1">saldo de {{ fmtMoney(bestMonth?.saldo ?? 0) }}</p>
            </div>
        </div>

        <!-- Gráfico de barras anual -->
        <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div class="flex items-center justify-between mb-5">
                <h2 class="text-sm font-bold text-gray-700">Receitas vs Despesas por Mês</h2>
                <div class="flex items-center gap-4 text-xs text-gray-400">
                    <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block"></span> Receitas</span>
                    <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-red-400 inline-block"></span> Despesas</span>
                </div>
            </div>

            <div class="flex items-end gap-2" style="height:160px">
                <div v-for="m in monthlyData" :key="m.month"
                    class="flex-1 flex flex-col items-center gap-0.5 group cursor-pointer">
                    <div class="flex items-end gap-0.5 w-full" style="height:130px">
                        <div :style="{ height: barH(m.receita) + 'px' }"
                            class="flex-1 rounded-t-sm bg-emerald-400 group-hover:bg-emerald-500 transition-all duration-300 relative"
                            :title="m.full + ': ' + fmtMoney(m.receita)">
                        </div>
                        <div :style="{ height: barH(m.despesa) + 'px' }"
                            class="flex-1 rounded-t-sm bg-red-400 group-hover:bg-red-500 transition-all duration-300"
                            :title="m.full + ': ' + fmtMoney(m.despesa)">
                        </div>
                    </div>
                    <span class="text-[9px] text-gray-400 font-medium">{{ m.month }}</span>
                </div>
            </div>

            <!-- Linha de saldo -->
            <div class="mt-4 pt-4 border-t border-gray-50">
                <p class="text-xs font-bold text-gray-500 mb-2">Saldo mensal</p>
                <div class="flex gap-2">
                    <div v-for="m in monthlyData" :key="m.month" class="flex-1 text-center">
                        <div class="h-1 rounded-full mx-auto w-full"
                            :class="m.saldo >= 0 ? 'bg-emerald-300' : 'bg-red-300'"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabela mensal detalhada -->
        <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-sm font-bold text-gray-700 mb-4">Detalhamento por Mês</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-gray-100">
                            <th class="text-left text-xs font-bold text-gray-400 pb-3">Mês</th>
                            <th class="text-right text-xs font-bold text-gray-400 pb-3">Receitas</th>
                            <th class="text-right text-xs font-bold text-gray-400 pb-3">Despesas</th>
                            <th class="text-right text-xs font-bold text-gray-400 pb-3">Saldo</th>
                            <th class="text-right text-xs font-bold text-gray-400 pb-3">Economia</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                        <tr v-for="m in monthlyData" :key="m.month"
                            class="hover:bg-gray-50 transition-colors"
                            :class="m.month === MONTHS_SHORT[new Date().getMonth()] ? 'bg-emerald-50/50' : ''">
                            <td class="py-3 font-semibold text-gray-800 flex items-center gap-2">
                                <span v-if="m.month === bestMonth.month" title="Melhor mês">
                                    <Award class="w-3.5 h-3.5 text-amber-400" />
                                </span>
                                <span v-else-if="m.month === worstMonth.month" title="Pior mês">
                                    <AlertTriangle class="w-3.5 h-3.5 text-red-300" />
                                </span>
                                <span v-else class="w-3.5"></span>
                                {{ m.full }}
                            </td>
                            <td class="py-3 text-right text-emerald-600 font-medium">{{ fmtMoney(m.receita) }}</td>
                            <td class="py-3 text-right text-red-500 font-medium">{{ fmtMoney(m.despesa) }}</td>
                            <td class="py-3 text-right font-bold" :class="m.saldo >= 0 ? 'text-emerald-600' : 'text-red-500'">
                                {{ fmtMoney(m.saldo) }}
                            </td>
                            <td class="py-3 text-right">
                                <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                                    :class="m.saldo >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'">
                                    {{ m.receita > 0 ? (m.saldo / m.receita * 100).toFixed(1) : '0' }}%
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="border-t-2 border-gray-200">
                        <tr class="font-bold">
                            <td class="pt-3 text-gray-800">Total</td>
                            <td class="pt-3 text-right text-emerald-600">{{ fmtMoney(totalReceitas) }}</td>
                            <td class="pt-3 text-right text-red-500">{{ fmtMoney(totalDespesas) }}</td>
                            <td class="pt-3 text-right" :class="totalSaldo >= 0 ? 'text-emerald-600' : 'text-red-500'">{{ fmtMoney(totalSaldo) }}</td>
                            <td class="pt-3 text-right text-gray-500">{{ (totalSaldo / totalReceitas * 100).toFixed(1) }}%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <Footer />
    </main>
</template>
