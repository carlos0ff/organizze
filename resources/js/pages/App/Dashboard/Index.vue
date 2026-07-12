<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
    Github, Linkedin, Youtube, Twitter,
    ChevronDown, ChevronRight, X, Ellipsis,
    EyeOff, Download, Plus, Minus, LogOut, Settings,
    CalendarRange, Sun, Sunset, Moon,
    TrendingUp, ArrowRightLeft, ArrowUpCircle, ArrowDownCircle,
    Home, Car, Utensils, TvMinimalPlay, GraduationCap,
    HeartPulse, TreePalm, Gift, ShoppingCart, Gamepad2,
    CirclePlus, Scale, Layers, User, Gem, Bell, Star, HelpCircle,
    AlertTriangle, AlertCircle, Info, CheckCircle2, BarChart2,
    Wifi, Zap, CreditCard, Check,
} from 'lucide-vue-next';

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

// Modal
const isModalOpen = ref(false);
const openModal = (tipo) => { /* futura implementação por tipo */ };
const goToCardsPage = () => { window.location.href = '/app/cards'; };

// Lista de cartões
const cards = ref([
    { bank: 'Nubank',    number: '•••• 5544', value: 'R$ 3.400,00', status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofnubank_br/small-icon-16c0f468c53212697f4a313fe153530b.svg?vsn=d' },
    { bank: 'Santander', number: '•••• 9876', value: 'R$ 860,00',   status: 'Fechada', logo: 'https://app2.organizze.com.br/images/institutions/ofsantander_br/small-icon-48ab948aa91e7eb84f00a77e735b468b.svg?vsn=d' },
    { bank: 'Itaú',      number: '•••• 4321', value: 'R$ 1.240,00', status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofitau_br/small-icon-bd90d464ce1e1882138179cce56399ee.svg?vsn=d' },
    { bank: 'Bradesco',  number: '•••• 7788', value: 'R$ 980,00',   status: 'Aberta',  logo: 'https://app2.organizze.com.br/images/institutions/ofbradesco_br/small-icon-26351a92499d4ca36a3c1327d5bcb7ff.svg?vsn=d' },
]);

const MAX_CARDS = 4;

const displayCards = [
    { bank: 'Itaú',      number: '4321', limit: 5000, value: 1240, status: 'Aberta',  dueDate: '10 Nov',
      cardClass: 'from-orange-400 to-orange-600', shadow: 'shadow-orange-100', bandeira: 'mastercard',
      logoUrl: 'https://img.logo.dev/itau.com.br?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png' },
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
const MAX_BILLS = 4;
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

// Trial bar
const trialDays  = ref(7);
const trialTotal = 30;
const trialPct   = computed(() => Math.round(((trialTotal - trialDays.value) / trialTotal) * 100));
const trialBarDismissed = ref(false);

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
    <nav class="bg-[#22c75e] shadow-lg fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">

                <!-- Logo -->
                <div class="flex items-center">
                    <div class="shrink-0 flex items-center">
                        <img
                            style="filter: brightness(0) invert(1)"
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze"
                            class="logo h-8 w-auto"
                        />
                    </div>
                </div>

                <!-- Nav links -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/app"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Visão Geral
                    </a>
                    <a href="/app/lancamentos"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Lançamentos
                    </a>

                    <!-- Dropdown Relatórios -->
                    <div class="relative group">
                        <a href="/app/relatorios/mensal"
                            class="flex items-center gap-1 text-white font-medium text-sm relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            Relatórios
                            <ChevronDown class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                        </a>

                        <div class="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white shadow-xl border border-gray-100 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <div class="p-1.5">
                                <a href="/app/relatorios/mensal"
                                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-500 shrink-0">
                                        <CalendarRange class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Mensal</p>
                                        <p class="text-xs text-gray-400">Resumo do mês atual</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/anual"
                                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-500 shrink-0">
                                        <BarChart2 class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Anual</p>
                                        <p class="text-xs text-gray-400">Evolução nos últimos 12 meses</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/categorias"
                                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 text-purple-500 shrink-0">
                                        <Layers class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Por Categoria</p>
                                        <p class="text-xs text-gray-400">Gastos detalhados por categoria</p>
                                    </div>
                                </a>
                                <a href="/app/relatorios/receitas-despesas"
                                    class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-500 shrink-0">
                                        <Scale class="w-4 h-4" />
                                    </span>
                                    <div>
                                        <p class="text-sm font-medium text-gray-800">Receitas vs Despesas</p>
                                        <p class="text-xs text-gray-400">Comparativo de entradas e saídas</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="/app/limites"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Limite de Gastos
                    </a>
                    <a href="/app/conexao-bancaria"
                        class="relative text-white font-medium text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Conexão Bancária
                    </a>
                </div>

                <div class="flex items-center space-x-2">
                    <!-- Notificações -->
                    <div class="relative" ref="notifRef">
                        <button
                            @click.stop="notifOpen = !notifOpen"
                            :aria-expanded="notifOpen"
                            aria-haspopup="true"
                            class="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <Bell class="w-5 h-5" />
                            <Transition
                                enter-active-class="transition duration-150 ease-out"
                                enter-from-class="opacity-0 scale-50"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-50"
                            >
                                <span v-if="unreadCount > 0" class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {{ unreadCount }}
                                </span>
                            </Transition>
                        </button>

                        <Transition
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="opacity-0 scale-95 -translate-y-1"
                            enter-to-class="opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100 scale-100 translate-y-0"
                            leave-to-class="opacity-0 scale-95 -translate-y-1"
                        >
                            <div
                                v-if="notifOpen"
                                class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 origin-top-right z-50"
                            >
                                <!-- Cabeçalho -->
                                <div class="px-4 pt-3 pb-2.5 border-b border-gray-100">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm font-semibold text-gray-900">Notificações</span>
                                        <button
                                            v-if="unreadCount > 0"
                                            @click="markAllRead"
                                            class="text-xs font-medium text-[#22c75e] hover:text-green-700 whitespace-nowrap transition-colors"
                                        >
                                            Marcar lidas
                                        </button>
                                    </div>
                                    <span v-if="unreadCount > 0" class="mt-1 inline-flex text-[11px] font-semibold bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">
                                        {{ unreadCount }} novas
                                    </span>
                                </div>

                                <!-- Lista -->
                                <div class="divide-y divide-gray-50 max-h-72 overflow-y-auto">
                                    <button
                                        v-for="n in notifications"
                                        :key="n.id"
                                        @click="n.read = true"
                                        class="w-full flex items-start gap-3 px-4 py-3 text-left transition-colors"
                                        :class="n.read ? 'hover:bg-gray-50' : 'bg-green-50/40 hover:bg-green-50'"
                                    >
                                        <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                                            :class="{
                                                'bg-amber-100 text-amber-500': n.type === 'warning',
                                                'bg-red-100 text-red-500':    n.type === 'danger',
                                                'bg-blue-100 text-blue-500':  n.type === 'info',
                                                'bg-green-100 text-green-500':n.type === 'success',
                                            }"
                                        >
                                            <AlertTriangle  v-if="n.type === 'warning'" class="w-4 h-4" />
                                            <AlertCircle    v-else-if="n.type === 'danger'"  class="w-4 h-4" />
                                            <Info           v-else-if="n.type === 'info'"    class="w-4 h-4" />
                                            <CheckCircle2   v-else                            class="w-4 h-4" />
                                        </span>
                                        <div class="min-w-0 flex-1">
                                            <p class="text-sm font-medium text-gray-900 truncate">{{ n.title }}</p>
                                            <p class="text-xs text-gray-500 mt-0.5 leading-snug">{{ n.body }}</p>
                                            <p class="text-[11px] text-gray-400 mt-1">{{ n.time }}</p>
                                        </div>
                                        <span v-if="!n.read" class="mt-1.5 h-2 w-2 rounded-full bg-[#22c75e] shrink-0"></span>
                                    </button>
                                </div>

                                <!-- Rodapé -->
                                <a
                                    href="/notificacoes"
                                    class="block text-center text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-3 border-t border-gray-100 hover:bg-gray-50 rounded-b-xl transition-colors"
                                >
                                    Ver todas as notificações →
                                </a>
                            </div>
                        </Transition>
                    </div>

                    <div class="relative" ref="profileRef">
                        <button
                            @click.stop="profileOpen = !profileOpen"
                            :aria-expanded="profileOpen"
                            aria-haspopup="true"
                            class="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-white/10 transition-colors"
                        >
                            <div class="relative">
                                <img src="https://i.pravatar.cc/100?img=12" class="h-9 w-9 rounded-full object-cover ring-2 ring-white/30" />
                                <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#22c75e]"></span>
                            </div>
                            <div class="hidden lg:flex flex-col items-start leading-tight">
                                <span class="text-sm text-white font-medium">Thiago Santos</span>
                                <span class="text-[10px] text-white/70">Plano Gratuito</span>
                            </div>
                            <ChevronDown
                                class="w-4 h-4 text-white/70 transition-transform duration-200"
                                :class="{ 'rotate-180': profileOpen }"
                            />
                        </button>

                        <Transition
                            enter-active-class="transition duration-150 ease-out"
                            enter-from-class="opacity-0 scale-95 -translate-y-1"
                            enter-to-class="opacity-100 scale-100 translate-y-0"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100 scale-100 translate-y-0"
                            leave-to-class="opacity-0 scale-95 -translate-y-1"
                        >
                            <div
                                v-if="profileOpen"
                                class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 origin-top-right z-50"
                            >
                                <!-- Cabeçalho -->
                                <div class="p-3 border-b border-gray-100">
                                    <div class="flex items-center gap-3">
                                        <img src="https://i.pravatar.cc/100?img=12" class="h-10 w-10 rounded-full object-cover shrink-0" />
                                        <div class="min-w-0">
                                            <p class="text-sm font-semibold text-gray-900 truncate">Thiago Santos</p>
                                            <p class="text-xs text-gray-500 truncate">thiago@exemplo.com</p>
                                        </div>
                                    </div>
                                    <div class="mt-2.5 flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1.5">
                                        <Gem class="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                        <span class="text-xs font-medium text-amber-700">Plano Gratuito</span>
                                        <a href="/app/assinatura" class="ml-auto text-xs font-semibold text-amber-600 hover:text-amber-800 whitespace-nowrap">
                                            Fazer upgrade →
                                        </a>
                                    </div>
                                </div>

                                <!-- Links -->
                                <div class="p-1.5">
                                    <a href="#" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <User class="w-4 h-4 text-gray-400" /> Meu Perfil
                                    </a>
                                    <a href="/configuracoes" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <Settings class="w-4 h-4 text-gray-400" /> Configurações
                                    </a>
                                    <a href="/help" class="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                        <HelpCircle class="w-4 h-4 text-gray-400" /> Ajuda & Suporte
                                    </a>
                                </div>

                                <!-- Sair -->
                                <div class="p-1.5 border-t border-gray-100">
                                    <button class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <LogOut class="w-4 h-4" /> Sair da conta
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- ── Trial bar ── -->
    <div v-if="!trialBarDismissed"
        class="fixed top-16 left-0 w-full z-40 bg-amber-50 border-b border-amber-200/80 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4">

            <!-- Plano -->
            <div class="flex items-center gap-2 shrink-0">
                <span class="text-sm font-bold text-amber-900">Teste grátis</span>
                <span class="hidden sm:inline text-[11px] font-semibold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
                    Plano manual
                </span>
            </div>

            <!-- Progresso + dias -->
            <div class="flex items-center gap-3 flex-1 max-w-sm">
                <span class="text-xs text-amber-700 whitespace-nowrap font-medium">
                    {{ trialDays }} dias restantes
                </span>
                <div class="flex-1 h-1.5 bg-amber-200 rounded-full overflow-hidden">
                    <div class="h-full bg-amber-500 rounded-full transition-all duration-500"
                        :style="`width: ${trialPct}%`" />
                </div>
                <span class="text-[11px] text-amber-500 font-medium hidden md:inline">{{ trialPct }}%</span>
            </div>

            <!-- CTA + fechar -->
            <div class="flex items-center gap-2 shrink-0">
                <a href="/app/planos"
                    class="text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 px-4 py-1.5 rounded-lg transition-colors shadow-sm shadow-amber-200 whitespace-nowrap">
                    Ver planos
                </a>
                <button @click="trialBarDismissed = true"
                    class="text-amber-400 hover:text-amber-600 transition-colors p-0.5">
                    <X class="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-4 pb-12"
        :class="trialBarDismissed ? 'pt-24' : 'pt-[7rem]'">
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

        <!-- CARD DE TUTORIAL -->
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
                        <div
                            v-for="conta in contas"
                            :key="conta.nome"
                            class="flex justify-between items-center px-3 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all group border border-transparent hover:border-gray-100"
                        >
                            <div class="flex items-center gap-3.5">
                                <div :class="conta.logo ? 'bg-white border border-gray-200 shadow-sm' : conta.cor"
                                    class="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-black overflow-hidden shrink-0">
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
                        <div
                            v-for="cat in spendingCategories"
                            :key="cat.label"
                            class="flex items-center gap-3 px-3 py-1.5 rounded-xl transition-colors border"
                            :class="cat.highlight
                                ? 'bg-purple-50/80 border-purple-100'
                                : 'hover:bg-gray-50 border-transparent hover:border-gray-100'"
                        >
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
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-base font-bold text-gray-800">Meus Cartões</h2>
                        <p class="text-xs text-gray-400 mt-0.5">{{ cards.length }} cartões cadastrados</p>
                    </div>
                    <button
                        @click="isModalOpen = true"
                        class="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                        Ver todos
                    </button>
                </div>

                <div class="flex-1 flex flex-col gap-3">
                    <div
                        v-for="c in displayCards"
                        :key="c.bank"
                        class="relative overflow-hidden p-5 rounded-2xl text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl bg-gradient-to-br"
                        :class="[c.cardClass, c.shadow]"
                    >
                        <!-- Círculos decorativos -->
                        <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none"></div>
                        <div class="absolute right-6 top-14 w-16 h-16 rounded-full bg-white/5 pointer-events-none"></div>

                        <!-- Topo: banco + bandeira -->
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-2.5">
                                <div class="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                    <img :src="c.logoUrl" :alt="c.bank" class="w-6 h-6 object-contain" style="filter: brightness(0) invert(1);" />
                                </div>
                                <div>
                                    <p class="text-[10px] uppercase tracking-widest font-bold opacity-80 leading-tight">{{ c.bank }}</p>
                                    <p class="text-sm font-mono tracking-[0.15em] opacity-90">•••• {{ c.number }}</p>
                                </div>
                            </div>
                            <!-- Bandeira de pagamento -->
                            <img
                                v-if="c.bandeira === 'mastercard'"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='28' viewBox='0 0 46 28'%3E%3Ccircle cx='15' cy='14' r='13' fill='%23EB001B'/%3E%3Ccircle cx='31' cy='14' r='13' fill='%23F79E1B'/%3E%3C/svg%3E"
                                alt="Mastercard"
                                class="h-7 shrink-0"
                            />
                            <img v-else :src="c.bandeiraUrl" :alt="c.bank" class="h-5 opacity-80 brightness-0 invert shrink-0" />
                        </div>

                        <!-- Rodapé: fatura + status -->
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[9px] uppercase tracking-wide opacity-60 font-semibold mb-0.5">Fatura atual</p>
                                <p class="text-xl font-extrabold leading-tight">{{ fmtMoney(c.value) }}</p>
                                <p class="text-[10px] opacity-60 mt-1">Vence {{ c.dueDate }}</p>
                            </div>
                            <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                                :class="c.status === 'Aberta'
                                    ? 'bg-white/20 border-white/30'
                                    : 'bg-black/20 border-white/10 opacity-80'">
                                {{ c.status }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mt-4 pt-4 border-t border-gray-100">
                    <button class="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
                        <Plus class="w-3.5 h-3.5" /> Adicionar cartão
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
                                    <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none"
                                        :class="goalStatus(pctOf(g)).cls">
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
                <div
                    v-for="bill in visibleBills"
                    :key="bill.id"
                    class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/60 transition-colors"
                >
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
                        <button
                            @click="bill.paid = true"
                            class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-300 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
                            title="Marcar como pago"
                        >
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

        <!-- footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p class="mb-4 sm:mb-0">&copy; {{ new Date().getFullYear() }} Organizze. Todos os direitos reservados.</p>

            <div class="flex space-x-6">
                <Github class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-gray-600" />
                <Linkedin class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-600" />
                <Youtube class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-red-600" />
                <Twitter class="w-5 h-5 text-gray-400 cursor-pointer transition-colors duration-200 hover:text-blue-400" />
            </div>
        </footer>
    </main>

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
                <div
                    v-for="(card, index) in cards"
                    :key="index"
                    class="p-4 border border-gray-300 rounded-md flex justify-between items-center hover:bg-gray-200 transition"
                >
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                            <img v-if="card.logo" :src="card.logo" :alt="card.bank" class="w-full h-full object-cover" />
                            <span v-else class="text-xs font-bold text-gray-500">{{ card.bank.slice(0,2).toUpperCase() }}</span>
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

                    <button
                        @click="goToCardsPage"
                        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
                    >
                        Ver todos os cartões
                    </button>
                </div>

                <!-- NORMAL -->
                <button
                    v-else
                    class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
                >
                    <Plus class="w-4 h-4" />
                    Adicionar Novo Cartão
                </button>
            </div>
        </div>
    </div>
</template>

<style>
body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
}

.modal-active {
    overflow: hidden;
}

.modal {
    transition: opacity 0.25s ease;
}

.shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@keyframes pulse-ring {
    0% {
        transform: scale(0.95);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.05);
        opacity: 0;
    }
}

.group:hover .pulse-ring {
    animation: pulse-ring 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
