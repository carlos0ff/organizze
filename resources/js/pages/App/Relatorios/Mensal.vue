<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    ChevronLeft, ChevronRight, TrendingUp, TrendingDown,
    ArrowUpCircle, ArrowDownCircle, Download, BarChart2,
    Layers, Scale, Calendar, Wallet, PiggyBank,
} from 'lucide-vue-next';

// ── Navegação de mês ────────────────────────────────────────────
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const currentMonth = ref(new Date().getMonth() + 1);
const currentYear  = ref(new Date().getFullYear());
const monthLabel   = computed(() => `${MONTHS[currentMonth.value - 1]} ${currentYear.value}`);

function navigate(delta) {
    let m = currentMonth.value + delta, y = currentYear.value;
    if (m > 12) { m = 1;  y++; }
    if (m < 1)  { m = 12; y--; }
    currentMonth.value = m; currentYear.value = y;
}

function fmt(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ── Dados mock ──────────────────────────────────────────────────
const dailyData = computed(() => {
    const days = new Date(currentYear.value, currentMonth.value, 0).getDate();
    return Array.from({ length: days }, (_, i) => {
        const d   = i + 1;
        const s   = d * 7 + currentMonth.value * 13;
        const rec = d % 5 === 0 ? (s % 1200) + 300 : 0;
        const dep = (s % 350) + 30;
        return { day: d, receita: rec, despesa: dep };
    });
});

const totalReceitas = computed(() => dailyData.value.reduce((s, d) => s + d.receita, 0));
const totalDespesas = computed(() => dailyData.value.reduce((s, d) => s + d.despesa, 0));
const saldo         = computed(() => totalReceitas.value - totalDespesas.value);
const economia      = computed(() => totalReceitas.value > 0
    ? (saldo.value / totalReceitas.value * 100).toFixed(1) : '0.0');

const prevReceitas = computed(() => totalReceitas.value * 0.88);
const prevDespesas = computed(() => totalDespesas.value * 1.05);
const diffRec = computed(() => ((totalReceitas.value / prevReceitas.value - 1) * 100).toFixed(1));
const diffDep = computed(() => ((totalDespesas.value / prevDespesas.value - 1) * 100).toFixed(1));

const categories = computed(() => [
    { name: 'Alimentação', value: 780,  color: '#f97316', pct: 28 },
    { name: 'Moradia',     value: 650,  color: '#3b82f6', pct: 23 },
    { name: 'Transporte',  value: 320,  color: '#8b5cf6', pct: 11 },
    { name: 'Saúde',       value: 280,  color: '#ec4899', pct: 10 },
    { name: 'Lazer',       value: 240,  color: '#f59e0b', pct: 9  },
    { name: 'Educação',    value: 180,  color: '#10b981', pct: 6  },
    { name: 'Outros',      value: 350,  color: '#6b7280', pct: 13 },
]);

const topExpenses = [
    { desc: 'Aluguel',            cat: 'Moradia',     date: '01', val: 1800.00, color: '#3b82f6' },
    { desc: 'Supermercado Extra', cat: 'Alimentação', date: '05', val: 345.80,  color: '#f97316' },
    { desc: 'Conta de Luz',       cat: 'Moradia',     date: '08', val: 127.50,  color: '#3b82f6' },
    { desc: 'Plano de Saúde',     cat: 'Saúde',       date: '10', val: 220.00,  color: '#ec4899' },
    { desc: 'Netflix + Spotify',  cat: 'Lazer',       date: '12', val: 67.90,   color: '#f59e0b' },
    { desc: 'Farmácia',           cat: 'Saúde',       date: '14', val: 89.40,   color: '#ec4899' },
];

// ── Gráfico de linha SVG ─────────────────────────────────────────
const W = 600, H = 160, PAD = 10;

function buildLinePath(data, key, color) {
    const vals = data.map(d => d[key]);
    const max  = Math.max(...vals, 1);
    const pts  = data.map((d, i) => {
        const x = PAD + (i / (data.length - 1)) * (W - PAD * 2);
        const y = H - PAD - (d[key] / max) * (H - PAD * 2);
        return [x, y];
    });
    const line  = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    const area  = line + ` L${pts[pts.length-1][0].toFixed(1)},${(H-PAD)} L${PAD},${(H-PAD)} Z`;
    return { line, area, pts };
}

const recPath = computed(() => buildLinePath(dailyData.value, 'receita', '#10b981'));
const depPath = computed(() => buildLinePath(dailyData.value, 'despesa', '#ef4444'));

// ── Donut SVG ────────────────────────────────────────────────────
const DONUT_R = 54, DONUT_CX = 70, DONUT_CY = 70, DONUT_STROKE = 22;
const circumference = computed(() => 2 * Math.PI * DONUT_R);

const donutSegments = computed(() => {
    let offset = 0;
    return categories.value.map(cat => {
        const dash  = (cat.pct / 100) * circumference.value;
        const gap   = circumference.value - dash;
        const seg   = { ...cat, dash, gap, offset };
        offset += dash;
        return seg;
    });
});

// tooltip hover
const hoveredDay = ref(null);
const hoverX = ref(0), hoverY = ref(0);
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-14">

        <!-- ── Header ── -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <BarChart2 class="w-5 h-5 text-emerald-500" />
                    <h1 class="text-xl font-bold text-gray-800">Relatório Mensal</h1>
                </div>
                <p class="text-sm text-gray-400">Visão detalhada das suas finanças</p>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex items-center gap-1 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                    <button @click="navigate(-1)" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                        <ChevronLeft class="w-4 h-4 text-gray-500" />
                    </button>
                    <span class="text-sm font-semibold text-gray-700 w-40 text-center capitalize">{{ monthLabel }}</span>
                    <button @click="navigate(1)" class="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                        <ChevronRight class="w-4 h-4 text-gray-500" />
                    </button>
                </div>
                <button class="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-emerald-600 transition-colors">
                    <Download class="w-4 h-4" /> Exportar
                </button>
            </div>
        </div>

        <!-- ── Tabs ── -->
        <div class="flex gap-2 mb-7 overflow-x-auto pb-1">
            <a href="/app/relatorios/mensal"
                class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-emerald-500 text-white rounded-xl whitespace-nowrap shadow-sm">
                <Calendar class="w-4 h-4" /> Mensal
            </a>
            <a v-for="tab in [
                { href: '/app/relatorios/anual',            label: 'Anual',              icon: BarChart2 },
                { href: '/app/relatorios/categorias',       label: 'Por Categoria',      icon: Layers    },
                { href: '/app/relatorios/receitas-despesas',label: 'Receitas vs Despesas',icon: Scale     },
            ]" :key="tab.href" :href="tab.href"
                class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-white border border-gray-200 text-gray-600 rounded-xl hover:border-emerald-300 hover:text-emerald-600 transition-colors whitespace-nowrap">
                <component :is="tab.icon" class="w-4 h-4" /> {{ tab.label }}
            </a>
        </div>

        <!-- ── Cards de resumo ── -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

            <!-- Receitas -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <ArrowUpCircle class="w-5 h-5 text-emerald-500" />
                    </div>
                    <span class="flex items-center gap-0.5 text-xs font-bold"
                        :class="+diffRec >= 0 ? 'text-emerald-500' : 'text-red-500'">
                        <TrendingUp v-if="+diffRec >= 0" class="w-3.5 h-3.5" />
                        <TrendingDown v-else class="w-3.5 h-3.5" />
                        {{ Math.abs(diffRec) }}%
                    </span>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Receitas</p>
                <p class="text-xl font-extrabold text-emerald-600">{{ fmt(totalReceitas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">vs {{ fmt(prevReceitas) }} mês anterior</p>
            </div>

            <!-- Despesas -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                        <ArrowDownCircle class="w-5 h-5 text-red-400" />
                    </div>
                    <span class="flex items-center gap-0.5 text-xs font-bold"
                        :class="+diffDep <= 0 ? 'text-emerald-500' : 'text-red-500'">
                        <TrendingDown v-if="+diffDep <= 0" class="w-3.5 h-3.5" />
                        <TrendingUp v-else class="w-3.5 h-3.5" />
                        {{ Math.abs(diffDep) }}%
                    </span>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Despesas</p>
                <p class="text-xl font-extrabold text-red-500">{{ fmt(totalDespesas) }}</p>
                <p class="text-[10px] text-gray-300 mt-1">vs {{ fmt(prevDespesas) }} mês anterior</p>
            </div>

            <!-- Saldo -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                        :class="saldo >= 0 ? 'bg-blue-50' : 'bg-red-50'">
                        <Wallet class="w-5 h-5" :class="saldo >= 0 ? 'text-blue-500' : 'text-red-400'" />
                    </div>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Saldo do Mês</p>
                <p class="text-xl font-extrabold" :class="saldo >= 0 ? 'text-blue-600' : 'text-red-500'">
                    {{ fmt(saldo) }}
                </p>
                <p class="text-[10px] mt-1" :class="saldo >= 0 ? 'text-emerald-400' : 'text-red-300'">
                    {{ saldo >= 0 ? '🎉 Você ficou no azul!' : 'Gastos acima da renda' }}
                </p>
            </div>

            <!-- Taxa de economia -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div class="flex items-center justify-between mb-3">
                    <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                        <PiggyBank class="w-5 h-5 text-purple-500" />
                    </div>
                </div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1">Taxa de Economia</p>
                <p class="text-xl font-extrabold text-purple-600">{{ economia }}%</p>
                <div class="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-purple-400 rounded-full transition-all duration-700"
                        :style="{ width: Math.max(0, Math.min(100, +economia)) + '%' }"></div>
                </div>
            </div>
        </div>

        <!-- ── Linha + Donut ── -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

            <!-- Gráfico de linha SVG -->
            <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <h2 class="text-sm font-bold text-gray-800">Evolução Diária</h2>
                        <p class="text-xs text-gray-400 mt-0.5">Receitas e despesas ao longo do mês</p>
                    </div>
                    <div class="flex items-center gap-4 text-xs text-gray-500">
                        <span class="flex items-center gap-1.5">
                            <span class="w-3 h-1 rounded-full bg-emerald-500 inline-block"></span> Receitas
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="w-3 h-1 rounded-full bg-red-400 inline-block"></span> Despesas
                        </span>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <svg :viewBox="`0 0 ${W} ${H}`" class="w-full" style="min-width:320px;height:160px"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="recGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%"   stop-color="#10b981" stop-opacity="0.25"/>
                                <stop offset="100%" stop-color="#10b981" stop-opacity="0.02"/>
                            </linearGradient>
                            <linearGradient id="depGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%"   stop-color="#ef4444" stop-opacity="0.18"/>
                                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.02"/>
                            </linearGradient>
                        </defs>

                        <!-- Linhas de grade -->
                        <line v-for="i in 4" :key="i"
                            :x1="PAD" :y1="PAD + (i-1) * ((H - PAD*2)/3)"
                            :x2="W - PAD" :y2="PAD + (i-1) * ((H - PAD*2)/3)"
                            stroke="#f3f4f6" stroke-width="1" />

                        <!-- Área receitas -->
                        <path :d="recPath.area" fill="url(#recGrad)" />
                        <!-- Área despesas -->
                        <path :d="depPath.area" fill="url(#depGrad)" />

                        <!-- Linha receitas -->
                        <path :d="recPath.line" fill="none" stroke="#10b981" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <!-- Linha despesas -->
                        <path :d="depPath.line" fill="none" stroke="#ef4444" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            stroke-dasharray="4 2" />

                        <!-- Pontos interativos receita -->
                        <circle v-for="(pt, i) in recPath.pts" :key="'r'+i"
                            :cx="pt[0]" :cy="pt[1]" r="3"
                            fill="#10b981" stroke="white" stroke-width="1.5"
                            class="cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                            @mouseenter="hoveredDay = dailyData[i]; hoverX = pt[0]; hoverY = pt[1]"
                            @mouseleave="hoveredDay = null" />

                        <!-- Labels eixo X (a cada 5 dias) -->
                        <text v-for="d in dailyData.filter((_,i) => i % 4 === 0)" :key="'l'+d.day"
                            :x="PAD + ((d.day-1) / (dailyData.length - 1)) * (W - PAD*2)"
                            :y="H - 1"
                            text-anchor="middle" font-size="8" fill="#9ca3af">
                            {{ d.day }}
                        </text>
                    </svg>
                </div>

                <!-- Legenda resumida -->
                <div class="mt-4 grid grid-cols-3 gap-2">
                    <div v-for="s in [
                        { label: 'Total receitas', val: totalReceitas, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                        { label: 'Total despesas', val: totalDespesas, color: 'text-red-500',     bg: 'bg-red-50'     },
                        { label: 'Saldo líquido',  val: saldo,         color: saldo>=0?'text-blue-600':'text-red-500', bg: saldo>=0?'bg-blue-50':'bg-red-50' },
                    ]" :key="s.label"
                        class="rounded-xl p-3 text-center" :class="s.bg">
                        <p class="text-[10px] text-gray-400 mb-1">{{ s.label }}</p>
                        <p class="text-sm font-extrabold" :class="s.color">{{ fmt(s.val) }}</p>
                    </div>
                </div>
            </div>

            <!-- Donut + categorias -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 class="text-sm font-bold text-gray-800 mb-1">Despesas por Categoria</h2>
                <p class="text-xs text-gray-400 mb-4">{{ monthLabel }}</p>

                <!-- Donut SVG -->
                <div class="flex justify-center mb-5">
                    <svg width="140" height="140" viewBox="0 0 140 140">
                        <circle cx="70" cy="70" :r="DONUT_R"
                            fill="none" stroke="#f3f4f6" :stroke-width="DONUT_STROKE" />

                        <circle v-for="(seg, i) in donutSegments" :key="i"
                            cx="70" cy="70" :r="DONUT_R"
                            fill="none"
                            :stroke="seg.color"
                            :stroke-width="DONUT_STROKE"
                            :stroke-dasharray="`${seg.dash} ${seg.gap}`"
                            :stroke-dashoffset="-seg.offset + circumference * 0.25"
                            stroke-linecap="butt"
                            class="transition-all duration-300 hover:opacity-80 cursor-pointer"
                        />

                        <!-- Rótulo central -->
                        <text x="70" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1f2937">
                            {{ fmt(totalDespesas).replace('R$\xa0','R$ ') }}
                        </text>
                        <text x="70" y="80" text-anchor="middle" font-size="8" fill="#9ca3af">total</text>
                    </svg>
                </div>

                <!-- Lista de categorias -->
                <div class="space-y-2.5">
                    <div v-for="cat in categories" :key="cat.name" class="flex items-center gap-2">
                        <div class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ background: cat.color }"></div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between mb-0.5">
                                <span class="text-xs text-gray-700 truncate">{{ cat.name }}</span>
                                <span class="text-xs font-bold text-gray-600 ml-2 shrink-0">{{ cat.pct }}%</span>
                            </div>
                            <div class="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-700"
                                    :style="{ width: cat.pct + '%', background: cat.color }"></div>
                            </div>
                        </div>
                        <span class="text-[10px] font-semibold text-gray-400 shrink-0 w-14 text-right">
                            {{ fmt(cat.value) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── Barra de fluxo de caixa ── -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-sm font-bold text-gray-800">Fluxo de Caixa</h2>
                    <p class="text-xs text-gray-400 mt-0.5">Balanço entre receitas e despesas</p>
                </div>
                <span class="text-sm font-extrabold px-3 py-1 rounded-xl"
                    :class="saldo >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'">
                    {{ saldo >= 0 ? '+' : '' }}{{ fmt(saldo) }}
                </span>
            </div>

            <div class="space-y-3">
                <div>
                    <div class="flex items-center justify-between text-xs mb-1">
                        <span class="flex items-center gap-1.5 text-gray-500 font-medium">
                            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Receitas
                        </span>
                        <span class="font-bold text-emerald-600">{{ fmt(totalReceitas) }}</span>
                    </div>
                    <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-700"
                            :style="{ width: '100%' }"></div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between text-xs mb-1">
                        <span class="flex items-center gap-1.5 text-gray-500 font-medium">
                            <span class="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span> Despesas
                        </span>
                        <span class="font-bold text-red-500">{{ fmt(totalDespesas) }}</span>
                    </div>
                    <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-700"
                            :style="{ width: totalReceitas > 0 ? (totalDespesas / totalReceitas * 100).toFixed(1) + '%' : '0%' }"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ── Top Despesas ── -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h2 class="text-sm font-bold text-gray-800">Top Despesas do Mês</h2>
                    <p class="text-xs text-gray-400 mt-0.5">{{ topExpenses.length }} maiores lançamentos</p>
                </div>
                <button class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                    Ver todos →
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="bg-gray-50/80">
                            <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Descrição</th>
                            <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Categoria</th>
                            <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Data</th>
                            <th class="text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Valor</th>
                            <th class="px-6 py-3 w-24"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                        <tr v-for="row in topExpenses" :key="row.desc"
                            class="hover:bg-gray-50 transition-colors group">
                            <td class="px-6 py-3.5 text-sm font-semibold text-gray-800">{{ row.desc }}</td>
                            <td class="px-6 py-3.5">
                                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                    <span class="w-1.5 h-1.5 rounded-full" :style="{ background: row.color }"></span>
                                    {{ row.cat }}
                                </span>
                            </td>
                            <td class="px-6 py-3.5 text-xs text-gray-400">{{ row.date }}/{{ String(currentMonth).padStart(2,'0') }}</td>
                            <td class="px-6 py-3.5 text-right">
                                <span class="text-sm font-extrabold text-red-500">−{{ fmt(row.val) }}</span>
                            </td>
                            <td class="px-6 py-3.5">
                                <!-- mini barra proporcional -->
                                <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-700"
                                        :style="{ width: (row.val / topExpenses[0].val * 100).toFixed(0) + '%', background: row.color }">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </main>
</template>
