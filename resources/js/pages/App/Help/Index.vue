<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/layout/Navbar.vue';
import {
    Search, MessageCircle, BookOpen, Video, Mail,
    ChevronDown, ChevronUp, ExternalLink, Phone,
    Lightbulb, Zap, LifeBuoy, ArrowRight,
} from 'lucide-vue-next';

const search = ref('');
const openFaq = ref(null);

function toggleFaq(i) {
    openFaq.value = openFaq.value === i ? null : i;
}

const FAQS = [
    {
        q: 'Como adicionar uma nova conta bancária?',
        a: 'Vá em "Minhas Contas" no dashboard e clique no botão "+ Nova Conta". Preencha os dados da instituição, saldo inicial e clique em salvar.',
    },
    {
        q: 'Como registrar uma despesa recorrente?',
        a: 'Ao criar um lançamento, ative a opção "Repetir" no formulário e defina a frequência (diária, semanal, mensal, anual). O Organizze criará automaticamente as próximas ocorrências.',
    },
    {
        q: 'Como funciona a conexão bancária automática?',
        a: 'A conexão bancária está disponível nos planos Pro e Premium. Ela sincroniza seus extratos automaticamente via Open Finance, sem precisar lançar manualmente.',
    },
    {
        q: 'Como exportar meus dados financeiros?',
        a: 'Em "Lançamentos", clique no botão "Exportar" e escolha o formato (CSV, OFX, XLSX). Disponível para planos Pro e Premium.',
    },
    {
        q: 'Como definir um limite de gastos por categoria?',
        a: 'Acesse "Limites de Gastos" no menu principal, clique em "+ Novo Limite", escolha a categoria e defina o valor máximo mensal.',
    },
    {
        q: 'Posso usar o Organizze em mais de um dispositivo?',
        a: 'Sim! Sua conta sincroniza em tempo real entre todos os dispositivos. Acesse pelo navegador, app iOS ou app Android com as mesmas credenciais.',
    },
    {
        q: 'Como cancelar minha assinatura?',
        a: 'Acesse "Meu Plano" no menu do perfil e clique em "Cancelar Assinatura". Você continuará com acesso aos recursos pagos até o fim do período vigente.',
    },
    {
        q: 'Meus dados são seguros no Organizze?',
        a: 'Sim. Todos os dados são criptografados com TLS 1.3 e armazenados em servidores certificados ISO 27001. Nunca compartilhamos seus dados financeiros com terceiros.',
    },
];

const filtered = ref(FAQS.filter(f =>
    !search.value || f.q.toLowerCase().includes(search.value.toLowerCase()),
));

function updateSearch() {
    filtered.value = FAQS.filter(f =>
        !search.value || f.q.toLowerCase().includes(search.value.toLowerCase()),
    );
}
</script>

<template>
    <Navbar />

    <main class="max-w-5xl mx-auto px-4 pt-24 pb-16">

        <!-- Hero -->
        <div class="text-center mb-10">
            <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LifeBuoy class="w-7 h-7 text-emerald-600" />
            </div>
            <h1 class="text-2xl font-bold text-gray-800">Ajuda & Suporte</h1>
            <p class="text-sm text-gray-400 mt-1">Encontre respostas rápidas ou fale com nossa equipe</p>

            <!-- Search -->
            <div class="relative max-w-lg mx-auto mt-6">
                <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input v-model="search" @input="updateSearch" type="text" placeholder="Buscar nas perguntas frequentes..."
                    class="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none shadow-sm transition" />
            </div>
        </div>

        <!-- Quick actions -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <a v-for="item in [
                { icon: MessageCircle, label: 'Chat ao vivo', sub: 'Seg–Sex, 9h–18h', color: 'bg-blue-50 text-blue-600', href: '#' },
                { icon: Mail,          label: 'E-mail',       sub: 'Resposta em 24h', color: 'bg-emerald-50 text-emerald-600', href: '#' },
                { icon: BookOpen,      label: 'Documentação', sub: 'Guias e tutoriais', color: 'bg-purple-50 text-purple-600', href: '#' },
                { icon: Video,         label: 'Vídeo-aulas',  sub: 'Canal no YouTube', color: 'bg-red-50 text-red-500', href: '#' },
            ]" :key="item.label" :href="item.href"
                class="group bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md hover:border-gray-200 transition-all">
                <div :class="[item.color, 'w-10 h-10 rounded-xl flex items-center justify-center mb-3']">
                    <component :is="item.icon" class="w-5 h-5" />
                </div>
                <p class="text-sm font-bold text-gray-800">{{ item.label }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">{{ item.sub }}</p>
                <ArrowRight class="w-3.5 h-3.5 text-gray-300 mt-2 group-hover:text-gray-500 transition-colors" />
            </a>
        </div>

        <!-- FAQ -->
        <div class="mb-10">
            <div class="flex items-center gap-2 mb-4">
                <Lightbulb class="w-5 h-5 text-amber-500" />
                <h2 class="text-base font-bold text-gray-800">Perguntas Frequentes</h2>
                <span class="text-xs text-gray-400 ml-1">({{ filtered.length }} resultados)</span>
            </div>

            <div v-if="filtered.length === 0" class="text-center py-10 text-gray-400">
                <Search class="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p class="text-sm">Nenhuma pergunta encontrada para "{{ search }}"</p>
            </div>

            <div class="space-y-2">
                <div v-for="(faq, i) in filtered" :key="i"
                    class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <button @click="toggleFaq(i)"
                        class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                        <span class="text-sm font-semibold text-gray-800 pr-4">{{ faq.q }}</span>
                        <component :is="openFaq === i ? ChevronUp : ChevronDown"
                            class="w-4 h-4 text-gray-400 shrink-0 transition-transform" />
                    </button>
                    <div v-if="openFaq === i" class="px-5 pb-4">
                        <div class="h-px bg-gray-100 mb-3"></div>
                        <p class="text-sm text-gray-600 leading-relaxed">{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dicas rápidas -->
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-6">
            <div class="flex items-center gap-2 mb-4">
                <Zap class="w-5 h-5 text-emerald-600" />
                <h2 class="text-base font-bold text-gray-800">Dicas rápidas</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a v-for="tip in [
                    { title: 'Primeiros passos', desc: 'Configure sua conta em menos de 5 minutos', icon: '🚀' },
                    { title: 'Atalhos de teclado', desc: 'Navegue mais rápido com os atalhos do app', icon: '⌨️' },
                    { title: 'Importar extratos', desc: 'Suba arquivos OFX do seu banco facilmente', icon: '📥' },
                ]" :key="tip.title" href="#"
                    class="group bg-white rounded-xl p-4 border border-white shadow-sm hover:shadow-md hover:border-emerald-100 transition-all cursor-pointer">
                    <span class="text-2xl block mb-2">{{ tip.icon }}</span>
                    <p class="text-sm font-bold text-gray-800">{{ tip.title }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ tip.desc }}</p>
                    <div class="flex items-center gap-1 mt-2 text-[11px] font-semibold text-emerald-600 group-hover:underline">
                        Ver mais <ExternalLink class="w-3 h-3" />
                    </div>
                </a>
            </div>
        </div>

        <!-- Contact footer -->
        <div class="mt-8 text-center">
            <p class="text-sm text-gray-400">Ainda com dúvidas? Fale conosco em
                <a href="mailto:suporte@organizze.com.br" class="text-emerald-600 font-semibold hover:underline">suporte@organizze.com.br</a>
            </p>
        </div>

    </main>
</template>
