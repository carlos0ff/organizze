<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import { ChevronDown, Check } from 'lucide-vue-next';

const annual = ref(true);

const plans = [
    {
        id: 'manual',
        name: 'Plano Manual',
        desc: 'Para quem gosta de acompanhar cada detalhe e lançar manualmente seus lançamentos.',
        monthly: 19.90,
        annualTotal: 199.90,
        trial: '7 dias de teste grátis',
        popular: false,
        features: [
            'Lançamentos manuais ilimitados',
            'Até 2 contas bancárias',
            'Relatórios básicos',
            'Categorias personalizadas',
            'Orçamento mensal',
        ],
    },
    {
        id: 'conectado',
        name: 'Plano Conectado',
        desc: 'Ideal para quem quer agilidade ao organizar suas finanças e tem poucas contas e cartões.',
        monthly: 39.90,
        annualTotal: 399.90,
        trial: null,
        popular: true,
        features: [
            'Tudo do Plano Manual',
            'Conexão bancária automática',
            'Até 3 contas e cartões',
            'Relatórios completos',
            'Metas financeiras ilimitadas',
        ],
    },
    {
        id: 'plus',
        name: 'Plano Conectado Plus',
        desc: 'Feito para quem precisa gerenciar mais de 3 contas e cartões de forma automática.',
        monthly: 59.90,
        annualTotal: 599.90,
        trial: null,
        popular: false,
        features: [
            'Tudo do Plano Conectado',
            'Contas e cartões ilimitados',
            'Múltiplos usuários (até 5)',
            'Suporte dedicado',
            'Exportação em Excel',
        ],
    },
];

const openFeatures = ref({});
function toggleFeatures(id) {
    openFeatures.value[id] = !openFeatures.value[id];
}

function fmt(v) {
    return v.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#e8f5eb] pt-16">
        <main class="max-w-4xl mx-auto px-4 py-12">

            <!-- Cluster de ícones -->
            <div class="flex justify-center mb-6">
                <img
                    src="https://app.organizze.com.br/assets/application/plans/plans-logo-68d50f218f2b9c8df42afb0c0749fb4d1c0819157fec46657eb0fd59a8386e97.png"
                    alt="Planos"
                    class="h-20 w-auto"
                />
            </div>

            <!-- Título -->
            <div class="text-center mb-8">
                <h1 class="text-2xl font-bold text-gray-900 leading-snug">
                    Sua assinatura venceu.<br />
                    Confira nossos planos e escolha a melhor forma<br />
                    de cuidar do seu dinheiro.
                </h1>
            </div>

            <!-- Toggle Anual -->
            <div class="flex items-center justify-center gap-3 mb-10">
                <button
                    @click="annual = !annual"
                    class="relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none"
                    :class="annual ? 'bg-emerald-500' : 'bg-gray-300'"
                >
                    <span
                        class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
                        :class="annual ? 'translate-x-5' : 'translate-x-0'"
                    ></span>
                </button>
                <span class="text-sm font-semibold text-gray-800">Anual</span>
            </div>

            <!-- Cards dos planos -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="relative bg-white rounded-2xl p-6 flex flex-col"
                    :class="plan.popular
                        ? 'border-2 border-emerald-500 shadow-lg'
                        : 'border border-gray-200 shadow-sm'"
                >
                    <!-- Badge "Mais popular" -->
                    <div v-if="plan.popular" class="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span class="bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                            Mais popular
                        </span>
                    </div>

                    <!-- Nome e descrição -->
                    <h2 class="text-lg font-bold text-gray-900 mb-2">{{ plan.name }}</h2>
                    <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ plan.desc }}</p>

                    <!-- Ver recursos -->
                    <button
                        @click="toggleFeatures(plan.id)"
                        class="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mb-5 w-fit transition-colors"
                    >
                        Ver recursos
                        <ChevronDown
                            class="w-4 h-4 transition-transform duration-200"
                            :class="openFeatures[plan.id] ? 'rotate-180' : ''"
                        />
                    </button>

                    <!-- Lista de recursos -->
                    <Transition
                        enter-active-class="transition duration-200 ease-out"
                        enter-from-class="opacity-0 -translate-y-1"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <ul v-if="openFeatures[plan.id]" class="mb-5 space-y-2">
                            <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-2">
                                <Check class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span class="text-xs text-gray-600">{{ feat }}</span>
                            </li>
                        </ul>
                    </Transition>

                    <!-- Preço -->
                    <div class="mb-1">
                        <p class="text-xs text-gray-500 font-medium">12x de</p>
                        <div class="flex items-end gap-1">
                            <span class="text-3xl font-extrabold text-gray-900">R$ {{ fmt(plan.monthly) }}</span>
                            <span class="text-sm text-gray-400 mb-1">/mês</span>
                        </div>
                    </div>

                    <!-- Anual -->
                    <div v-if="annual" class="flex items-center gap-2 mb-1">
                        <span class="text-xs text-gray-400">ou R${{ fmt(plan.annualTotal) }} à vista</span>
                        <span class="text-[10px] font-bold border border-gray-400 text-gray-500 px-1.5 py-0.5 rounded-full">
                            15% OFF
                        </span>
                    </div>

                    <!-- Trial -->
                    <p class="text-xs mb-6" :class="plan.trial ? 'text-gray-500' : 'text-gray-300'">
                        {{ plan.trial ?? 'sem teste grátis' }}
                    </p>

                    <!-- Botão -->
                    <button
                        class="w-full py-3 rounded-xl text-sm font-bold transition-colors mt-auto"
                        :class="plan.popular
                            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                            : 'border border-emerald-500 text-emerald-600 hover:bg-emerald-50'"
                    >
                        Escolher este plano
                    </button>
                </div>
            </div>

        </main>
    </div>
</template>
