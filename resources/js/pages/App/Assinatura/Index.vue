<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Crown, User, Building2, Check, X,
    CalendarCheck, CreditCard, Plus, Download,
    MoreVertical,
} from 'lucide-vue-next';

// --- Plano atual ---
const currentPlan = {
    name:    'Premium',
    price:   'R$ 29,90/mês',
    renewal: '15/11/2025',
    card:    '•••• 4532',
};

// --- Planos disponíveis ---
const plans = [
    {
        id: 'gratuito', name: 'Gratuito', price: 'R$ 0', unit: 'por mês',
        icon: User, iconBg: 'bg-gray-100', iconColor: 'text-gray-600',
        priceColor: 'text-gray-900', popular: false, active: false,
        features: [
            { label: 'Até 100 transações/mês', ok: true  },
            { label: '3 contas bancárias',       ok: true  },
            { label: 'Relatórios básicos',        ok: true  },
            { label: 'Conexão bancária',          ok: false },
            { label: 'Metas financeiras',         ok: false },
        ],
        btnLabel: 'Plano Atual', btnClass: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    },
    {
        id: 'premium', name: 'Premium', price: 'R$ 29,90', unit: 'por mês',
        icon: Crown, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',
        priceColor: 'text-emerald-500', popular: true, active: true,
        features: [
            { label: 'Transações ilimitadas', ok: true },
            { label: 'Contas ilimitadas',      ok: true },
            { label: 'Relatórios avançados',   ok: true },
            { label: 'Conexão bancária',       ok: true },
            { label: 'Metas financeiras',      ok: true },
            { label: 'Suporte prioritário',    ok: true },
        ],
        btnLabel: 'Plano Ativo', btnClass: 'bg-emerald-500 text-white hover:bg-emerald-600',
    },
    {
        id: 'business', name: 'Business', price: 'R$ 79,90', unit: 'por mês',
        icon: Building2, iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
        priceColor: 'text-purple-600', popular: false, active: false,
        features: [
            { label: 'Tudo do Premium',             ok: true },
            { label: 'Múltiplos usuários',           ok: true },
            { label: 'API de integração',            ok: true },
            { label: 'Relatórios personalizados',    ok: true },
            { label: 'Suporte 24/7',                 ok: true },
        ],
        btnLabel: 'Fazer Upgrade', btnClass: 'bg-purple-600 text-white hover:bg-purple-700',
    },
];

// --- Histórico ---
const history = [
    { date: '15/10/2025', desc: 'Plano Premium - Outubro',  status: 'Pago', value: 'R$ 29,90' },
    { date: '15/09/2025', desc: 'Plano Premium - Setembro', status: 'Pago', value: 'R$ 29,90' },
    { date: '15/08/2025', desc: 'Plano Premium - Agosto',   status: 'Pago', value: 'R$ 29,90' },
    { date: '15/07/2025', desc: 'Plano Premium - Julho',    status: 'Pago', value: 'R$ 29,90' },
];
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-gray-50 pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <!-- Page Header -->
            <div class="mb-8">
                <div class="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900 mb-2">Assinatura</h1>
                            <p class="text-gray-600">Gerencie seu plano e faturamento</p>
                        </div>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                            Plano Premium
                        </span>
                    </div>
                </div>
            </div>

            <!-- Plano Atual -->
            <div class="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Plano Atual</h3>
                    <button class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm">
                        Alterar Plano
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Nome + Preço -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Crown class="w-8 h-8 text-emerald-500" />
                        </div>
                        <h4 class="font-semibold text-gray-900">{{ currentPlan.name }}</h4>
                        <p class="text-2xl font-bold text-emerald-500">{{ currentPlan.price }}</p>
                    </div>

                    <!-- Próximo pagamento -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CalendarCheck class="w-8 h-8 text-emerald-600" />
                        </div>
                        <h4 class="font-semibold text-gray-900">Próximo Pagamento</h4>
                        <p class="text-lg font-medium text-gray-900">{{ currentPlan.renewal }}</p>
                    </div>

                    <!-- Método de pagamento -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CreditCard class="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 class="font-semibold text-gray-900">Método de Pagamento</h4>
                        <p class="text-lg font-medium text-gray-900">{{ currentPlan.card }}</p>
                    </div>
                </div>
            </div>

            <!-- Planos Disponíveis -->
            <div class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-6">Planos Disponíveis</h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="plan in plans" :key="plan.id"
                        class="bg-white rounded-2xl shadow-sm p-6 relative"
                        :class="plan.popular ? 'border-2 border-emerald-500' : 'border border-gray-100'">

                        <!-- Badge popular -->
                        <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                                Mais Popular
                            </span>
                        </div>

                        <!-- Ícone + título + preço -->
                        <div class="text-center mb-6">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                                :class="plan.iconBg">
                                <component :is="plan.icon" class="w-8 h-8" :class="plan.iconColor" />
                            </div>
                            <h4 class="text-xl font-semibold text-gray-900">{{ plan.name }}</h4>
                            <p class="text-3xl font-bold mt-2" :class="plan.priceColor">{{ plan.price }}</p>
                            <p class="text-gray-500 text-sm">{{ plan.unit }}</p>
                        </div>

                        <!-- Features -->
                        <ul class="space-y-3 mb-6">
                            <li v-for="feat in plan.features" :key="feat.label" class="flex items-center gap-3">
                                <Check v-if="feat.ok" class="w-4 h-4 text-emerald-500 shrink-0" />
                                <X v-else class="w-4 h-4 text-gray-300 shrink-0" />
                                <span class="text-sm" :class="feat.ok ? 'text-gray-600' : 'text-gray-400'">
                                    {{ feat.label }}
                                </span>
                            </li>
                        </ul>

                        <button class="w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-colors"
                            :class="plan.btnClass">
                            {{ plan.btnLabel }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Método de Pagamento -->
            <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Método de Pagamento</h3>
                    <button class="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                        <Plus class="w-4 h-4" /> Adicionar Cartão
                    </button>
                </div>

                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-8 bg-blue-600 rounded flex items-center justify-center shrink-0">
                            <CreditCard class="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">•••• •••• •••• 4532</p>
                            <p class="text-sm text-gray-500">Expira em 12/2027</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                            Principal
                        </span>
                        <button class="text-gray-400 hover:text-gray-600 transition-colors">
                            <MoreVertical class="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Histórico de Faturamento -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div class="p-6 border-b border-gray-100">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-gray-900">Histórico de Faturamento</h3>
                        <button class="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                            <Download class="w-4 h-4" /> Baixar Todas
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Data</th>
                                <th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Descrição</th>
                                <th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Status</th>
                                <th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Valor</th>
                                <th class="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-3">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="row in history" :key="row.date" class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-sm text-gray-600">{{ row.date }}</td>
                                <td class="px-6 py-4 text-sm text-gray-900 font-medium">{{ row.desc }}</td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                                        {{ row.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm font-semibold text-gray-900">{{ row.value }}</td>
                                <td class="px-6 py-4">
                                    <button class="p-1.5 text-gray-400 hover:text-emerald-500 transition-colors rounded-lg hover:bg-emerald-50">
                                        <Download class="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>
