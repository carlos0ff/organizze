<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/navigation/Navbar.vue';
import Footer from '@/Components/layout/Footer.vue';
import {
    ChevronDown, Check, X,
    RefreshCcw, Shield, Lock, Headphones,
    Star, Zap, ArrowRight, BadgeCheck,
} from 'lucide-vue-next';

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

// --- Tabela comparativa ---
const compareRows = [
    { label: 'Lançamentos',        manual: 'Ilimitados', conectado: 'Ilimitados',   plus: 'Ilimitados'      },
    { label: 'Contas bancárias',   manual: 'Até 2',      conectado: 'Até 3',        plus: 'Ilimitadas'      },
    { label: 'Conexão automática', manual: false,         conectado: true,           plus: true              },
    { label: 'Relatórios',         manual: 'Básico',      conectado: 'Completo',     plus: 'Completo'        },
    { label: 'Metas financeiras',  manual: 'Até 3',       conectado: 'Ilimitadas',   plus: 'Ilimitadas'      },
    { label: 'Exportação',         manual: false,         conectado: 'PDF e CSV',    plus: 'PDF, CSV, Excel' },
    { label: 'Múltiplos usuários', manual: false,         conectado: false,          plus: 'Até 5 usuários'  },
    { label: 'Suporte',            manual: 'E-mail',      conectado: 'Prioritário',  plus: 'Dedicado'        },
    { label: 'Categorias custom',  manual: true,          conectado: true,           plus: true              },
    { label: 'App mobile',         manual: true,          conectado: true,           plus: true              },
];

// --- Status do plano atual ---
const usageStats = [
    { label: 'Lançamentos', used: 38, limit: '∞', pct: 0  },
    { label: 'Contas',      used: 1,  limit: '2',  pct: 50 },
    { label: 'Metas',       used: 2,  limit: '3',  pct: 66 },
];

// --- Depoimentos ---
const testimonials = [
    { name: 'Ana Clara',  role: 'Designer Freelancer', avatar: 'https://i.pravatar.cc/100?img=47', rating: 5, text: 'Finalmente consegui entender para onde meu dinheiro vai. O Organizze mudou minha relação com as finanças!' },
    { name: 'Ricardo S.', role: 'Analista de TI',      avatar: 'https://i.pravatar.cc/100?img=12', rating: 5, text: 'A conexão bancária automática economiza muito tempo. Vale cada centavo do plano Conectado.' },
    { name: 'Juliana M.', role: 'Empreendedora',       avatar: 'https://i.pravatar.cc/100?img=32', rating: 5, text: 'Uso com meu marido no plano Plus. Conseguimos organizar as finanças da família e do negócio juntos.' },
];

// --- FAQ ---
const faqs = [
    { q: 'Posso cancelar a qualquer momento?',     a: 'Sim, sem multa ou fidelidade. Você mantém o acesso até o fim do período pago.' },
    { q: 'O plano anual tem desconto?',             a: 'Sim, 15% de desconto em relação ao valor mensal. Pode ser pago à vista ou em 12x.' },
    { q: 'Quais formas de pagamento são aceitas?',  a: 'Cartão de crédito (Visa, Mastercard, Elo, Amex), PIX e boleto bancário.' },
    { q: 'Posso mudar de plano depois?',            a: 'Sim. Upgrade ou downgrade a qualquer momento, com ajuste proporcional de cobrança.' },
    { q: 'Meus dados ficam seguros?',               a: 'Todos os dados são criptografados com TLS e armazenados em servidores ISO 27001.' },
    { q: 'O que é a conexão bancária automática?',  a: 'Integração com o Open Finance do Banco Central para importar transações automaticamente.' },
];

const openFaq = ref(null);
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i; }
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

            <!-- ── Status do plano atual ── -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-12 mb-10">
                <div class="flex items-start justify-between mb-5">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <BadgeCheck class="w-5 h-5 text-emerald-500" />
                            <h2 class="text-base font-bold text-gray-800">Seu plano atual: Manual</h2>
                        </div>
                        <p class="text-xs text-gray-400">Renovação em <span class="font-semibold text-gray-600">10/12/2025</span></p>
                    </div>
                    <a href="#" class="flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors">
                        Ver fatura <ArrowRight class="w-3.5 h-3.5" />
                    </a>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="stat in usageStats" :key="stat.label">
                        <div class="flex items-center justify-between text-xs mb-1.5">
                            <span class="text-gray-500">{{ stat.label }}</span>
                            <span class="font-semibold text-gray-700">{{ stat.used }} / {{ stat.limit }}</span>
                        </div>
                        <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-700"
                                :class="stat.pct >= 80 ? 'bg-amber-400' : 'bg-emerald-500'"
                                :style="`width: ${stat.pct || 8}%`"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                    <Zap class="w-4 h-4 text-amber-500 shrink-0" />
                    <p class="text-xs text-gray-500">
                        Você está usando 2 de 3 metas disponíveis. Faça
                        <span class="font-semibold text-emerald-600">upgrade para o Plano Conectado</span>
                        e tenha metas ilimitadas.
                    </p>
                </div>
            </div>

            <!-- ── Tabela comparativa ── -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10">
                <div class="px-6 py-5 border-b border-gray-100">
                    <h2 class="text-base font-bold text-gray-800">Comparativo completo de recursos</h2>
                    <p class="text-xs text-gray-400 mt-0.5">Veja todos os detalhes antes de escolher seu plano</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-gray-50">
                                <th class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-6 py-3 w-1/2">Recurso</th>
                                <th v-for="plan in plans" :key="plan.id"
                                    class="text-center text-xs font-bold px-4 py-3"
                                    :class="plan.popular ? 'text-emerald-600' : 'text-gray-600'">
                                    {{ plan.name.replace('Plano ', '') }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-for="row in compareRows" :key="row.label" class="hover:bg-gray-50/60 transition-colors">
                                <td class="px-6 py-3 text-sm text-gray-700">{{ row.label }}</td>
                                <td v-for="plan in plans" :key="plan.id" class="text-center px-4 py-3">
                                    <template v-if="row[plan.id] === true">
                                        <Check class="w-4 h-4 text-emerald-500 mx-auto" />
                                    </template>
                                    <template v-else-if="row[plan.id] === false">
                                        <X class="w-4 h-4 text-gray-200 mx-auto" />
                                    </template>
                                    <template v-else>
                                        <span class="text-xs text-gray-600 font-medium">{{ row[plan.id] }}</span>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ── Garantias ── -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div v-for="g in [
                    { icon: RefreshCcw, title: 'Cancele quando quiser', desc: 'Sem multa ou fidelidade',      color: 'text-emerald-500', bg: 'bg-emerald-50' },
                    { icon: Shield,     title: 'Dados protegidos',       desc: 'Criptografia TLS em tudo',     color: 'text-blue-500',    bg: 'bg-blue-50'    },
                    { icon: Lock,       title: 'Pagamento seguro',        desc: 'PCI DSS · PIX · Boleto',       color: 'text-purple-500',  bg: 'bg-purple-50'  },
                    { icon: Headphones, title: 'Suporte humano',          desc: 'Equipe brasileira disponível', color: 'text-amber-500',   bg: 'bg-amber-50'   },
                ]" :key="g.title"
                    class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" :class="[g.bg, g.color]">
                        <component :is="g.icon" class="w-5 h-5" />
                    </div>
                    <p class="text-sm font-bold text-gray-800 mb-0.5">{{ g.title }}</p>
                    <p class="text-xs text-gray-400">{{ g.desc }}</p>
                </div>
            </div>

            <!-- ── Depoimentos ── -->
            <div class="mb-10">
                <h2 class="text-lg font-bold text-gray-800 text-center mb-6">O que dizem nossos usuários</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div v-for="t in testimonials" :key="t.name"
                        class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                        <div class="flex items-center gap-0.5 mb-3">
                            <Star v-for="i in t.rating" :key="i" class="w-4 h-4 text-amber-400 fill-amber-400" />
                        </div>
                        <p class="text-sm text-gray-600 leading-relaxed mb-4">"{{ t.text }}"</p>
                        <div class="flex items-center gap-3">
                            <img :src="t.avatar" :alt="t.name" class="w-9 h-9 rounded-full object-cover" />
                            <div>
                                <p class="text-sm font-semibold text-gray-800">{{ t.name }}</p>
                                <p class="text-xs text-gray-400">{{ t.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── FAQ ── -->
            <div class="mb-10">
                <h2 class="text-lg font-bold text-gray-800 text-center mb-6">Perguntas frequentes</h2>
                <div class="space-y-2 max-w-2xl mx-auto">
                    <div v-for="(faq, i) in faqs" :key="i"
                        class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <button @click="toggleFaq(i)"
                            class="w-full flex items-center justify-between px-5 py-4 text-left">
                            <span class="text-sm font-semibold text-gray-800">{{ faq.q }}</span>
                            <ChevronDown class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200"
                                :class="openFaq === i ? 'rotate-180' : ''" />
                        </button>
                        <div v-if="openFaq === i" class="px-5 pb-4">
                            <p class="text-sm text-gray-500 leading-relaxed">{{ faq.a }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── CTA final ── -->
            <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
                <h2 class="text-xl font-extrabold mb-2">Pronto para organizar suas finanças?</h2>
                <p class="text-emerald-100 text-sm mb-6">Mais de 500 mil pessoas já usam o Organizze para cuidar do dinheiro.</p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="/app" class="px-6 py-2.5 bg-white text-emerald-600 font-semibold text-sm rounded-xl hover:bg-emerald-50 transition-colors">
                        Continuar no Gratuito
                    </a>
                    <button class="px-6 py-2.5 bg-emerald-700 text-white font-semibold text-sm rounded-xl hover:bg-emerald-800 transition-colors">
                        Assinar Conectado — R$ {{ annual ? fmt(33.25) : fmt(39.90) }}/mês
                    </button>
                </div>
                <p class="text-emerald-200 text-xs mt-4">Sem cartão de crédito necessário · Cancele quando quiser</p>
            </div>

        </main>
    </div>
    <Footer />
</template>
