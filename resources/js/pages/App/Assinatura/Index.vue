<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Crown, User, Building2, Check, X, Zap,
    CalendarCheck, CreditCard, Plus, Download,
    MoreVertical, Shield, RefreshCcw, Headphones,
    TrendingUp, ArrowUpCircle, Target, ChevronDown,
    AlertTriangle, Star, Sparkles, Lock,
} from 'lucide-vue-next';

// --- Toggle anual/mensal ---
const annual = ref(false);

// --- Planos ---
const plans = [
    {
        id: 'gratuito', name: 'Gratuito',
        monthly: 0, annualMonthly: 0,
        icon: User, iconBg: 'bg-gray-100', iconColor: 'text-gray-500',
        accent: 'gray', popular: false, active: false,
        desc: 'Para quem está começando a organizar as finanças.',
        features: [
            { label: 'Até 100 transações/mês', ok: true  },
            { label: '3 contas bancárias',      ok: true  },
            { label: 'Relatórios básicos',       ok: true  },
            { label: 'Categorias personalizadas',ok: true  },
            { label: 'Conexão bancária',         ok: false },
            { label: 'Metas financeiras',        ok: false },
            { label: 'Suporte prioritário',      ok: false },
        ],
    },
    {
        id: 'premium', name: 'Premium',
        monthly: 29.90, annualMonthly: 25.42,
        icon: Crown, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',
        accent: 'emerald', popular: true, active: true,
        desc: 'Tudo que você precisa para controlar suas finanças.',
        features: [
            { label: 'Transações ilimitadas',  ok: true },
            { label: 'Contas ilimitadas',       ok: true },
            { label: 'Relatórios avançados',    ok: true },
            { label: 'Categorias personalizadas',ok: true },
            { label: 'Conexão bancária',        ok: true },
            { label: 'Metas financeiras',       ok: true },
            { label: 'Suporte prioritário',     ok: true },
        ],
    },
    {
        id: 'business', name: 'Business',
        monthly: 79.90, annualMonthly: 67.92,
        icon: Building2, iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
        accent: 'purple', popular: false, active: false,
        desc: 'Para famílias e pequenas empresas que precisam de mais.',
        features: [
            { label: 'Tudo do Premium',              ok: true },
            { label: 'Até 5 usuários',               ok: true },
            { label: 'API de integração',             ok: true },
            { label: 'Relatórios personalizados',     ok: true },
            { label: 'Exportação Excel/PDF/CSV',      ok: true },
            { label: 'Suporte dedicado 24/7',         ok: true },
            { label: 'Onboarding personalizado',      ok: true },
        ],
    },
];

function price(plan) {
    if (plan.monthly === 0) return 'Grátis';
    const v = annual.value ? plan.annualMonthly : plan.monthly;
    return `R$ ${v.toFixed(2).replace('.', ',')}`;
}
function saving(plan) {
    if (!annual.value || plan.monthly === 0) return null;
    return Math.round((1 - plan.annualMonthly / plan.monthly) * 100);
}

// --- Uso do plano atual ---
const usage = [
    { label: 'Transações',  used: 248, limit: null, pct: 0,  icon: ArrowUpCircle, color: 'emerald' },
    { label: 'Contas',      used: 3,   limit: null, pct: 0,  icon: CreditCard,    color: 'blue'    },
    { label: 'Metas',       used: 5,   limit: null, pct: 0,  icon: Target,        color: 'purple'  },
];

// --- Histórico ---
const history = [
    { id: '#INV-0042', date: '15/10/2025', desc: 'Plano Premium — Outubro',  status: 'Pago', value: 29.90 },
    { id: '#INV-0041', date: '15/09/2025', desc: 'Plano Premium — Setembro', status: 'Pago', value: 29.90 },
    { id: '#INV-0040', date: '15/08/2025', desc: 'Plano Premium — Agosto',   status: 'Pago', value: 29.90 },
    { id: '#INV-0039', date: '15/07/2025', desc: 'Plano Premium — Julho',    status: 'Pago', value: 29.90 },
    { id: '#INV-0038', date: '15/06/2025', desc: 'Plano Premium — Junho',    status: 'Pago', value: 29.90 },
];

function fmt(v) { return v.toLocaleString('pt-BR', { minimumFractionDigits: 2 }); }

// --- Cancelar assinatura ---
const showCancel = ref(false);

// --- Garantias ---
const guarantees = [
    { icon: RefreshCcw, title: 'Cancele quando quiser', desc: 'Sem multa ou fidelidade',      bg: 'bg-emerald-50', color: 'text-emerald-500' },
    { icon: Shield,     title: 'Dados protegidos',       desc: 'Criptografia TLS em tudo',     bg: 'bg-blue-50',    color: 'text-blue-500'    },
    { icon: Lock,       title: 'Pagamento seguro',        desc: 'PCI DSS · PIX · Boleto',       bg: 'bg-purple-50',  color: 'text-purple-500'  },
    { icon: Headphones, title: 'Suporte humano',          desc: 'Equipe brasileira',            bg: 'bg-amber-50',   color: 'text-amber-500'   },
];
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-gray-50 pt-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <!-- ── Banner do plano atual ── -->
            <div class="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 mb-8 shadow-lg">
                <!-- Fundo decorativo -->
                <div class="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/5"></div>
                <div class="absolute right-20 -bottom-8 w-32 h-32 rounded-full bg-white/5"></div>

                <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div class="flex items-center gap-5">
                        <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                            <Crown class="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-white/70 text-sm font-medium">Seu plano</span>
                                <span class="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">ATIVO</span>
                            </div>
                            <h2 class="text-2xl font-extrabold text-white">Premium</h2>
                            <p class="text-emerald-100 text-sm mt-0.5">Renova em <span class="font-semibold text-white">15/11/2025</span> · R$ 29,90/mês</p>
                        </div>
                    </div>

                    <!-- Stats rápidos -->
                    <div class="flex items-center gap-6 text-center">
                        <div v-for="s in usage" :key="s.label">
                            <p class="text-2xl font-extrabold text-white">{{ s.used }}</p>
                            <p class="text-xs text-emerald-100">{{ s.label }}</p>
                        </div>
                    </div>

                    <button class="shrink-0 px-5 py-2.5 bg-white text-emerald-600 font-semibold text-sm rounded-xl hover:bg-emerald-50 transition-colors shadow">
                        Alterar Plano
                    </button>
                </div>
            </div>

            <!-- ── Toggle anual/mensal ── -->
            <div class="flex items-center justify-center gap-3 mb-8">
                <span class="text-sm font-medium text-gray-600">Mensal</span>
                <button @click="annual = !annual"
                    class="relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none"
                    :class="annual ? 'bg-emerald-500' : 'bg-gray-300'">
                    <span class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
                        :class="annual ? 'translate-x-6' : 'translate-x-0'"></span>
                </button>
                <span class="text-sm font-medium text-gray-600">Anual</span>
                <span v-if="annual" class="text-xs font-bold bg-emerald-500 text-white px-2.5 py-1 rounded-full animate-pulse">
                    Economize 15%
                </span>
            </div>

            <!-- ── Planos disponíveis ── -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <div v-for="plan in plans" :key="plan.id"
                    class="relative bg-white rounded-2xl flex flex-col transition-all duration-200"
                    :class="plan.popular
                        ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-100 scale-[1.02]'
                        : 'border border-gray-100 shadow-sm hover:shadow-md'">

                    <!-- Badge popular -->
                    <div v-if="plan.popular" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span class="flex items-center gap-1 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                            <Sparkles class="w-3 h-3" /> Mais Popular
                        </span>
                    </div>

                    <!-- Desconto anual -->
                    <div v-if="annual && plan.monthly > 0" class="absolute -top-3.5 right-4">
                        <span class="bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {{ saving(plan) }}% OFF
                        </span>
                    </div>

                    <div class="p-6 flex flex-col flex-1">
                        <!-- Cabeçalho -->
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" :class="plan.iconBg">
                                <component :is="plan.icon" class="w-5 h-5" :class="plan.iconColor" />
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900">{{ plan.name }}</h4>
                                <p class="text-xs text-gray-400">{{ plan.desc }}</p>
                            </div>
                        </div>

                        <!-- Preço -->
                        <div class="mb-5">
                            <div class="flex items-end gap-1">
                                <span class="text-3xl font-extrabold"
                                    :class="plan.active ? 'text-emerald-600' : plan.id === 'business' ? 'text-purple-600' : 'text-gray-800'">
                                    {{ price(plan) }}
                                </span>
                                <span v-if="plan.monthly > 0" class="text-sm text-gray-400 mb-1">/mês</span>
                            </div>
                            <p v-if="annual && plan.monthly > 0" class="text-xs text-gray-400 mt-0.5">
                                Cobrado R$ {{ fmt(plan.annualMonthly * 12) }}/ano
                            </p>
                            <p v-else-if="plan.monthly > 0" class="text-xs text-gray-400 mt-0.5">Cobrado mensalmente</p>
                        </div>

                        <!-- Features -->
                        <ul class="space-y-2.5 mb-6 flex-1">
                            <li v-for="feat in plan.features" :key="feat.label" class="flex items-center gap-2.5">
                                <span class="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                                    :class="feat.ok ? 'bg-emerald-100' : 'bg-gray-100'">
                                    <Check v-if="feat.ok" class="w-2.5 h-2.5 text-emerald-600" />
                                    <X v-else class="w-2.5 h-2.5 text-gray-400" />
                                </span>
                                <span class="text-sm" :class="feat.ok ? 'text-gray-700' : 'text-gray-400'">
                                    {{ feat.label }}
                                </span>
                            </li>
                        </ul>

                        <!-- Botão -->
                        <button class="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-150"
                            :class="plan.active
                                ? 'bg-emerald-500 text-white cursor-default'
                                : plan.id === 'business'
                                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                                    : 'border border-gray-200 text-gray-600 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50'">
                            {{ plan.active ? '✓ Plano Ativo' : plan.id === 'gratuito' ? 'Fazer Downgrade' : 'Fazer Upgrade' }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- ── Garantias ── -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div v-for="g in guarantees" :key="g.title"
                    class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" :class="[g.bg, g.color]">
                        <component :is="g.icon" class="w-4 h-4" />
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-700 leading-tight">{{ g.title }}</p>
                        <p class="text-[11px] text-gray-400 mt-0.5">{{ g.desc }}</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <!-- ── Método de Pagamento ── -->
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div class="flex items-center justify-between mb-5">
                        <h3 class="text-base font-bold text-gray-900">Método de Pagamento</h3>
                        <button class="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                            <Plus class="w-3.5 h-3.5" /> Adicionar
                        </button>
                    </div>

                    <!-- Card visual -->
                    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white mb-4 shadow-md">
                        <div class="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10"></div>
                        <div class="absolute right-8 bottom-2 w-16 h-16 rounded-full bg-white/5"></div>
                        <div class="flex items-center justify-between mb-6">
                            <CreditCard class="w-6 h-6 text-white/80" />
                            <span class="text-xs font-semibold text-white/70 uppercase tracking-widest">VISA</span>
                        </div>
                        <p class="text-lg font-mono font-semibold tracking-widest mb-4">•••• •••• •••• 4532</p>
                        <div class="flex items-center justify-between text-xs text-white/70">
                            <div>
                                <p class="uppercase tracking-wide mb-0.5">Titular</p>
                                <p class="text-white font-semibold">Carlos Silva</p>
                            </div>
                            <div class="text-right">
                                <p class="uppercase tracking-wide mb-0.5">Validade</p>
                                <p class="text-white font-semibold">12/2027</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                            <Check class="w-3 h-3" /> Cartão principal
                        </span>
                        <button class="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium">
                            Remover
                        </button>
                    </div>
                </div>

                <!-- ── Próxima cobrança ── -->
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                    <h3 class="text-base font-bold text-gray-900 mb-5">Próxima Cobrança</h3>

                    <div class="flex-1 space-y-4">
                        <div class="flex items-center justify-between py-3 border-b border-gray-100">
                            <span class="text-sm text-gray-500">Plano</span>
                            <span class="text-sm font-semibold text-gray-800">Premium</span>
                        </div>
                        <div class="flex items-center justify-between py-3 border-b border-gray-100">
                            <span class="text-sm text-gray-500">Período</span>
                            <span class="text-sm font-semibold text-gray-800">15/11 – 15/12/2025</span>
                        </div>
                        <div class="flex items-center justify-between py-3 border-b border-gray-100">
                            <span class="text-sm text-gray-500">Desconto</span>
                            <span class="text-sm font-semibold text-gray-400">—</span>
                        </div>
                        <div class="flex items-center justify-between py-3">
                            <span class="text-sm font-bold text-gray-800">Total</span>
                            <span class="text-lg font-extrabold text-emerald-600">R$ 29,90</span>
                        </div>
                    </div>

                    <div class="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-2.5">
                        <CalendarCheck class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p class="text-xs text-amber-700">
                            Cobrança automática em <span class="font-bold">15/11/2025</span> no cartão •••• 4532.
                        </p>
                    </div>
                </div>
            </div>

            <!-- ── Histórico de Faturamento ── -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 class="text-base font-bold text-gray-900">Histórico de Faturamento</h3>
                        <p class="text-xs text-gray-400 mt-0.5">{{ history.length }} faturas encontradas</p>
                    </div>
                    <button class="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                        <Download class="w-4 h-4" /> Exportar todas
                    </button>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-gray-50/80">
                                <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Fatura</th>
                                <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Data</th>
                                <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Descrição</th>
                                <th class="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Status</th>
                                <th class="text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Valor</th>
                                <th class="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-for="row in history" :key="row.id"
                                class="hover:bg-gray-50 transition-colors group">
                                <td class="px-6 py-4 text-xs font-mono text-gray-400">{{ row.id }}</td>
                                <td class="px-6 py-4 text-sm text-gray-600">{{ row.date }}</td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-800">{{ row.desc }}</td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        {{ row.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm font-bold text-gray-900 text-right">R$ {{ fmt(row.value) }}</td>
                                <td class="px-6 py-4">
                                    <button class="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600">
                                        <Download class="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ── Cancelar assinatura ── -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div v-if="!showCancel" class="flex items-center justify-between">
                    <div>
                        <h3 class="text-sm font-bold text-gray-700">Cancelar assinatura</h3>
                        <p class="text-xs text-gray-400 mt-0.5">Você mantém o acesso até o fim do período pago.</p>
                    </div>
                    <button @click="showCancel = true"
                        class="text-sm font-medium text-red-500 hover:text-red-600 hover:underline transition-colors">
                        Cancelar plano
                    </button>
                </div>

                <div v-else class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                        <AlertTriangle class="w-5 h-5 text-red-500" />
                    </div>
                    <div class="flex-1">
                        <p class="text-sm font-bold text-gray-800 mb-1">Tem certeza que deseja cancelar?</p>
                        <p class="text-xs text-gray-500 mb-4">Você perderá acesso à conexão bancária, metas ilimitadas e suporte prioritário. O acesso continua até <strong>15/11/2025</strong>.</p>
                        <div class="flex gap-3">
                            <button @click="showCancel = false"
                                class="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                Manter plano
                            </button>
                            <button class="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors">
                                Confirmar cancelamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
