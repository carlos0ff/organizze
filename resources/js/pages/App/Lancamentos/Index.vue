<script setup>
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Plus, Minus, ArrowRightLeft, ChevronLeft, ChevronRight,
    Check, X, Pencil, Trash2, ArrowUpCircle, ArrowDownCircle,
} from 'lucide-vue-next';

// ==================== PROPS ====================
const props = defineProps({
    transactions: { type: Array, default: () => [] },
    filters: { type: Object, default: () => ({}) },
});

// ==================== NAVEGAÇÃO DE MÊS ====================
const MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const currentMonth = ref(props.filters.month ?? new Date().getMonth() + 1);
const currentYear  = ref(props.filters.year  ?? new Date().getFullYear());

const monthLabel = computed(() => `${MONTHS[currentMonth.value - 1]} ${currentYear.value}`);

function navigate(delta) {
    let m = currentMonth.value + delta;
    let y = currentYear.value;
    if (m > 12) { m = 1;  y++; }
    if (m < 1)  { m = 12; y--; }
    currentMonth.value = m;
    currentYear.value  = y;
    router.get(route('app.lancamentos'), { month: m, year: y }, { preserveState: true, replace: true });
}

// ==================== FILTRO DE TIPO ====================
const activeFilter = ref('todos');
const FILTERS = [
    { key: 'todos',         label: 'Todos' },
    { key: 'receita',       label: 'Receitas' },
    { key: 'despesa',       label: 'Despesas' },
    { key: 'transferencia', label: 'Transferências' },
];

// ==================== TRANSAÇÕES FILTRADAS ====================
const filtered = computed(() =>
    activeFilter.value === 'todos'
        ? props.transactions
        : props.transactions.filter(t => t.type === activeFilter.value)
);

const grouped = computed(() => {
    const map = new Map();
    for (const t of filtered.value) {
        const key = t.date;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(t);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
});

const totalReceitas  = computed(() => props.transactions.filter(t => t.type === 'receita').reduce((s, t) => s + parseFloat(t.amount), 0));
const totalDespesas  = computed(() => props.transactions.filter(t => t.type === 'despesa').reduce((s, t) => s + parseFloat(t.amount), 0));
const saldo          = computed(() => totalReceitas.value - totalDespesas.value);

function fmtDate(dateStr) {
    const [y, m, d] = dateStr.split('-');
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
}

function fmtMoney(val) {
    return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==================== MODAL ====================
const showModal   = ref(false);
const modalType   = ref('despesa');
const editingId   = ref(null);

const form = ref({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    account: '',
    category: '',
    note: '',
    paid: false,
});

const modalTitle = computed(() => {
    if (editingId.value) return 'Editar Lançamento';
    if (modalType.value === 'despesa') return 'Nova Despesa';
    if (modalType.value === 'receita') return 'Nova Receita';
    return 'Nova Transferência';
});

function openModal(type = 'despesa', transaction = null) {
    modalType.value = type;
    if (transaction) {
        editingId.value = transaction.id;
        form.value = {
            description: transaction.description,
            amount: transaction.amount,
            date: transaction.date,
            account: transaction.account ?? '',
            category: transaction.category ?? '',
            note: transaction.note ?? '',
            paid: transaction.paid,
        };
    } else {
        editingId.value = null;
        form.value = {
            description: '',
            amount: '',
            date: new Date().toISOString().split('T')[0],
            account: '',
            category: '',
            note: '',
            paid: false,
        };
    }
    showModal.value = true;
}

function closeModal() { showModal.value = false; }

async function submitForm() {
    const payload = { ...form.value, type: modalType.value };
    const url  = editingId.value ? `/api/transactions/${editingId.value}` : '/api/transactions';
    const method = editingId.value ? 'PUT' : 'POST';

    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
        body: JSON.stringify(payload),
    });

    if (res.ok) {
        closeModal();
        router.reload({ only: ['transactions'] });
    }
}

async function deleteTransaction(id) {
    if (!confirm('Remover este lançamento?')) return;
    await fetch(`/api/transactions/${id}`, {
        method: 'DELETE',
        headers: { 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
    });
    router.reload({ only: ['transactions'] });
}

async function togglePaid(transaction) {
    await fetch(`/api/transactions/${transaction.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN') },
        body: JSON.stringify({ paid: !transaction.paid }),
    });
    router.reload({ only: ['transactions'] });
}

function getCookie(name) {
    return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] ?? '';
}
</script>

<template>
    <Navbar />

    <main class="max-w-7xl mx-auto px-4 pt-24 pb-12">

        <!-- Cabeçalho + Navegação de mês -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div class="flex items-center gap-3">
                <button @click="navigate(-1)" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <ChevronLeft class="w-5 h-5 text-gray-500" />
                </button>
                <h1 class="text-lg font-semibold text-gray-800 w-44 text-center capitalize">{{ monthLabel }}</h1>
                <button @click="navigate(1)" class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <ChevronRight class="w-5 h-5 text-gray-500" />
                </button>
            </div>

            <!-- Botões de novo lançamento -->
            <div class="flex gap-2">
                <button @click="openModal('despesa')" class="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                    <Minus class="w-4 h-4" /> Despesa
                </button>
                <button @click="openModal('receita')" class="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                    <Plus class="w-4 h-4" /> Receita
                </button>
                <button @click="openModal('transferencia')" class="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                    <ArrowRightLeft class="w-4 h-4" /> Transferência
                </button>
            </div>
        </div>

        <!-- Resumo do mês -->
        <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
                <ArrowUpCircle class="w-8 h-8 text-emerald-500 shrink-0" />
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase">Receitas</p>
                    <p class="text-base font-bold text-emerald-600">{{ fmtMoney(totalReceitas) }}</p>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
                <ArrowDownCircle class="w-8 h-8 text-red-400 shrink-0" />
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase">Despesas</p>
                    <p class="text-base font-bold text-red-500">{{ fmtMoney(totalDespesas) }}</p>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3">
                <div :class="saldo >= 0 ? 'text-emerald-500' : 'text-red-500'" class="w-8 h-8 shrink-0 font-black text-xl flex items-center justify-center">Σ</div>
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase">Saldo</p>
                    <p :class="saldo >= 0 ? 'text-emerald-600' : 'text-red-500'" class="text-base font-bold">{{ fmtMoney(saldo) }}</p>
                </div>
            </div>
        </div>

        <!-- Filtros de tipo -->
        <div class="flex gap-2 mb-6">
            <button
                v-for="f in FILTERS" :key="f.key"
                @click="activeFilter = f.key"
                :class="activeFilter === f.key
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300'"
                class="px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors"
            >
                {{ f.label }}
            </button>
        </div>

        <!-- Lista de transações -->
        <div v-if="grouped.length === 0" class="bg-white rounded-xl shadow-sm p-12 text-center text-gray-400">
            <p class="text-sm">Nenhum lançamento em {{ monthLabel }}.</p>
            <p class="text-xs mt-1">Use os botões acima para adicionar.</p>
        </div>

        <div v-else class="space-y-6">
            <div v-for="[date, items] in grouped" :key="date">
                <!-- Cabeçalho do dia -->
                <div class="flex items-center gap-3 mb-2">
                    <p class="text-xs font-semibold text-gray-400 uppercase capitalize">{{ fmtDate(date) }}</p>
                    <div class="flex-1 border-t border-gray-100"></div>
                    <p class="text-xs font-bold" :class="items.reduce((s,t) => t.type === 'receita' ? s + parseFloat(t.amount) : s - parseFloat(t.amount), 0) >= 0 ? 'text-emerald-500' : 'text-red-400'">
                        {{ fmtMoney(items.reduce((s,t) => t.type === 'receita' ? s + parseFloat(t.amount) : s - parseFloat(t.amount), 0)) }}
                    </p>
                </div>

                <!-- Itens do dia -->
                <div class="bg-white rounded-xl shadow-sm divide-y divide-gray-50">
                    <div
                        v-for="t in items" :key="t.id"
                        class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                    >
                        <!-- Ícone do tipo -->
                        <div :class="{
                            'bg-red-50 text-red-400':   t.type === 'despesa',
                            'bg-emerald-50 text-emerald-500': t.type === 'receita',
                            'bg-blue-50 text-blue-400': t.type === 'transferencia',
                        }" class="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                            <Minus v-if="t.type === 'despesa'" class="w-4 h-4" />
                            <Plus  v-else-if="t.type === 'receita'" class="w-4 h-4" />
                            <ArrowRightLeft v-else class="w-3.5 h-3.5" />
                        </div>

                        <!-- Descrição + categoria -->
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-800 truncate">{{ t.description }}</p>
                            <p class="text-[10px] text-gray-400">{{ t.category || '—' }} {{ t.account ? `· ${t.account}` : '' }}</p>
                        </div>

                        <!-- Valor -->
                        <p :class="{
                            'text-red-500':   t.type === 'despesa',
                            'text-emerald-600': t.type === 'receita',
                            'text-blue-500':  t.type === 'transferencia',
                        }" class="text-sm font-bold whitespace-nowrap">
                            {{ t.type === 'despesa' ? '-' : '+' }}{{ fmtMoney(t.amount) }}
                        </p>

                        <!-- Pago / Pendente -->
                        <button
                            @click="togglePaid(t)"
                            :class="t.paid ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'"
                            class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 hover:opacity-80 transition"
                            :title="t.paid ? 'Marcar como pendente' : 'Marcar como pago'"
                        >
                            <Check class="w-3.5 h-3.5" />
                        </button>

                        <!-- Ações (visíveis no hover) -->
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button @click="openModal(t.type, t)" class="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                                <Pencil class="w-3.5 h-3.5" />
                            </button>
                            <button @click="deleteTransaction(t.id)" class="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-500">
                                <Trash2 class="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Modal de novo/editar lançamento -->
    <Teleport to="body">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" @click.self="closeModal">
            <div class="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4">

                <!-- Header do modal -->
                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div class="flex items-center gap-2">
                        <div :class="{
                            'bg-red-100 text-red-500':     modalType === 'despesa',
                            'bg-emerald-100 text-emerald-600': modalType === 'receita',
                            'bg-blue-100 text-blue-500':   modalType === 'transferencia',
                        }" class="w-8 h-8 rounded-full flex items-center justify-center">
                            <Minus v-if="modalType === 'despesa'" class="w-4 h-4" />
                            <Plus  v-else-if="modalType === 'receita'" class="w-4 h-4" />
                            <ArrowRightLeft v-else class="w-3.5 h-3.5" />
                        </div>
                        <h2 class="text-base font-semibold text-gray-800">{{ modalTitle }}</h2>
                    </div>
                    <button @click="closeModal" class="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <!-- Seletor de tipo -->
                <div class="flex border-b border-gray-100">
                    <button v-for="t in ['despesa', 'receita', 'transferencia']" :key="t"
                        @click="modalType = t"
                        :class="modalType === t ? {
                            'despesa':      'border-b-2 border-red-400 text-red-500 font-semibold',
                            'receita':      'border-b-2 border-emerald-500 text-emerald-600 font-semibold',
                            'transferencia':'border-b-2 border-blue-400 text-blue-500 font-semibold',
                        }[t] : 'text-gray-400'"
                        class="flex-1 py-2.5 text-xs capitalize transition-colors"
                    >{{ t }}</button>
                </div>

                <!-- Formulário -->
                <div class="px-6 py-5 space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-1">Descrição *</label>
                        <input v-model="form.description" type="text" placeholder="Ex.: Supermercado"
                            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1">Valor *</label>
                            <input v-model="form.amount" type="number" min="0.01" step="0.01" placeholder="0,00"
                                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1">Data *</label>
                            <input v-model="form.date" type="date"
                                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1">Conta</label>
                            <input v-model="form.account" type="text" placeholder="Ex.: Nubank"
                                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1">Categoria</label>
                            <input v-model="form.category" type="text" placeholder="Ex.: Alimentação"
                                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 mb-1">Observação</label>
                        <textarea v-model="form.note" rows="2" placeholder="Opcional..."
                            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"></textarea>
                    </div>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input v-model="form.paid" type="checkbox" class="w-4 h-4 accent-emerald-500" />
                        <span class="text-sm text-gray-600">Já foi pago / recebido</span>
                    </label>
                </div>

                <!-- Footer do modal -->
                <div class="flex justify-end gap-2 px-6 py-4 border-t border-gray-100">
                    <button @click="closeModal" class="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">Cancelar</button>
                    <button @click="submitForm" :class="{
                        'bg-red-500 hover:bg-red-600':       modalType === 'despesa',
                        'bg-emerald-500 hover:bg-emerald-600': modalType === 'receita',
                        'bg-blue-500 hover:bg-blue-600':     modalType === 'transferencia',
                    }" class="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-colors">
                        {{ editingId ? 'Salvar' : 'Adicionar' }}
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
