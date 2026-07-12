<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Plus, X, Check, Pencil, Trash2, ChevronLeft, ChevronRight,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, ShoppingCart, Dumbbell, Shirt,
    AlertTriangle, Target,
} from 'lucide-vue-next';

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
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const budgets = ref([
    { id: 1, cat: 'Alimentação', icon: Utensils,      iconBg: 'bg-orange-50', iconText: 'text-orange-600', limit: 1000, spent: 780  },
    { id: 2, cat: 'Transporte',  icon: Car,            iconBg: 'bg-purple-50', iconText: 'text-purple-600', limit: 400,  spent: 260  },
    { id: 3, cat: 'Lazer',       icon: TreePalm,       iconBg: 'bg-cyan-50',   iconText: 'text-cyan-600',   limit: 500,  spent: 48   },
    { id: 4, cat: 'Saúde',       icon: HeartPulse,     iconBg: 'bg-rose-50',   iconText: 'text-rose-600',   limit: 500,  spent: 157  },
    { id: 5, cat: 'Assinaturas', icon: TvMinimalPlay,  iconBg: 'bg-red-50',    iconText: 'text-red-600',    limit: 200,  spent: 139  },
    { id: 6, cat: 'Educação',    icon: GraduationCap,  iconBg: 'bg-indigo-50', iconText: 'text-indigo-600', limit: 600,  spent: 450  },
    { id: 7, cat: 'Casa',        icon: Home,           iconBg: 'bg-blue-50',   iconText: 'text-blue-600',   limit: 1500, spent: 1345 },
    { id: 8, cat: 'Vestuário',   icon: Shirt,          iconBg: 'bg-pink-50',   iconText: 'text-pink-600',   limit: 300,  spent: 189  },
]);

function pct(b) { return Math.min(Math.round((b.spent / b.limit) * 100), 100); }
function barColor(b) {
    const p = pct(b);
    if (p >= 90) return 'bg-red-500';
    if (p >= 70) return 'bg-amber-400';
    return 'bg-emerald-500';
}
function statusLabel(b) {
    const p = pct(b);
    if (p >= 100) return { label: 'Limite atingido', cls: 'bg-red-100 text-red-600' };
    if (p >= 90)  return { label: 'Crítico',          cls: 'bg-red-100 text-red-600' };
    if (p >= 70)  return { label: 'Atenção',          cls: 'bg-amber-100 text-amber-700' };
    return             { label: 'OK',                cls: 'bg-emerald-100 text-emerald-600' };
}

const totalLimit = computed(() => budgets.value.reduce((s, b) => s + b.limit, 0));
const totalSpent = computed(() => budgets.value.reduce((s, b) => s + b.spent, 0));
const overBudget = computed(() => budgets.value.filter(b => pct(b) >= 100).length);
const atRisk     = computed(() => budgets.value.filter(b => pct(b) >= 70 && pct(b) < 100).length);

// Modal novo limite
const showModal = ref(false);
const editing   = ref(null);
const form = ref({ cat: '', limit: '', icon: null, iconBg: 'bg-gray-100', iconText: 'text-gray-600' });

const catOptions = [
    { cat: 'Alimentação', icon: Utensils,     iconBg: 'bg-orange-50', iconText: 'text-orange-600' },
    { cat: 'Transporte',  icon: Car,           iconBg: 'bg-purple-50', iconText: 'text-purple-600' },
    { cat: 'Saúde',       icon: HeartPulse,    iconBg: 'bg-rose-50',   iconText: 'text-rose-600'   },
    { cat: 'Lazer',       icon: TreePalm,      iconBg: 'bg-cyan-50',   iconText: 'text-cyan-600'   },
    { cat: 'Casa',        icon: Home,          iconBg: 'bg-blue-50',   iconText: 'text-blue-600'   },
    { cat: 'Educação',    icon: GraduationCap, iconBg: 'bg-indigo-50', iconText: 'text-indigo-600' },
    { cat: 'Assinaturas', icon: TvMinimalPlay, iconBg: 'bg-red-50',    iconText: 'text-red-600'    },
    { cat: 'Vestuário',   icon: Shirt,         iconBg: 'bg-pink-50',   iconText: 'text-pink-600'   },
    { cat: 'Academia',    icon: Dumbbell,      iconBg: 'bg-violet-50', iconText: 'text-violet-600' },
    { cat: 'Compras',     icon: ShoppingCart,  iconBg: 'bg-amber-50',  iconText: 'text-amber-600'  },
];

function openNew() {
    editing.value = null;
    form.value = { cat: '', limit: '', icon: null, iconBg: 'bg-gray-100', iconText: 'text-gray-600' };
    showModal.value = true;
}
function openEdit(b) {
    editing.value = b.id;
    form.value = { cat: b.cat, limit: b.limit, icon: b.icon, iconBg: b.iconBg, iconText: b.iconText };
    showModal.value = true;
}
function closeModal() { showModal.value = false; editing.value = null; }
function selectCat(opt) {
    form.value = { ...form.value, cat: opt.cat, icon: opt.icon, iconBg: opt.iconBg, iconText: opt.iconText };
}
function saveModal() {
    if (!form.value.cat || !form.value.limit) return;
    if (editing.value) {
        const b = budgets.value.find(x => x.id === editing.value);
        if (b) { b.cat = form.value.cat; b.limit = Number(form.value.limit); b.icon = form.value.icon; b.iconBg = form.value.iconBg; b.iconText = form.value.iconText; }
    } else {
        const opt = catOptions.find(o => o.cat === form.value.cat) ?? catOptions[0];
        budgets.value.push({ id: Date.now(), cat: form.value.cat, icon: opt.icon, iconBg: opt.iconBg, iconText: opt.iconText, limit: Number(form.value.limit), spent: 0 });
    }
    closeModal();
}
function removeBudget(id) { budgets.value = budgets.value.filter(b => b.id !== id); }
</script>

<template>
    <Navbar />

    <main class="max-w-5xl mx-auto px-4 pt-24 pb-12">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
                <h1 class="text-xl font-bold text-gray-800">Limite de Gastos</h1>
                <p class="text-xs text-gray-400 mt-0.5">Defina e acompanhe quanto pode gastar por categoria</p>
            </div>
            <button @click="openNew"
                class="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-100">
                <Plus class="w-4 h-4" /> Novo limite
            </button>
        </div>

        <!-- Mês -->
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
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Total Orçado</p>
                <p class="text-xl font-bold text-gray-800">{{ fmtMoney(totalLimit) }}</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Total Gasto</p>
                <p class="text-xl font-bold text-gray-800">{{ fmtMoney(totalSpent) }}</p>
                <div class="mt-1.5 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all"
                        :class="totalSpent/totalLimit > 0.9 ? 'bg-red-400' : totalSpent/totalLimit > 0.7 ? 'bg-amber-400' : 'bg-emerald-500'"
                        :style="`width:${Math.min(totalSpent/totalLimit*100,100)}%`"></div>
                </div>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Em risco</p>
                <p class="text-xl font-bold text-amber-500">{{ atRisk }}</p>
                <p class="text-xs text-gray-400 mt-0.5">categorias acima de 70%</p>
            </div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p class="text-xs text-gray-400 mb-1">Estourados</p>
                <p class="text-xl font-bold text-red-500">{{ overBudget }}</p>
                <p class="text-xs text-gray-400 mt-0.5">limite atingido</p>
            </div>
        </div>

        <!-- Lista de limites -->
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 class="text-sm font-bold text-gray-700">Categorias</h2>
                <span class="text-xs text-gray-400">{{ budgets.length }} limites definidos</span>
            </div>

            <div class="divide-y divide-gray-50">
                <div v-for="b in budgets" :key="b.id"
                    class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors group">
                    <!-- Ícone -->
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        :class="[b.iconBg, b.iconText]">
                        <component :is="b.icon" class="w-5 h-5" />
                    </div>

                    <!-- Info + barra -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between mb-1.5">
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-semibold text-gray-800">{{ b.cat }}</span>
                                <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                                    :class="statusLabel(b).cls">
                                    {{ statusLabel(b).label }}
                                </span>
                            </div>
                            <div class="flex items-center gap-1.5 text-xs">
                                <span class="font-semibold text-gray-800 tabular-nums">{{ fmtMoney(b.spent) }}</span>
                                <span class="text-gray-400">/ {{ fmtMoney(b.limit) }}</span>
                                <span class="font-bold tabular-nums w-9 text-right"
                                    :class="pct(b) >= 90 ? 'text-red-500' : pct(b) >= 70 ? 'text-amber-500' : 'text-gray-500'">
                                    {{ pct(b) }}%
                                </span>
                            </div>
                        </div>
                        <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-700"
                                :class="barColor(b)"
                                :style="`width:${pct(b)}%`">
                            </div>
                        </div>
                        <p class="text-xs text-gray-400 mt-1">
                            Disponível: <span class="font-medium text-gray-600">{{ fmtMoney(Math.max(b.limit - b.spent, 0)) }}</span>
                        </p>
                    </div>

                    <!-- Ações -->
                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <button @click="openEdit(b)" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600">
                            <Pencil class="w-4 h-4" />
                        </button>
                        <button @click="removeBudget(b.id)" class="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-gray-400 hover:text-red-500">
                            <Trash2 class="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Modal -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeModal"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
                <div class="flex items-center justify-between mb-5">
                    <h2 class="text-base font-bold text-gray-800">{{ editing ? 'Editar Limite' : 'Novo Limite' }}</h2>
                    <button @click="closeModal" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <X class="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                <!-- Seleção de categoria -->
                <label class="text-xs font-semibold text-gray-500 mb-2 block">Categoria</label>
                <div class="grid grid-cols-5 gap-2 mb-4">
                    <button v-for="opt in catOptions" :key="opt.cat"
                        @click="selectCat(opt)"
                        class="flex flex-col items-center gap-1 p-2 rounded-xl border transition-all text-center"
                        :class="form.cat === opt.cat ? 'border-emerald-400 bg-emerald-50' : 'border-gray-100 hover:border-gray-200'">
                        <span class="w-8 h-8 rounded-lg flex items-center justify-center" :class="[opt.iconBg, opt.iconText]">
                            <component :is="opt.icon" class="w-4 h-4" />
                        </span>
                        <span class="text-[9px] text-gray-500 leading-tight">{{ opt.cat }}</span>
                    </button>
                </div>

                <!-- Valor limite -->
                <label class="text-xs font-semibold text-gray-500 mb-1 block">Valor do limite (R$)</label>
                <input v-model="form.limit" type="number" step="10" placeholder="Ex: 500"
                    class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-300 mb-5" />

                <div class="flex gap-3">
                    <button @click="closeModal"
                        class="flex-1 py-2.5 border border-gray-200 text-sm font-semibold text-gray-500 rounded-xl hover:bg-gray-50 transition-colors">
                        Cancelar
                    </button>
                    <button @click="saveModal"
                        class="flex-1 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors">
                        <Check class="w-4 h-4 inline mr-1" /> Salvar
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
