<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Navbar from '@/Componentes/Layout/Navbar.vue';
import {
    Check, Zap, Crown, Star, X, CreditCard,
    Calendar, ArrowRight, ShieldCheck,
} from 'lucide-vue-next';

const billing = ref('mensal'); // 'mensal' | 'anual'

const plans = [
    {
        key: 'free',
        name: 'Free',
        icon: Star,
        iconColor: 'text-gray-500',
        iconBg: 'bg-gray-100',
        price: { mensal: 0, anual: 0 },
        description: 'Para quem está começando a organizar as finanças.',
        color: 'border-gray-200',
        badge: null,
        cta: 'Plano atual',
        ctaClass: 'bg-gray-100 text-gray-500 cursor-default',
        current: true,
        features: [
            { label: '1 conta bancária', ok: true },
            { label: 'Lançamentos ilimitados', ok: true },
            { label: 'Relatório mensal básico', ok: true },
            { label: 'Limites de gastos', ok: false },
            { label: 'Conexão bancária automática', ok: false },
            { label: 'Relatórios avançados', ok: false },
            { label: 'Exportação de dados', ok: false },
            { label: 'Suporte prioritário', ok: false },
        ],
    },
    {
        key: 'pro',
        name: 'Pro',
        icon: Zap,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        price: { mensal: 19.90, anual: 14.90 },
        description: 'Para quem quer controle total das finanças pessoais.',
        color: 'border-emerald-400 ring-2 ring-emerald-400',
        badge: 'Mais popular',
        badgeClass: 'bg-emerald-500 text-white',
        cta: 'Assinar Pro',
        ctaClass: 'bg-emerald-500 hover:bg-emerald-600 text-white',
        current: false,
        features: [
            { label: 'Contas ilimitadas', ok: true },
            { label: 'Lançamentos ilimitados', ok: true },
            { label: 'Relatório mensal completo', ok: true },
            { label: 'Limites de gastos', ok: true },
            { label: 'Conexão bancária automática', ok: true },
            { label: 'Relatórios avançados', ok: true },
            { label: 'Exportação de dados', ok: false },
            { label: 'Suporte prioritário', ok: false },
        ],
    },
    {
        key: 'premium',
        name: 'Premium',
        icon: Crown,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50',
        price: { mensal: 34.90, anual: 24.90 },
        description: 'Para quem quer o máximo em controle e automação.',
        color: 'border-amber-300',
        badge: null,
        cta: 'Assinar Premium',
        ctaClass: 'bg-amber-500 hover:bg-amber-600 text-white',
        current: false,
        features: [
            { label: 'Contas ilimitadas', ok: true },
            { label: 'Lançamentos ilimitados', ok: true },
            { label: 'Relatório mensal completo', ok: true },
            { label: 'Limites de gastos', ok: true },
            { label: 'Conexão bancária automática', ok: true },
            { label: 'Relatórios avançados', ok: true },
            { label: 'Exportação de dados', ok: true },
            { label: 'Suporte prioritário', ok: true },
        ],
    },
];

function fmt(v) {
    return v === 0 ? 'Grátis' : `R$ ${v.toFixed(2).replace('.', ',')}`;
}
</script>

<template>
    <Navbar />

    <main class="max-w-6xl mx-auto px-4 pt-24 pb-16">

        <!-- Header -->
        <div class="text-center mb-10">
            <h1 class="text-2xl font-bold text-gray-800">Meu Plano</h1>
            <p class="text-sm text-gray-400 mt-1">Escolha o plano ideal para suas necessidades financeiras</p>

            <!-- Billing toggle -->
            <div class="inline-flex items-center gap-2 mt-6 bg-gray-100 rounded-lg p-1">
                <button @click="billing = 'mensal'"
                    :class="billing === 'mensal' ? 'bg-white shadow text-gray-800' : 'text-gray-500'"
                    class="px-5 py-1.5 rounded-md text-sm font-semibold transition-all">
                    Mensal
                </button>
                <button @click="billing = 'anual'"
                    :class="billing === 'anual' ? 'bg-white shadow text-gray-800' : 'text-gray-500'"
                    class="px-5 py-1.5 rounded-md text-sm font-semibold transition-all flex items-center gap-1.5">
                    Anual
                    <span class="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">-25%</span>
                </button>
            </div>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div v-for="plan in plans" :key="plan.key"
                :class="['bg-white rounded-2xl border shadow-sm p-6 flex flex-col relative transition-shadow hover:shadow-md', plan.color]">

                <!-- Badge -->
                <span v-if="plan.badge"
                    :class="plan.badgeClass"
                    class="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 rounded-full">
                    {{ plan.badge }}
                </span>

                <!-- Icon + Name -->
                <div class="flex items-center gap-3 mb-4">
                    <div :class="[plan.iconBg, 'w-10 h-10 rounded-xl flex items-center justify-center']">
                        <component :is="plan.icon" :class="[plan.iconColor, 'w-5 h-5']" />
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800">{{ plan.name }}</h3>
                        <p class="text-[11px] text-gray-400">{{ plan.description }}</p>
                    </div>
                </div>

                <!-- Price -->
                <div class="mb-5">
                    <div v-if="plan.price.mensal === 0" class="text-3xl font-black text-gray-800">Grátis</div>
                    <div v-else class="flex items-end gap-1">
                        <span class="text-sm font-medium text-gray-400">R$</span>
                        <span class="text-3xl font-black text-gray-800">{{ plan.price[billing].toFixed(2).replace('.', ',') }}</span>
                        <span class="text-sm text-gray-400 mb-0.5">/mês</span>
                    </div>
                    <p v-if="billing === 'anual' && plan.price.mensal > 0" class="text-[11px] text-emerald-600 font-semibold mt-1">
                        Cobrado R$ {{ (plan.price.anual * 12).toFixed(2).replace('.', ',') }}/ano
                    </p>
                </div>

                <!-- Features -->
                <ul class="space-y-2.5 flex-1 mb-6">
                    <li v-for="f in plan.features" :key="f.label" class="flex items-center gap-2.5 text-sm">
                        <component :is="f.ok ? Check : X"
                            :class="f.ok ? 'text-emerald-500' : 'text-gray-300'"
                            class="w-4 h-4 shrink-0" />
                        <span :class="f.ok ? 'text-gray-700' : 'text-gray-400'">{{ f.label }}</span>
                    </li>
                </ul>

                <!-- CTA -->
                <button :class="['w-full py-2.5 rounded-xl text-sm font-bold transition-colors', plan.ctaClass]">
                    {{ plan.cta }}
                </button>
            </div>
        </div>

        <!-- Billing info -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 class="text-sm font-bold text-gray-800 mb-4">Informações de cobrança</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                        <CreditCard class="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                        <p class="text-xs font-semibold text-gray-800">Plano atual</p>
                        <p class="text-[11px] text-gray-400">Free — sem cobrança</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                        <Calendar class="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                        <p class="text-xs font-semibold text-gray-800">Próxima cobrança</p>
                        <p class="text-[11px] text-gray-400">—</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                        <ShieldCheck class="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                        <p class="text-xs font-semibold text-gray-800">Pagamento seguro</p>
                        <p class="text-[11px] text-gray-400">SSL + PCI DSS</p>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
