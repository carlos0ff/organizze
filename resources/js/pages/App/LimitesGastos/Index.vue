<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import Navbar from '@/Componentes/Layout/Navbar.vue';
import {
    Plus, X, Pencil, Trash2, ChevronLeft, ChevronRight,
    ShoppingCart, Car, Utensils, Home, Wifi, HeartPulse,
    GraduationCap, TvMinimalPlay, TreePalm, Gift, Gamepad2,
    Briefcase, Tag, AlertTriangle, CheckCircle2, TrendingUp,
} from 'lucide-vue-next';

// ==================== PROPS ====================
const props = defineProps({
    limits:  { type: Array,  default: () => [] },
    filters: { type: Object, default: () => ({}) },
});

// ==================== ÍCONES DISPONÍVEIS ====================
const ICONS = {
    shopping:   ShoppingCart,
    car:        Car,
    food:       Utensils,
    home:       Home,
    wifi:       Wifi,
    health:     HeartPulse,
    education:  GraduationCap,
    streaming:  TvMinimalPlay,
    leisure:    TreePalm,
    gifts:      Gift,
    games:      Gamepad2,
    work:       Briefcase,
    tag:        Tag,
};

const COLORS = {
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', bar: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700' },
    blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',    bar: 'bg-blue-500',    badge: 'bg-blue-100 text-blue-700' },
    orange:  { bg: 'bg-orange-50',  text: 'text-orange-600',  bar: 'bg-orange-500',  badge: 'bg-orange-100 text-orange-700' },
    purple:  { bg: 'bg-purple-50',  text: 'text-purple-600',  bar: 'bg-purple-500',  badge: 'bg-purple-100 text-purple-700' },
    red:     { bg: 'bg-red-50',     text: 'text-red-600',     bar: 'bg-red-500',     badge: 'bg-red-100 text-red-700' },
    indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  bar: 'bg-indigo-500',  badge: 'bg-indigo-100 text-indigo-700' },
    pink:    { bg: 'bg-pink-50',    text: 'text-pink-600',    bar: 'bg-pink-500',    badge: 'bg-pink-100 text-pink-700' },
    cyan:    { bg: 'bg-cyan-50',    text: 'text-cyan-600',    bar: 'bg-cyan-500',    badge: 'bg-cyan-100 text-cyan-700' },
};

function colorOf(c) { return COLORS[c] ?? COLORS.emerald; }
function iconOf(i)  { return ICONS[i] ?? ICONS.tag; }

// ==================== NAVEGAÇÃO DE MÊS ====================
const MONTHS = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
];

const currentMonth = ref(props.filters.month ?? new Date().getMonth() + 1);
const currentYear  = ref(props.filters.year  ?? new Date().getFullYear());
const monthLabel   = computed(() => `${MONTHS[currentMonth.value - 1]} ${currentYear.value}`);

function navigate(delta) {
    let m = currentMonth.value + delta;
    let y = currentYear.value;
    if (m > 12) { m = 1;  y++; }
    if (m < 1)  { m = 12; y--; }
    currentMonth.value = m;
    currentYear.value  = y;
    router.get(route('app.limites-gastos'), { month: m, year: y }, { preserveState: true, replace: true });
}

// ==================== COMPUTED ====================
const totalLimit = computed(() => props.limits.reduce((s, l) => s + parseFloat(l.limit_amount), 0));
const totalSpent = computed(() => props.limits.reduce((s, l) => s + l.spent, 0));
const overallPct = computed(() => totalLimit.value > 0 ? Math.min(100, (totalSpent.value / totalLimit.value) * 100) : 0);

function pct(limit) {
    return limit.limit_amount > 0
        ? Math.min(100, (limit.spent / parseFloat(limit.limit_amount)) * 100)
        : 0;
}
function statusOf(p) {
    if (p >= 100) return 'over';
    if (p >= 80)  return 'warning';
    return 'ok';
}

function fmtMoney(v) {
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==================== MODAL ====================
const showModal = ref(false);
const editingId = ref(null);
const form = ref({ category: '', limit_amount: '', icon: 'tag', color: 'emerald' });

function openCreate() {
    editingId.value = null;
    form.value = { category: '', limit_amount: '', icon: 'tag', color: 'emerald' };
    showModal.value = true;
}

function openEdit(limit) {
    editingId.value = limit.id;
    form.value = { category: limit.category, limit_amount: limit.limit_amount, icon: limit.icon, color: limit.color };
    showModal.value = true;
}

function closeModal() { showModal.value = false; }

async function submitForm() {
    const url    = editingId.value ? `/api/spending-limits/${editingId.value}` : '/api/spending-limits';
    const method = editingId.value ? 'PUT' : 'POST';
    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
        body: JSON.stringify(form.value),
    });
    if (res.ok) { closeModal(); router.reload({ only: ['limits'] }); }
}

async function deleteLimit(id) {
    if (!confirm('Remover este limite?')) return;
    await fetch(`/api/spending-limits/${id}`, {
        method: 'DELETE',
        headers: { 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
    });
    router.reload({ only: ['limits'] });
}

function getCookie(name) {
    return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] ?? '';
}
</script>

<template>
    <Navbar />

    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">

        <!-- Cabeçalho -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <h1 class="text-xl font-bold text-gray-800">Limites de Gastos</h1>
                <p class="text-xs text-gray-400 mt-0.5">Defina quanto quer gastar por categoria</p>
            </div>
            <div class="flex items-center gap-3">
                <!-- Navegação de mês -->
                <div class="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1.5">
                    <button @click="navigate(-1)" class="p-1 rounded hover:bg-gray-100 transition-colors">
                        <ChevronLeft class="w-4 h-4 text-gray-500" />
                    </button>
                    <span class="text-sm font-semibold text-gray-700 w-40 text-center capitalize">{{ monthLabel }}</span>
                    <button @click="navigate(1)" class="p-1 rounded hover:bg-gray-100 transition-colors">
                        <ChevronRight class="w-4 h-4 text-gray-500" />
                    </button>
                </div>
                <button @click="openCreate" class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                    <Plus class="w-4 h-4" /> Novo Limite
                </button>
            </div>
        </div>

        <!-- Resumo geral -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div class="flex items-center gap-4">
                    <div>
                        <p class="text-xs font-bold text-gray-400 uppercase">Gasto total</p>
                        <p class="text-2xl font-black text-gray-800">{{ fmtMoney(totalSpent) }}</p>
                    </div>
                    <div class="w-px h-10 bg-gray-100"></div>
                    <div>
                        <p class="text-xs font-bold text-gray-400 uppercase">Orçamento total</p>
                        <p class="text-2xl font-black text-emerald-600">{{ fmtMoney(totalLimit) }}</p>
                    </div>
                    <div class="w-px h-10 bg-gray-100"></div>
                    <div>
                        <p class="text-xs font-bold text-gray-400 uppercase">Disponível</p>
                        <p class="text-2xl font-black" :class="totalLimit - totalSpent >= 0 ? 'text-blue-600' : 'text-red-500'">
                            {{ fmtMoney(Math.max(0, totalLimit - totalSpent)) }}
                        </p>
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-3xl font-black" :class="overallPct >= 100 ? 'text-red-500' : overallPct >= 80 ? 'text-orange-500' : 'text-emerald-500'">
                        {{ overallPct.toFixed(0) }}%
                    </span>
                    <p class="text-[10px] font-bold text-gray-400 uppercase">do orçamento usado</p>
                </div>
            </div>
            <!-- Barra global -->
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                    class="h-full rounded-full transition-all duration-700"
                    :class="overallPct >= 100 ? 'bg-red-500' : overallPct >= 80 ? 'bg-orange-400' : 'bg-emerald-500'"
                    :style="`width: ${overallPct}%`"
                ></div>
            </div>
        </div>

        <!-- Estado vazio -->
        <div v-if="limits.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center">
            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag class="w-7 h-7 text-gray-300" />
            </div>
            <p class="text-sm font-semibold text-gray-400">Nenhum limite definido ainda</p>
            <p class="text-xs text-gray-300 mt-1 mb-6">Crie limites por categoria para controlar seus gastos</p>
            <button @click="openCreate" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                <Plus class="w-4 h-4" /> Criar primeiro limite
            </button>
        </div>

        <!-- Grid de limites -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div
                v-for="limit in limits" :key="limit.id"
                class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow group"
            >
                <!-- Cabeçalho do card -->
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div :class="[colorOf(limit.color).bg, colorOf(limit.color).text]" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                            <component :is="iconOf(limit.icon)" class="w-5 h-5" />
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-800">{{ limit.category }}</p>
                            <p class="text-[10px] text-gray-400">Limite: {{ fmtMoney(limit.limit_amount) }}</p>
                        </div>
                    </div>
                    <!-- Status badge -->
                    <div class="flex items-center gap-1.5">
                        <span v-if="statusOf(pct(limit)) === 'over'" class="flex items-center gap-1 text-[10px] font-bold bg-red-50 text-red-500 px-2 py-0.5 rounded-full">
                            <AlertTriangle class="w-3 h-3" /> Excedido
                        </span>
                        <span v-else-if="statusOf(pct(limit)) === 'warning'" class="flex items-center gap-1 text-[10px] font-bold bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full">
                            <AlertTriangle class="w-3 h-3" /> Atenção
                        </span>
                        <span v-else class="flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                            <CheckCircle2 class="w-3 h-3" /> OK
                        </span>
                    </div>
                </div>

                <!-- Valores -->
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-xl font-black text-gray-800">{{ fmtMoney(limit.spent) }}</p>
                        <p class="text-[10px] text-gray-400">gasto de {{ fmtMoney(limit.limit_amount) }}</p>
                    </div>
                    <p class="text-2xl font-black" :class="{
                        'text-red-500':    statusOf(pct(limit)) === 'over',
                        'text-orange-500': statusOf(pct(limit)) === 'warning',
                        'text-emerald-500': statusOf(pct(limit)) === 'ok',
                    }">{{ pct(limit).toFixed(0) }}%</p>
                </div>

                <!-- Barra de progresso -->
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        class="h-full rounded-full transition-all duration-700"
                        :class="{
                            'bg-red-500':    statusOf(pct(limit)) === 'over',
                            'bg-orange-400': statusOf(pct(limit)) === 'warning',
                            [colorOf(limit.color).bar]: statusOf(pct(limit)) === 'ok',
                        }"
                        :style="`width: ${pct(limit)}%`"
                    ></div>
                </div>

                <!-- Restante + ações -->
                <div class="flex items-center justify-between">
                    <p class="text-xs" :class="parseFloat(limit.limit_amount) - limit.spent >= 0 ? 'text-gray-400' : 'text-red-400'">
                        <span v-if="parseFloat(limit.limit_amount) - limit.spent >= 0">
                            Restam <b class="text-gray-600">{{ fmtMoney(parseFloat(limit.limit_amount) - limit.spent) }}</b>
                        </span>
                        <span v-else>
                            <b class="text-red-500">{{ fmtMoney(Math.abs(parseFloat(limit.limit_amount) - limit.spent)) }}</b> excedido
                        </span>
                    </p>
                    <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button @click="openEdit(limit)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                            <Pencil class="w-3.5 h-3.5" />
                        </button>
                        <button @click="deleteLimit(limit.id)" class="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 class="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Card "Novo Limite" -->
            <button @click="openCreate"
                class="bg-white rounded-xl border-2 border-dashed border-gray-200 p-5 flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-emerald-300 hover:text-emerald-400 hover:bg-emerald-50/50 transition-all min-h-[200px]">
                <Plus class="w-8 h-8" />
                <span class="text-xs font-bold uppercase tracking-wider">Novo Limite</span>
            </button>
        </div>
    </main>

    <!-- Modal -->
    <Teleport to="body">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" @click.self="closeModal">
            <div class="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4">

                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 class="text-base font-semibold text-gray-800">{{ editingId ? 'Editar Limite' : 'Novo Limite' }}</h2>
                    <button @click="closeModal" class="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <div class="px-6 py-5 space-y-4">
                    <!-- Categoria -->
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-1">Categoria *</label>
                        <input v-model="form.category" type="text" placeholder="Ex.: Alimentação"
                            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                    </div>

                    <!-- Valor limite -->
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-1">Valor limite *</label>
                        <div class="relative">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">R$</span>
                            <input v-model="form.limit_amount" type="number" min="1" step="0.01" placeholder="0,00"
                                class="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        </div>
                    </div>

                    <!-- Ícone -->
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-2">Ícone</label>
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="(comp, key) in ICONS" :key="key"
                                @click="form.icon = key"
                                :class="form.icon === key ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-gray-400 border-gray-200 hover:border-emerald-300'"
                                class="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors"
                            >
                                <component :is="comp" class="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <!-- Cor -->
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-2">Cor</label>
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="(cls, key) in COLORS" :key="key"
                                @click="form.color = key"
                                :class="[cls.bar, form.color === key ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : '']"
                                class="w-7 h-7 rounded-full transition-transform"
                            ></button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-2 px-6 py-4 border-t border-gray-100">
                    <button @click="closeModal" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Cancelar</button>
                    <button @click="submitForm" class="px-5 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                        {{ editingId ? 'Salvar' : 'Criar Limite' }}
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
