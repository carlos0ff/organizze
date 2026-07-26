<script setup>
import { computed } from 'vue';
import {
    Search, AlertTriangle, HelpCircle, Home, ArrowLeft,
    Lock, ShieldX, AlertOctagon,
    ServerCrash, Wrench,
    Clock, WifiOff,
    RefreshCw, LogIn,
} from 'lucide-vue-next';

const props = defineProps({
    status: { type: Number, required: true },
    url:    { type: String, default: '' },
});

// Hash visual fixo por status (simula o código de rastreamento)
function errorHash(status) {
    const seeds = { 404: 'b719e9ea', 403: 'a3c82f10', 500: 'e5d14b77', 503: 'c90f3d52', 419: 'f18a6c34' };
    return seeds[status] ?? Math.random().toString(16).slice(2, 10);
}

const CONFIGS = {
    404: {
        number:    'text-emerald-500',
        title:     'Oops! Erro 404',
        desc:      (url) => `A página que você está procurando em ${url || '/'} não existe ou foi movida.`,
        hint:      'Não se preocupe, vamos ajudá-lo a voltar ao caminho certo!',
        icons: [
            { icon: Search,        bg: 'bg-emerald-100', color: 'text-emerald-500' },
            { icon: AlertTriangle, bg: 'bg-yellow-100',  color: 'text-yellow-500'  },
            { icon: HelpCircle,    bg: 'bg-blue-100',    color: 'text-blue-400'    },
        ],
        codePrefix: 'ERR_404_NOT_FOUND',
    },
    403: {
        number:    'text-orange-500',
        title:     'Acesso Negado',
        desc:      (url) => `Você não tem permissão para acessar ${url || 'este recurso'}. Faça login com uma conta autorizada.`,
        hint:      'Se acredita que isso é um erro, entre em contato com o suporte.',
        icons: [
            { icon: Lock,          bg: 'bg-orange-100', color: 'text-orange-500' },
            { icon: ShieldX,       bg: 'bg-red-100',    color: 'text-red-400'    },
            { icon: AlertOctagon,  bg: 'bg-yellow-100', color: 'text-yellow-500' },
        ],
        codePrefix: 'ERR_403_FORBIDDEN',
    },
    500: {
        number:    'text-red-500',
        title:     'Erro Interno do Servidor',
        desc:      () => 'Algo inesperado aconteceu nos nossos servidores. Nossa equipe já foi notificada.',
        hint:      'Tente recarregar a página. Se o problema persistir, entre em contato com o suporte.',
        icons: [
            { icon: ServerCrash,   bg: 'bg-red-100',    color: 'text-red-500'    },
            { icon: AlertTriangle, bg: 'bg-orange-100', color: 'text-orange-500' },
            { icon: Wrench,        bg: 'bg-gray-100',   color: 'text-gray-500'   },
        ],
        codePrefix: 'ERR_500_INTERNAL_SERVER',
    },
    503: {
        number:    'text-blue-500',
        title:     'Serviço Indisponível',
        desc:      () => 'O sistema está temporariamente em manutenção. Voltaremos em breve.',
        hint:      'Aguarde alguns instantes e tente novamente. Agradecemos sua paciência.',
        icons: [
            { icon: Clock,         bg: 'bg-blue-100',   color: 'text-blue-500'  },
            { icon: Wrench,        bg: 'bg-yellow-100', color: 'text-yellow-500'},
            { icon: WifiOff,       bg: 'bg-gray-100',   color: 'text-gray-500'  },
        ],
        codePrefix: 'ERR_503_SERVICE_UNAVAILABLE',
    },
    419: {
        number:    'text-yellow-500',
        title:     'Sessão Expirada',
        desc:      () => 'Sua sessão expirou por inatividade. Faça login novamente para continuar.',
        hint:      'Seus dados não foram perdidos. Basta entrar novamente na sua conta.',
        icons: [
            { icon: RefreshCw,     bg: 'bg-yellow-100', color: 'text-yellow-500' },
            { icon: Clock,         bg: 'bg-orange-100', color: 'text-orange-400' },
            { icon: LogIn,         bg: 'bg-blue-100',   color: 'text-blue-400'   },
        ],
        codePrefix: 'ERR_419_SESSION_EXPIRED',
    },
};

const config = computed(() => CONFIGS[props.status] ?? {
    number:     'text-gray-500',
    title:      `Erro ${props.status}`,
    desc:       () => 'Ocorreu um erro inesperado.',
    hint:       'Tente voltar à página inicial.',
    icons: [
        { icon: AlertTriangle, bg: 'bg-gray-100', color: 'text-gray-500' },
        { icon: HelpCircle,    bg: 'bg-gray-100', color: 'text-gray-500' },
        { icon: Wrench,        bg: 'bg-gray-100', color: 'text-gray-500' },
    ],
    codePrefix: `ERR_${props.status}_UNKNOWN`,
});

const errorCode = computed(() => `${config.value.codePrefix}_${errorHash(props.status)}`);

function goBack() { window.history.back(); }
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">

        <!-- Número do erro -->
        <h1 class="text-[120px] font-extrabold leading-none tracking-tight" :class="config.number">
            {{ status }}
        </h1>

        <!-- Ícones decorativos -->
        <div class="flex items-center gap-3 mt-4 mb-6">
            <div v-for="(ic, i) in config.icons" :key="i"
                class="w-12 h-12 rounded-full flex items-center justify-center" :class="ic.bg">
                <component :is="ic.icon" class="w-6 h-6" :class="ic.color" />
            </div>
        </div>

        <!-- Título -->
        <h2 class="text-xl font-bold text-gray-800 mb-3">{{ config.title }}</h2>

        <!-- Descrição -->
        <p class="text-sm text-gray-500 text-center max-w-md leading-relaxed mb-1">
            <template v-if="status === 404 && url">
                A página que você está procurando em
                <span class="inline-block bg-gray-100 text-gray-700 font-mono text-xs px-1.5 py-0.5 rounded mx-0.5">{{ url }}</span>
                não existe ou foi movida.
            </template>
            <template v-else>
                {{ config.desc(url) }}
            </template>
        </p>
        <p class="text-xs text-gray-400 text-center max-w-sm mb-8">{{ config.hint }}</p>

        <!-- Botões -->
        <div class="flex items-center gap-3">
            <a href="/app"
                class="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">
                <Home class="w-4 h-4" /> Voltar ao Início
            </a>
            <button @click="goBack"
                class="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                <ArrowLeft class="w-4 h-4" /> Página Anterior
            </button>
        </div>

        <!-- Rodapé técnico -->
        <div class="mt-16 text-center space-y-1.5">
            <p class="text-xs text-gray-400">
                Código do erro:
                <span class="inline-block bg-red-50 text-red-500 font-mono text-[11px] px-2 py-0.5 rounded ml-1">
                    {{ errorCode }}
                </span>
            </p>
            <p class="text-xs text-gray-400">
                Se o problema persistir, entre em contato com o suporte.
                <template v-if="url"> URI solicitada: <span class="font-mono">{{ url }}</span>.</template>
            </p>
        </div>
    </div>
</template>
