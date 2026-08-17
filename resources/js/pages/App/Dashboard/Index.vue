<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
    ChevronDown, ChevronRight, X, Ellipsis,
    EyeOff, Download, Plus, Minus, LogOut, Settings,
    CalendarRange, Sun, Sunset, Moon,
    TrendingUp, ArrowRightLeft, ArrowUpCircle, ArrowDownCircle,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, Gift, ShoppingCart, Gamepad2,
    CirclePlus, Scale, Layers, User, Gem, Bell, Star, HelpCircle,
    AlertTriangle, AlertCircle, Info, CheckCircle2, BarChart2,
    Wifi, Zap, CreditCard, Check,
    Repeat, FileText, Paperclip, Tag,
} from 'lucide-vue-next';

import Footer from '@/Components/layout/Footer.vue';
import Navbar from '@/Components/navigation/Navbar.vue';
import Billing from '@/Components/billing/TrialBanner.vue';

// Saudação dinâmica baseada no horário
const hour = new Date().getHours();
const greeting    = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
const greetingIcon  = hour < 12 ? Sun : hour < 18 ? Sunset : Moon;
const greetingColor = hour < 12 ? 'text-yellow-400' : hour < 18 ? 'text-orange-400' : 'text-indigo-400';

// Dados financeiros
const receita = ref(5500.00);
const despesa = ref(2470.80);
const saldo   = computed(() => receita.value - despesa.value);
const spentPct = computed(() => Math.round((despesa.value / receita.value) * 100));

const goals = [
    { label: 'Transporte',  spent: 260, limit: 400,  icon: Car,           iconBg: 'bg-blue-50',    iconText: 'text-blue-600',   bar: 'bg-blue-500',    pctColor: 'text-blue-600'    },
    { label: 'Alimentação', spent: 800, limit: 1000, icon: Utensils,      iconBg: 'bg-orange-50',  iconText: 'text-orange-600', bar: 'bg-orange-500',  pctColor: 'text-orange-600'  },
    { label: 'Lazer',       spent: 200, limit: 1000, icon: TreePalm,      iconBg: 'bg-emerald-50', iconText: 'text-emerald-600',bar: 'bg-emerald-500', pctColor: 'text-emerald-600' },
    { label: 'Assinaturas', spent: 150, limit: 300,  icon: TvMinimalPlay, iconBg: 'bg-purple-50',  iconText: 'text-purple-600', bar: 'bg-purple-500',  pctColor: 'text-purple-600'  },
    { label: 'Educação',    spent: 450, limit: 600,  icon: GraduationCap, iconBg: 'bg-indigo-50',  iconText: 'text-indigo-600', bar: 'bg-indigo-500',  pctColor: 'text-indigo-600'  },
    { label: 'Saúde',       spent: 120, limit: 500,  icon: HeartPulse,    iconBg: 'bg-red-50',     iconText: 'text-red-600',    bar: 'bg-red-500',     pctColor: 'text-red-600'     },
];

function pctOf(g) { return Math.round((g.spent / g.limit) * 100); }

function goalStatus(pct) {
    if (pct >= 90) return { label: 'Crítico', cls: 'bg-red-100 text-red-600' };
    if (pct >= 70) return { label: 'Atenção', cls: 'bg-amber-100 text-amber-700' };
    return { label: 'OK', cls: 'bg-emerald-100 text-emerald-600' };
}

function goalBarColor(pct, defaultBar) {
    if (pct >= 90) return 'bg-red-500';
    if (pct >= 75) return 'bg-amber-400';
    return defaultBar;
}

const spendingCategories = [
    { label: 'Presentes',   pct: 18.83, value: 'R$ 465,25', icon: Gift,         iconBg: 'bg-purple-500', iconText: 'text-white',       barBg: 'bg-purple-100', bar: 'bg-purple-400',  pctColor: 'text-purple-600', highlight: true  },
    { label: 'Compras',     pct:  9.20, value: 'R$ 230,00', icon: ShoppingCart, iconBg: 'bg-rose-100',   iconText: 'text-rose-500',    barBg: 'bg-gray-100',   bar: 'bg-rose-400',    pctColor: 'text-gray-700',   highlight: false },
    { label: 'Alimentação', pct:  6.18, value: 'R$ 152,70', icon: Utensils,     iconBg: 'bg-pink-100',   iconText: 'text-pink-500',    barBg: 'bg-gray-100',   bar: 'bg-pink-400',    pctColor: 'text-gray-700',   highlight: false },
    { label: 'Lazer',       pct:  1.81, value: 'R$ 44,72',  icon: Gamepad2,     iconBg: 'bg-cyan-100',   iconText: 'text-cyan-500',    barBg: 'bg-gray-100',   bar: 'bg-cyan-400',    pctColor: 'text-gray-700',   highlight: false },
    { label: 'Transporte',  pct: 12.00, value: 'R$ 300,00', icon: Car,          iconBg: 'bg-emerald-100',iconText: 'text-emerald-500', barBg: 'bg-gray-100',   bar: 'bg-emerald-400', pctColor: 'text-gray-700',   highlight: false },
];
const hideSaldo = ref(false);

// Contas bancárias
const contas = ref([
    { nome: 'Nubank',   tipo: 'Conta Corrente', saldo: 2150.00, cor: 'bg-purple-600', inicial: 'NU', logo: '' },
    { nome: 'Itaú',     tipo: 'Conta Corrente', saldo: 1890.20, cor: 'bg-orange-500', inicial: 'IT', logo: 'https://app2.organizze.com.br/images/institutions/ofitau_br/small-icon-bd90d464ce1e1882138179cce56399ee.svg?vsn=d' },
    { nome: 'Carteira', tipo: 'Dinheiro',        saldo:  989.00, cor: 'bg-emerald-500', inicial: '💵', logo: null },
]);

const fmtMoney = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Modal cartões
const isModalOpen = ref(false);
const goToCardsPage = () => { window.location.href = '/app/cartao-credito'; };

const todayISO = new Date().toISOString().split('T')[0];

const contasOptions = [
    'Nubank – Conta Corrente',
    'Itaú – Conta Corrente',
    'Carteira – Dinheiro',
    'Cartão Itaú •••• 4321',
    'Cartão Santander •••• 9876',
    'Cartão Nubank •••• 1122',
];

const categoriasOptions = [
    'Alimentação', 'Transporte', 'Casa', 'Saúde',
    'Lazer', 'Educação', 'Assinaturas', 'Vestuário',
    'Compras', 'Presentes', 'Outros',
];

const repeticaoOpcoes = [
    { val: 'diario',   label: 'Diário'   },
    { val: 'semanal',  label: 'Semanal'  },
    { val: 'mensal',   label: 'Mensal'   },
    { val: 'anual',    label: 'Anual'    },
];

const emptyTxForm = () => ({
    descricao: '', valor: '', data: todayISO, conta: '', categoria: '',
    observacao: '', repeticao: '', arquivo: null, tagInput: '', tags: [],
});
const emptyExtras = () => ({ repetir: false, obs: false, anexo: false, tags: false });

function addTag(form) {
    const val = form.tagInput.trim().replace(/,/g, '');
    if (val && !form.tags.includes(val)) form.tags.push(val);
    form.tagInput = '';
}
function removeTag(form, tag) { form.tags = form.tags.filter(t => t !== tag); }
function onTagKeydown(e, form) {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(form); }
}

// Modal Nova Despesa
const showDespesaModal = ref(false);
const despesaForm = ref(emptyTxForm());
const despesaActiveExtras = ref(emptyExtras());
function openDespesaModal() {
    despesaForm.value = emptyTxForm();
    despesaActiveExtras.value = emptyExtras();
    showDespesaModal.value = true;
}
function closeDespesaModal() { showDespesaModal.value = false; }

// Modal Nova Receita
const showReceitaModal = ref(false);
const receitaForm = ref(emptyTxForm());
const receitaActiveExtras = ref(emptyExtras());
function openReceitaModal() {
    receitaForm.value = emptyTxForm();
    receitaActiveExtras.value = emptyExtras();
    showReceitaModal.value = true;
}
function closeReceitaModal() { showReceitaModal.value = false; }

// Modal Transferência
const showTransferenciaModal = ref(false);
const transferenciaForm = ref({ descricao: '', valor: '', data: todayISO, contaOrigem: '', contaDestino: '', observacao: '', repeticao: '', arquivo: null, tagInput: '', tags: [] });
const transferenciaActiveExtras = ref(emptyExtras());
function openTransferenciaModal() {
    transferenciaForm.value = { descricao: '', valor: '', data: todayISO, contaOrigem: '', contaDestino: '', observacao: '', repeticao: '', arquivo: null, tagInput: '', tags: [] };
    transferenciaActiveExtras.value = emptyExtras();
    showTransferenciaModal.value = true;
}
function closeTransferenciaModal() { showTransferenciaModal.value = false; }

// Modal Importar
const showImportModal = ref(false);
const importFile = ref(null);
const importDragOver = ref(false);
function openImportModal() { importFile.value = null; showImportModal.value = true; }
function closeImportModal() { showImportModal.value = false; }
function handleImportFile(e) { importFile.value = e.target.files[0] ?? null; }
function handleImportDrop(e) { importDragOver.value = false; importFile.value = e.dataTransfer.files[0] ?? null; }

function openModal(tipo) {
    if (tipo === 'despesa')  openDespesaModal();
    if (tipo === 'receita')  openReceitaModal();
    if (tipo === 'transfer') openTransferenciaModal();
    if (tipo === 'import')   openImportModal();
}

// Lista de cartões
const cards = ref([
    { bank: 'Nubank',    number: '•••• 5544', value: 'R$ 3.400,00', status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofnubank_br/small-icon-16c0f468c53212697f4a313fe153530b.svg?vsn=d' },
    { bank: 'Santander', number: '•••• 9876', value: 'R$ 860,00',   status: 'Fechada', logo: 'https://app2.organizze.com.br/images/institutions/ofsantander_br/small-icon-48ab948aa91e7eb84f00a77e735b468b.svg?vsn=d' },
    { bank: 'Itaú',      number: '•••• 4321', value: 'R$ 1.240,00', status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofitau_br/small-icon-bd90d464ce1e1882138179cce56399ee.svg?vsn=d' },
    { bank: 'Bradesco',  number: '•••• 7788', value: 'R$ 980,00',   status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofbradesco_br/small-icon-26351a92499d4ca36a3c1327d5bcb7ff.svg?vsn=d' },
]);

const MAX_CARDS = 4;

const displayCards = [
    {
        bank: 'Itaú',
        number: '4321',
        limit: 5000,
        value: 1240,
        status: 'Aberta',
        dueDate: '10 Nov',
        cardClass: 'from-orange-400 to-orange-600',
        shadow: 'shadow-orange-100',
        bandeira: 'mastercard',
        logoUrl: 'https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png'
    },
    { bank: 'Santander', number: '9876', limit: 3000, value:  860, status: 'Fechada', dueDate: '15 Nov',
      cardClass: 'from-red-500 to-red-700',       shadow: 'shadow-red-100',   bandeira: 'visa',
      logoUrl: 'https://assets.abstra.cloud/connectors/logos/santander.png',
      bandeiraUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png' },
    { bank: 'Nubank',    number: '1122', limit: 8000, value: 2150, status: 'Aberta',  dueDate: '22 Nov',
      cardClass: 'from-purple-600 to-indigo-800', shadow: 'shadow-purple-100', bandeira: 'mastercard',
      logoUrl: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3-1.png' },
];
const isLimitReached = computed(() => cards.value.length >= MAX_CARDS);

// Próximas contas
const MAX_BILLS = 6;
const upcomingBills = ref([
    { id: 1, name: 'Aluguel',          category: 'Casa',        dueDate: '10/11', daysLeft: 2,  amount: 1200.00, icon: Home,          iconBg: 'bg-blue-50',    iconText: 'text-blue-500',    paid: false },
    { id: 2, name: 'Internet',         category: 'Serviços',    dueDate: '12/11', daysLeft: 4,  amount: 99.90,  icon: Wifi,          iconBg: 'bg-purple-50',  iconText: 'text-purple-500',  paid: false },
    { id: 3, name: 'Netflix',          category: 'Assinaturas', dueDate: '15/11', daysLeft: 7,  amount: 39.90,  icon: TvMinimalPlay, iconBg: 'bg-red-50',     iconText: 'text-red-500',     paid: false },
    { id: 4, name: 'Energia Elétrica', category: 'Casa',        dueDate: '18/11', daysLeft: 10, amount: 145.80, icon: Zap,           iconBg: 'bg-yellow-50',  iconText: 'text-yellow-500',  paid: false },
    { id: 5, name: 'Plano de Saúde',   category: 'Saúde',       dueDate: '20/11', daysLeft: 12, amount: 320.00, icon: HeartPulse,    iconBg: 'bg-pink-50',    iconText: 'text-pink-500',    paid: false },
    { id: 6, name: 'Financiamento',    category: 'Financeiro',  dueDate: '25/11', daysLeft: 17, amount: 890.00, icon: CreditCard,    iconBg: 'bg-emerald-50', iconText: 'text-emerald-500', paid: false },
]);
const visibleBills   = computed(() => upcomingBills.value.slice(0, MAX_BILLS));
const hiddenBillsCount = computed(() => Math.max(0, upcomingBills.value.length - MAX_BILLS));
const totalBills     = computed(() => visibleBills.value.reduce((s, b) => s + b.amount, 0));

function billUrgencyClass(days) {
    if (days <= 1) return 'bg-red-100 text-red-600';
    if (days <= 3) return 'bg-orange-100 text-orange-600';
    if (days <= 7) return 'bg-amber-100 text-amber-600';
    return 'bg-gray-100 text-gray-500';
}
function billUrgencyLabel(days) {
    if (days === 0) return 'Vence hoje';
    if (days === 1) return 'Amanhã';
    return `${days} dias`;
}

// Dropdown de perfil
const profileOpen = ref(false);
const profileRef  = ref(null);

// Dropdown de notificações
const notifOpen = ref(false);
const notifRef  = ref(null);

const notifications = ref([
    { id: 1, title: 'Conta vence hoje', body: 'Fatura Cartão Nubank • R$ 450,00', type: 'warning', time: 'Agora', read: false },
    { id: 2, title: 'Limite atingido', body: 'Categoria Alimentação ultrapassou o limite mensal', type: 'danger', time: '2h atrás', read: false },
    { id: 3, title: 'Novo recurso disponível', body: 'Conecte sua conta bancária automaticamente', type: 'info', time: '5h atrás', read: false },
    { id: 4, title: 'Transação recebida', body: 'Salário • R$ 5.500,00 foi registrado', type: 'success', time: 'Ontem', read: true },
]);

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length);

function markAllRead() {
    notifications.value.forEach(n => (n.read = true));
}

function handleClickOutside(e) {
    if (profileRef.value && !profileRef.value.contains(e.target)) profileOpen.value = false;
    if (notifRef.value && !notifRef.value.contains(e.target)) notifOpen.value = false;
}

onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <!-- -->
    <Navbar />

    <!-- -->
    <Billing />

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-4 pb-12"
        :class="trialBarDismissed ? 'pt-24' : 'pt-[2rem]'">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between gap-5">
                <!-- Linha 1: saudação + ações -->
                <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 rounded-md bg-gray-200/40 flex items-center justify-center shrink-0">
                            <component :is="greetingIcon" :class="greetingColor" class="w-6 h-6" />
                        </div>
                        <div>
                            <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{{ greeting }},</p>
                            <h1 class="text-lg font-bold text-gray-800 leading-tight">Thiago Santos</h1>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <a href="/app/lancamentos" class="flex items-center gap-1 text-xs text-gray-500 font-medium border border-gray-200
                           px-3 py-1.5 rounded-md hover:bg-gray-50 transition-color hover:cursor-point  hover:cursor-point capitalize">
                            lançamentos <ChevronRight class="w-3 h-3" />
                        </a>
                        <button
                            class="flex items-center gap-1 text-xs text-emerald-600 font-medium border
                            border-emerald-100 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-colors  hover:cursor-point capitalize">
                            <TrendingUp class="w-3 h-3" /> Relatórios
                        </button>
                    </div>
                </div>

                <!-- Linha 2: métricas -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-emerald-50 rounded-md p-4">
                        <div class="flex items-center gap-1.5 mb-1">
                            <ArrowUpCircle class="w-4 h-4 text-green-500" />

                            <p class="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">Receitas</p>
                        </div>
                        <p class="text-lg font-black text-emerald-700">{{ fmtMoney(receita) }}</p>
                    </div>

                    <div class="bg-red-50 rounded-md p-4">
                        <div class="flex items-center gap-1.5 mb-1">
                            <ArrowDownCircle class="w-4 h-4 text-red-400" />
                            <p class="text-[10px] font-bold text-red-500 uppercase tracking-wide">Despesas</p>
                        </div>
                        <p class="text-lg font-black text-red-600">{{ fmtMoney(despesa) }}</p>
                    </div>

                    <div class="bg-gray-50 rounded-md p-4 cursor-pointer group " @click="hideSaldo = !hideSaldo">
                        <div class="flex items-center gap-1.5 mb-1">
                            <EyeOff class="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Saldo</p>
                        </div>
                        <p class="text-lg font-black text-gray-700 ">
                            {{ hideSaldo ? '••••••' : fmtMoney(saldo) }}
                        </p>
                    </div>
                </div>

                <!-- Linha 3: barra receita vs despesa -->
                <div class="block">
                    <div class="flex justify-between text-[10px] font-semibold text-gray-400 mb-1.5">
                        <span>Despesas representam <b class="text-gray-600">{{ spentPct }}%</b> das receitas</span>
                        <span :class="spentPct >= 90 ? 'text-red-400' : spentPct >= 70 ? 'text-orange-400' : 'text-emerald-500'">
                            {{ spentPct >= 90 ? 'Atenção!' : spentPct >= 70 ? 'Moderado' : 'Saudável' }}
                        </span>
                    </div>
                    <div class="h-2 bg-gray-100 rounded-full overflow-hidden ">
                        <div class="h-full rounded-full transition-all duration-700"
                             :class="spentPct >= 90 ? 'bg-red-400' : spentPct >= 70 ? 'bg-orange-400' : 'bg-emerald-500'"
                             :style="`width: ${spentPct}%`" ></div>
                    </div>
                </div>
            </div>

            <!-- Botões de Acesso Rápido -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 grid grid-cols-2 gap-3">
                <!-- Despesa -->
                <button @click="openModal('despesa')" class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-red-100 bg-red-50 hover:bg-red-100 hover:border-red-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-400 shadow-sm group-hover:scale-110 transition-transform">
                        <Minus class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-red-500 tracking-wide">Despesa</span>
                </button>

                <!-- Receita -->
                <button @click="openModal('receita')"
                        class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-emerald-100 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                        <Plus class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-emerald-600 tracking-wide">Receita</span>
                </button>

                <!-- Transferência -->
                <button @click="openModal('transfer')"
                        class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 hover:border-blue-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
                        <ArrowRightLeft class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-blue-500 tracking-wide">Transferência</span>
                </button>

                <!-- Importar -->
                <button @click="openModal('import')"
                        class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-violet-100 bg-violet-50 hover:bg-violet-100 hover:border-violet-200 transition-all">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-violet-500 shadow-sm group-hover:scale-110 transition-transform">
                        <Download class="w-5 h-5" />
                    </div>
                    <span class="text-[11px] uppercase font-bold text-violet-500 tracking-wide">Importar</span>
                </button>
            </div>
        </div>

        <!-- TUTORIAL -->
        <div class="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50 p-6 mb-4">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                        <i class="fas fa-chart-line text-green-500 text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-gray-700">Primeiros passos</h3>
                        <p class="text-sm text-gray-400">1 de 5 tarefas completas</p>
                    </div>
                </div>
                <button class="bg-green-50 text-green-600 font-bold py-2 px-6 rounded-xl text-sm hover:bg-green-100 transition-colors">
                    Continuar
                </button>
            </div>
            <div class="flex gap-2 h-1.5">
                <div class="flex-1 bg-green-500 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
                <div class="flex-1 bg-gray-100 rounded-full"></div>
            </div>
        </div>

        <!-- START | INÍCIO -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Minhas Contas -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 h-[460px] p-6 flex flex-col">
                <div class="flex justify-between items-start mb-6 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-800 text-base">Minhas Contas</h2>
                        <p class="text-xs text-gray-400 mt-0.5">Gerencie suas contas</p>
                    </div>
                    <button class="text-[11px] font-semibold text-gray-400 flex items-center gap-1 hover:text-emerald-600 transition-colors">
                        <EyeOff class="w-3.5 h-3.5" /> Ocultar
                    </button>
                </div>

                <!-- Lista de contas -->
                <div class="flex-1 overflow-hidden">
                    <div class="space-y-2">
                        <div v-for="conta in contas" :key="conta.nome" class="flex justify-between items-center px-3 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100" >
                            <div class="flex items-center gap-3.5">
                                <div :class="conta.logo ? 'bg-white border border-gray-200 shadow-sm' : conta.cor" class="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-black overflow-hidden shrink-0">
                                    <img v-if="conta.logo" :src="conta.logo" :alt="conta.nome" class="w-full h-full object-cover" />
                                    <span v-else>{{ conta.inicial }}</span>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-gray-800">{{ conta.nome }}</p>
                                    <p class="text-xs text-gray-400 mt-0.5">{{ conta.tipo }}</p>
                                </div>
                            </div>
                            <p class="text-sm font-semibold text-emerald-600">{{ fmtMoney(conta.saldo) }}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-5 pt-4 border-t border-gray-100 flex-shrink-0">
                    <button class="w-full py-2.5 text-xs font-semibold text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all flex items-center justify-center gap-1.5">
                        <Plus class="w-3.5 h-3.5" /> Gerenciar Contas
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[460px]">
                <!-- HEADER -->
                <div class="flex justify-between items-start mb-6 flex-shrink-0">
                    <div>
                        <h2 class="font-bold text-gray-800 text-base">Maiores Gastos</h2>
                        <p class="text-xs text-gray-400 mt-0.5">Resumo do mês</p>
                    </div>
                    <button class="text-xs font-semibold text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition">
                        Relatório
                    </button>
                </div>

                <div class="flex-1 flex items-start gap-4">
                    <!-- GRÁFICO -->
                    <div class="relative flex items-center justify-center shrink-0 self-center">
                        <div class="relative group cursor-pointer">
                            <svg class="w-52 h-52 transform -rotate-90" viewBox="0 0 200 200">
                                <defs>
                                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color: #f1f5f9; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #e2e8f0; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #8b5cf6; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #a78bfa; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #f43f5e; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #fb7185; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #ec4899; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #f472b6; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #06b6d4; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #22d3ee; stop-opacity: 1" />
                                    </linearGradient>
                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color: #10b981; stop-opacity: 1" />
                                        <stop offset="100%" style="stop-color: #34d399; stop-opacity: 1" />
                                    </linearGradient>
                                </defs>

                                <circle cx="100" cy="100" r="85" fill="url(#bgGradient)" stroke="#e2e8f0" stroke-width="1.5" />
                                <circle cx="100" cy="100" r="82" stroke="#e2e8f0" stroke-width="14" fill="transparent" stroke-linecap="round" />

                                <circle cx="100" cy="100" r="82" stroke="url(#gradient1)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="360" stroke-linecap="round">
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="360" dur="1.5s" fill="freeze" />
                                </circle>
                                <circle cx="100" cy="100" r="82" stroke="url(#gradient2)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="430" stroke-linecap="round" transform="rotate(95 100 100)">
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="430" dur="1.5s" fill="freeze" begin="0.2s" />
                                </circle>
                                <circle cx="100" cy="100" r="82" stroke="url(#gradient3)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="445" stroke-linecap="round" transform="rotate(135 100 100)">
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="445" dur="1.5s" fill="freeze" begin="0.4s" />
                                </circle>
                                <circle cx="100" cy="100" r="82" stroke="url(#gradient4)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="475" stroke-linecap="round" transform="rotate(170 100 100)">
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="475" dur="1.5s" fill="freeze" begin="0.6s" />
                                </circle>
                                <circle cx="100" cy="100" r="82" stroke="url(#gradient5)" stroke-width="14" fill="transparent" stroke-dasharray="515.2" stroke-dashoffset="490" stroke-linecap="round" transform="rotate(205 100 100)">
                                    <animate attributeName="stroke-dashoffset" from="515.2" to="490" dur="1.5s" fill="freeze" begin="0.8s" />
                                </circle>
                            </svg>

                            <!-- Centro -->
                            <div class="absolute inset-0 flex flex-col items-center justify-center m-9 bg-white rounded-full border border-gray-100">
                                <div class="flex flex-col items-center gap-1">
                                    <span class="text-[10px] text-indigo-500 font-bold uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">Total</span>
                                    <div class="flex items-baseline gap-0.5 mt-0.5">
                                        <span class="text-xs font-bold text-slate-500">R$</span>
                                        <span class="text-3xl font-black text-slate-800">2.450</span>
                                    </div>
                                    <div class="flex flex-col items-center mt-0.5">
                                        <div class="w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"></div>
                                        <span class="text-[9px] text-slate-400 font-medium mt-1">vs mês anterior</span>
                                        <span class="text-[11px] font-semibold text-emerald-500">+12,5%</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Tooltip hover -->
                            <div class="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-1">
                                <div class="bg-slate-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap flex items-center gap-1.5 shadow-lg">
                                    <TrendingUp class="w-3 h-3 text-emerald-400" />
                                    <span>Ver detalhes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- LISTA -->
                    <div class="flex-1 space-y-1.5 self-center">
                        <div v-for="cat in spendingCategories" :key="cat.label" class="flex items-center gap-3 px-3 py-1.5 rounded-xl transition-colors border"
                            :class="cat.highlight ? 'bg-purple-50/80 border-purple-100' : 'hover:bg-gray-50 border-transparent hover:border-gray-100'" >
                            <div class="w-8 h-8 shrink-0 flex items-center justify-center rounded-xl"
                                :class="[cat.iconBg, cat.iconText, cat.highlight ? 'shadow-sm shadow-purple-200' : '']">
                                <component :is="cat.icon" class="w-4 h-4" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center gap-1.5">
                                        <span class="text-sm font-medium text-gray-800">{{ cat.label }}</span>
                                        <span v-if="cat.highlight" class="text-[10px] font-bold text-purple-500 bg-purple-100 px-1.5 py-0.5 rounded-full leading-none">Top</span>
                                    </div>
                                    <span class="text-xs font-semibold tabular-nums" :class="cat.pctColor">
                                        {{ cat.pct.toFixed(2).replace('.', ',') }}%
                                    </span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="flex-1 h-1.5 rounded-full overflow-hidden" :class="cat.barBg">
                                        <div class="h-full rounded-full transition-all duration-700" :class="cat.bar" :style="`width: ${cat.pct}%`"></div>
                                    </div>
                                    <span class="text-[11px] text-gray-400 shrink-0 tabular-nums">{{ cat.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="pt-4 mt-4 border-t border-gray-100 flex-shrink-0 flex items-center justify-between">
                    <span class="text-xs text-gray-400">Comparado ao mês anterior</span>
                    <div class="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        <TrendingUp class="w-3.5 h-3.5" />
                        <span class="text-xs font-semibold">-5% nos gastos</span>
                    </div>
                </div>
            </div>

            <!-- SEÇÃO: CARTÃO DE CRÉDITO -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800">Meus Cartões</h2>
                        <p class="text-xs text-gray-500">Exibindo os últimos 3 cartões</p>
                    </div>
                    <button @click="isModalOpen = true" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg transition-all">
                        Ver Todos
                    </button>
                </div>

                <!-- Lista de Cartões (Espaçada para alinhar com 6 metas) -->
                <div class="flex-1 flex flex-col justify-start space-y-6">
                    <!-- Cartão 1 -->
                    <div class="relative overflow-hidden p-6 rounded-md bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-100 group transition-transform hover:scale-[1.01]">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Banco Inter</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 4321</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                                alt="Mastercard"
                                class="h-6 opacity-90"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 1.240,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-2xl border border-white/30">Aberta</span >
                        </div>
                    </div>

                    <!-- Cartão 2 -->
                    <div class="relative overflow-hidden p-6 rounded-md bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-100 group transition-transform hover:scale-[1.01]" >
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Santander</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 9876</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/960px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png"
                                class="h-4 opacity-90 brightness-0 invert" alt="Visa"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 860,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-black/20 backdrop-blur-md px-3 py-1 roudend-2xl border border-white/10">Fechada</span>
                        </div>
                    </div>

                    <!-- Cartão 3 -->
                    <div class="relative overflow-hidden p-6 rounded-md bg-gradient-to-br from-purple-600 to-indigo-800 text-white shadow-lg shadow-purple-100 group transition-transform hover:scale-[1.01]">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <p class="text-[10px] uppercase tracking-widest opacity-80 font-bold">Nubank</p>
                                <p class="text-sm font-medium tracking-[0.2em]">•••• 1122</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                                alt="Mastercard"
                                class="h-6 opacity-90"
                            />
                        </div>
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[10px] opacity-70 mb-1 font-semibold uppercase">Fatura Atual</p>
                                <p class="text-xl font-extrabold">R$ 2.150,00</p>
                            </div>
                            <span class="text-[10px] font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-2xl border border-white/30">Aberta</span>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-4 border-t border-gray-50">
                    <button class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        <Plus class="w-4 h-4" /> Novo Cartão
                    </button>
                </div>
            </div>

            <!-- SEÇÃO: METAS FINANCEIRAS -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full min-h-[720px]">
                <!-- Header -->
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-base font-bold text-gray-800">Metas de Outubro</h2>
                        <p class="text-xs text-gray-400 mt-0.5">Acompanhe seus gastos por categoria</p>
                    </div>
                    <!-- Progresso geral com mini donut -->
                    <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2">
                        <div class="relative w-10 h-10 shrink-0">
                            <svg class="w-full h-full -rotate-90" viewBox="0 0 44 44">
                                <circle cx="22" cy="22" r="18" fill="none" stroke="#dcfce7" stroke-width="4" />
                                <circle cx="22" cy="22" r="18" fill="none" stroke="#10b981" stroke-width="4"
                                    stroke-dasharray="113.1" stroke-dashoffset="39.6" stroke-linecap="round" />
                            </svg>
                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-black text-emerald-600">65%</span>
                        </div>
                        <div class="leading-tight">
                            <p class="text-sm font-bold text-gray-800">65%</p>
                            <p class="text-[10px] text-gray-400">Progresso geral</p>
                        </div>
                    </div>
                </div>

                <!-- Lista de Metas -->
                <div class="flex-1 flex flex-col justify-between py-1">
                    <div v-for="g in goals" :key="g.label" class="flex items-start gap-3">
                        <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center mt-0.5"
                            :class="[g.iconBg, g.iconText]">
                            <component :is="g.icon" class="w-5 h-5" />
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between mb-1.5">
                                <div class="flex items-center gap-1.5">
                                    <span class="text-sm font-semibold text-gray-800">{{ g.label }}</span>
                                    <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none" :class="goalStatus(pctOf(g)).cls">
                                        {{ goalStatus(pctOf(g)).label }}
                                    </span>
                                </div>
                                <span class="text-sm font-bold tabular-nums" :class="g.pctColor">{{ pctOf(g) }}%</span>
                            </div>
                            <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-700"
                                    :class="goalBarColor(pctOf(g), g.bar)"
                                    :style="`width: ${pctOf(g)}%`">
                                </div>
                            </div>
                            <div class="mt-1.5 flex justify-between text-[10px] text-gray-400">
                                <span>R$ {{ g.spent.toLocaleString('pt-BR') }} gastos</span>
                                <span>R$ {{ (g.limit - g.spent).toLocaleString('pt-BR') }} restantes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-4 pt-4 border-t border-gray-100">
                    <button class="w-full flex items-center justify-center gap-1.5 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors">
                        <CirclePlus class="w-4 h-4" /> Criar nova meta
                    </button>
                </div>
            </div>
        </div>
        <!-- END | FIM -->

        <!-- Próximas Contas -->
        <div class="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                    <h2 class="text-base font-bold text-gray-800">Próximas Contas</h2>
                    <p class="text-xs text-gray-400 mt-0.5">{{ upcomingBills.length }} contas a vencer</p>
                </div>
                <a href="/app/lancamentos" class="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors">
                    Ver lançamentos
                </a>
            </div>

            <!-- Lista -->
            <div class="divide-y divide-gray-50">
                <div v-for="bill in visibleBills" :key="bill.id" class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/60 transition-colors">
                    <!-- Ícone -->
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        :class="[bill.iconBg, bill.iconText]">
                        <component :is="bill.icon" class="w-5 h-5" />
                    </div>

                    <!-- Info -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="text-sm font-semibold text-gray-800 truncate">{{ bill.name }}</span>
                            <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
                                :class="billUrgencyClass(bill.daysLeft)">
                                {{ billUrgencyLabel(bill.daysLeft) }}
                            </span>
                        </div>
                        <p class="text-xs text-gray-400">{{ bill.category }} · {{ bill.dueDate }}</p>
                    </div>

                    <!-- Valor + ação -->
                    <div class="flex items-center gap-3 shrink-0">
                        <span class="text-sm font-bold text-gray-800 tabular-nums">{{ fmtMoney(bill.amount) }}</span>
                        <button @click="bill.paid = true"
                            class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-300 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
                            title="Marcar como pago" >
                            <Check class="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                <p class="text-xs text-gray-400">
                    Mostrando {{ visibleBills.length }} de {{ upcomingBills.length }}
                    <span v-if="hiddenBillsCount > 0"> · <span class="text-gray-500 font-medium">+{{ hiddenBillsCount }} ocultas</span></span>
                    · Total: <span class="font-semibold text-gray-700">{{ fmtMoney(totalBills) }}</span>
                </p>
                <a href="/app/lancamentos" class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                    Ver lançamentos <ChevronRight class="w-3.5 h-3.5" />
                </a>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </main>

    <!-- Modal de nova despesa -->
    <div id="expense-modal" class="hidden   fixed inset-0 z-[9999] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="expense-modal-title">
        <div class="flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <!-- Cabeçalho -->
            <header class="flex shrink-0 items-center justify-between border-b border-gray-200/70 px-6 py-5">
                <div>
                    <!-- p class="text-xs font-semibold uppercase tracking-[0.16em] text-red-500">Lançamento</p -->
                    <h2 id="expense-modal-title" class="mt-1 text-lg font-semibold text-slate-800">Nova despesa</h2>
                </div>

                <button id="close-expense-modal" type="button" aria-label="Fechar modal" class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-red-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </header>

            <!-- Formulário -->
            <form id="expense-form" class="flex min-h-0 flex-1 flex-col">
                <!-- Conteúdo com rolagem -->
                <div class="min-h-0 flex-1 space-y-6 overflow-y-auto p-6">
                    <!-- Descrição -->
                    <div>
                        <label for="expense-description" class="mb-1.5 block text-xs font-medium text-slate-500">Descrição</label>
                        <input
                            id="expense-description"
                            name="description"
                            type="text"
                            placeholder="Ex.: Aluguel, supermercado..."
                            autocomplete="off"
                            class="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-800
                            outline-none transition placeholder:text-slate-400 "/>
                    </div>

                    <!-- Valor e data -->
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label for="expense-value" class="mb-1.5 block text-xs font-medium text-slate-500">Valor</label>
                            <div class="relative">
                                <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">R$</span>
                                <input
                                    id="expense-value"
                                    name="value"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="0,00"
                                    class="w-full rounded-md border border-slate-300 py-3 pl-11 pr-4 text-lg
                                    font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 "
                                />
                            </div>
                        </div>

                        <div>
                            <label for="expense-date" class="mb-1.5 block text-xs font-medium text-slate-500">Data</label>
                            <input
                                id="expense-date"
                                name="date"
                                type="date"
                                class="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition "
                            />
                        </div>
                    </div>

                    <!-- Conta e categoria -->
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label for="expense-account" class="mb-1.5 block text-xs font-medium text-slate-500">Conta / Cartão</label>
                            <select
                                id="expense-account"
                                name="account"
                                class="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm
                                text-slate-700 outline-none transition  "
                            >
                                <option value="">Selecione a conta...</option>
                                <option value="conta-corrente">Conta corrente</option>
                                <option value="cartao-credito">Cartão de crédito</option>
                                <option value="carteira">Carteira</option>
                            </select>
                        </div>

                        <div>
                            <label for="expense-category" class="mb-1.5 block text-xs font-medium text-slate-500">Categoria</label>
                            <select id="expense-category" name="category" class="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 transition-all duration-200 outline-none ">
                                <option value="">Selecione a categoria...</option>
                                <option value="alimentacao">Alimentação</option>
                                <option value="moradia">Moradia</option>
                                <option value="transporte">Transporte</option>
                                <option value="lazer">Lazer</option>
                                <option value="saude">Saúde</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>

                    <!-- Observação -->
                    <div>
                        <label for="expense-note" class="mb-1.5 block text-xs font-medium text-slate-500">
                            Observação
                            <span class="font-normal text-slate-400">(opcional)</span>
                        </label>
                        <textarea
                            id="expense-note"
                            name="note"
                            rows="3"
                            placeholder="Adicione uma observação..."
                            class="min-h-24 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-sm
                            text-slate-800 outline-none transition placeholder:text-slate-400 "></textarea>
                    </div>

                    <!-- Mais opções -->
                    <fieldset>
                        <legend class="mb-3 text-xs font-medium text-slate-500">Mais opções</legend>
                        <div class="grid grid-cols-4 gap-2 sm:gap-3">
                            <!-- Repetir -->
                            <button type="button" class="group flex flex-col items-center gap-2 p-2 text-center transition ">
                                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-[#E8FFF7] group-hover:text-[#00BC7D] group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
                                        <path d="m17 2 4 4-4 4" />
                                        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                                        <path d="m7 22-4-4 4-4" />
                                        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                                    </svg>
                                </span>
                                <span class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Repetir</span>
                            </button>

                            <!-- Observação -->
                            <button type="button" class="group flex flex-col items-center gap-2 p-2 text-center transition ">
                                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-[#E8FFF7] group-hover:text-[#00BC7D] group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
                                        <path d="M7 11h10" />
                                        <path d="M7 15h6" />
                                        <path d="M7 7h8" />
                                    </svg>
                                </span>
                                <span class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Obs.</span>
                            </button>

                            <!-- Anexo -->
                            <button type="button" class="group flex flex-col items-center gap-2 border border-transparent p-2 text-center transition ">
                                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-[#E8FFF7] group-hover:text-[#00BC7D] group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
                                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                                    </svg>
                                </span>
                                <span class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Anexo</span>
                            </button>

                            <!-- Tags -->
                            <button type="button" class="group flex flex-col items-center gap-2 p-2 text-center transition ">
                                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-200 group-hover:bg-[#E8FFF7] group-hover:text-[#00BC7D] group-hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
                                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
                                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
                                    </svg>
                                </span>
                                <span class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Tags</span>
                            </button>
                        </div>
                    </fieldset>
                </div>

                <!-- Rodapé -->
                <footer class="flex shrink-0 flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50/80 px-6 py-4 sm:flex-row sm:justify-end">
                    <button id="cancel-expense-modal" type="button" class="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-500/10">
                        Cancelar
                    </button>

                    <button type="submit" class="rounded-md bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/20">
                        Salvar despesa
                    </button>
                </footer>
            </form>
        </div>
    </div>


    <!-- MODAL DE CARTÕES -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="isModalOpen = false"></div>

        <!-- MODAL -->
        <div class="relative bg-white w-full max-w-lg mx-4 rounded-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-6 border-b flex justify-between items-start">
                <div>
                    <h3 class="text-lg font-bold text-gray-800">Todos os Cartões</h3>
                    <p class="text-xs text-gray-400 mt-1">{{ cards.length }} de {{ MAX_CARDS }} cartões</p>
                </div>

                <button @click="isModalOpen = false" class="p-2 hover:bg-grpt-br ay-100 rounded-full">
                    <X class="w-5 h-5 text-gray-400" />
                </button>
            </div>

            <!-- LISTAGEM -->
            <div class="p-6 flex-1 overflow-y-auto space-y-4">
                <div v-for="(card, index) in cards" :key="index" class="p-4 border border-gray-300 rounded-md flex justify-between items-center hover:bg-gray-200 transition">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden border border-gray-200 bg-white shadow-xs p-0 flex items-center justify-center shrink-0">
                            <img
                                v-if="card.logo"
                                :src="card.logo"
                                :alt="card.bank"
                                class="w-full h-full object-cover"
                            />
                            <span v-else class="text-xs font-bold text-gray-500">
                                {{ card.bank.slice(0,2).toUpperCase() }}
                            </span>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-700">{{ card.bank }}</p>
                            <p class="text-xs text-gray-400">{{ card.number }}</p>
                        </div>
                    </div>

                    <div class="text-right">
                        <p class="text-sm font-bold text-gray-700">{{ card.value }}</p>
                        <span class="text-[10px] font-bold uppercase" :class="card.status === 'Aberta' ? 'text-emerald-500' : 'text-gray-400'">
                            {{ card.status }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="p-5 border-t border-gray-100 bg-gray-50">
                <!-- LIMITE ATINGIDO -->
                <div v-if="isLimitReached" class="space-y-3 text-center">
                    <p class="text-xs text-red-400 font-semibold">Limite de cartões atingido</p>

                    <button @click="goToCardsPage" class="hover:cursor-point w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition">
                        Ver todos os cartões
                    </button>
                </div>

                <!-- NORMAL -->
                <button v-else class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition">
                    <Plus class="w-4 h-4" />
                    Adicionar Novo Cartão
                </button>
            </div>
        </div>
    </div>
</template>
