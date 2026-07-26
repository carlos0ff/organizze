<script setup>
import { ref } from 'vue';
import Navbar from '@/Components/navigation/Navbar.vue';
import {
    ArrowLeft, MessageCircle, Search, HelpCircle, Mail, Inbox,
    ChevronDown, Plus, Wallet, Target, CreditCard, BarChart3,
    ShieldCheck, Link, Sparkles, Send, Clock, CheckCircle2, XCircle,
} from 'lucide-vue-next';

const activeTab   = ref('faq');
const searchQuery = ref('');

// ---------- FAQ ----------
const categories = [
    { icon: Wallet,       iconBg: 'bg-blue-100',   iconColor: 'text-blue-500',   title: 'Contas & Lançamentos', desc: 'Cadastro, edição, importação' },
    { icon: Target,       iconBg: 'bg-teal-100',    iconColor: 'text-teal-500',   title: 'Metas & Orçamentos',   desc: 'Como criar e acompanhar' },
    { icon: CreditCard,   iconBg: 'bg-purple-100',  iconColor: 'text-purple-500', title: 'Cartões de Crédito',   desc: 'Fatura, limite, fechamento' },
    { icon: BarChart3,    iconBg: 'bg-orange-100',  iconColor: 'text-orange-500', title: 'Relatórios',           desc: 'Análises, exportações' },
    { icon: ShieldCheck,  iconBg: 'bg-emerald-100', iconColor: 'text-emerald-500',title: 'Conta & Segurança',    desc: 'Acesso, planos, backup' },
    { icon: Link,         iconBg: 'bg-sky-100',     iconColor: 'text-sky-500',    title: 'Conexões Bancárias',   desc: 'Integração, sincronização' },
];

const faqs = ref([
    {
        q: 'Como cadastrar um novo cartão de crédito?',
        a: 'Acesse o menu "Cartão de Crédito" no painel lateral, clique em "+ Novo Cartão" e preencha as informações do banco, número (últimos 4 dígitos), bandeira e limite disponível. Salve para começar a rastrear sua fatura.',
        open: false,
    },
    {
        q: 'Posso importar lançamentos do banco?',
        a: 'Sim! Acesse "Lançamentos" e clique em "Importar". O sistema aceita arquivos OFX e CSV exportados diretamente pelo seu banco. Após o upload, os lançamentos são categorizados automaticamente.',
        open: false,
    },
    {
        q: 'Como criar metas mensais por categoria?',
        a: 'Vá até "Limite de Gastos" e clique em "+ Nova Categoria". Defina o nome, ícone, cor e valor máximo mensal. O sistema irá monitorar seus gastos e alertar quando você se aproximar do limite.',
        open: false,
    },
    {
        q: 'Como funciona a Conexão Bancária?',
        a: 'A Conexão Bancária (Open Finance) permite sincronizar automaticamente suas transações com bancos parceiros. Acesse "Conexão Bancária", escolha sua instituição e siga as etapas de autorização.',
        open: false,
    },
    {
        q: 'Como cancelar minha assinatura?',
        a: 'Você pode cancelar a qualquer momento em "Configurações" > "Assinatura". O acesso premium permanece até o fim do período pago. Após o cancelamento, sua conta volta ao plano gratuito.',
        open: false,
    },
]);

function toggleFaq(faq) { faq.open = !faq.open; }

// ---------- Contato ----------
const contactForm = ref({ nome: '', email: '', assunto: '', mensagem: '' });
const contactSent = ref(false);
function sendContact() { contactSent.value = true; }

// ---------- Meus chamados ----------
const tickets = ref([
    { id: '#0012', title: 'Importação OFX não reconhecida', status: 'aberto',    date: 'há 1 dia' },
    { id: '#0011', title: 'Erro ao conectar conta Itaú',    status: 'em_atendimento', date: 'há 3 dias' },
    { id: '#0009', title: 'Meta duplicada no dashboard',    status: 'resolvido', date: 'há 1 semana' },
    { id: '#0008', title: 'Relatório mensal em branco',     status: 'fechado',   date: 'há 2 semanas' },
]);

const statusConfig = {
    aberto:          { label: 'Aberto',         bg: 'bg-blue-100',    text: 'text-blue-600',    icon: Clock },
    em_atendimento:  { label: 'Em atendimento', bg: 'bg-yellow-100',  text: 'text-yellow-700',  icon: Clock },
    resolvido:       { label: 'Resolvido',      bg: 'bg-emerald-100', text: 'text-emerald-700', icon: CheckCircle2 },
    fechado:         { label: 'Fechado',        bg: 'bg-gray-100',    text: 'text-gray-500',    icon: XCircle },
};
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-gray-50 pt-20">

        <!-- Sub-header -->
        <div class="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
            <a href="/app" class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <ArrowLeft class="w-4 h-4" /> Voltar ao Dashboard
            </a>
            <div class="flex items-center gap-3">
                <span class="text-sm text-gray-400">Precisa falar com a gente?</span>
                <button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">
                    <MessageCircle class="w-4 h-4" /> Abrir chat
                </button>
            </div>
        </div>

        <!-- Conteúdo principal -->
        <div class="max-w-3xl mx-auto px-4 py-10">
            <div class="bg-white rounded-2xl shadow-sm p-8">

                <!-- Título + badge -->
                <div class="flex items-start justify-between mb-2">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900">Ajuda & Suporte</h1>
                        <p class="text-sm text-gray-400 mt-1">Encontre respostas, tutoriais e fale com nosso time.</p>
                    </div>
                    <span class="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                        <Sparkles class="w-3 h-3" /> Central atualizada
                    </span>
                </div>

                <!-- Busca -->
                <div class="mt-6">
                    <div class="relative">
                        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input v-model="searchQuery" type="text"
                            placeholder="Busque por palavras-chave (ex.: cartão, metas, relatórios)"
                            class="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-2">
                        Sugestões:
                        <button class="text-emerald-600 hover:underline mx-0.5">cartão</button> •
                        <button class="text-emerald-600 hover:underline mx-0.5">lançamentos</button> •
                        <button class="text-emerald-600 hover:underline mx-0.5">metas</button>
                    </p>
                </div>

                <!-- Tabs -->
                <div class="flex gap-2 mt-8 mb-6">
                    <button @click="activeTab = 'faq'"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                        :class="activeTab === 'faq' ? 'bg-emerald-500 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'">
                        <HelpCircle class="w-4 h-4" /> FAQ
                    </button>
                    <button @click="activeTab = 'contato'"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                        :class="activeTab === 'contato' ? 'bg-emerald-500 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'">
                        <Mail class="w-4 h-4" /> Contato
                    </button>
                    <button @click="activeTab = 'chamados'"
                        class="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                        :class="activeTab === 'chamados' ? 'bg-emerald-500 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'">
                        <Inbox class="w-4 h-4" /> Meus chamados
                    </button>
                </div>

                <!-- ===== TAB FAQ ===== -->
                <div v-if="activeTab === 'faq'">

                    <!-- Grid de categorias -->
                    <div class="grid grid-cols-3 gap-3 mb-6">
                        <button v-for="cat in categories" :key="cat.title"
                            class="flex items-center gap-3 p-3.5 border border-gray-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors text-left group">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" :class="cat.iconBg">
                                <component :is="cat.icon" class="w-4 h-4" :class="cat.iconColor" />
                            </div>
                            <div class="min-w-0">
                                <p class="text-xs font-semibold text-gray-700 truncate">{{ cat.title }}</p>
                                <p class="text-[11px] text-gray-400 truncate">{{ cat.desc }}</p>
                            </div>
                        </button>
                    </div>

                    <!-- Accordion -->
                    <div class="space-y-2 mb-8">
                        <div v-for="faq in faqs" :key="faq.q"
                            class="border border-gray-100 rounded-xl overflow-hidden">
                            <button @click="toggleFaq(faq)"
                                class="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-left">
                                {{ faq.q }}
                                <ChevronDown class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200"
                                    :class="faq.open ? 'rotate-180' : ''" />
                            </button>
                            <Transition
                                enter-active-class="transition-all duration-200 ease-out"
                                enter-from-class="opacity-0 max-h-0"
                                enter-to-class="opacity-100 max-h-40"
                                leave-active-class="transition-all duration-150 ease-in"
                                leave-from-class="opacity-100 max-h-40"
                                leave-to-class="opacity-0 max-h-0">
                                <div v-if="faq.open" class="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                    {{ faq.a }}
                                </div>
                            </Transition>
                        </div>
                    </div>

                    <!-- Rodapé -->
                    <div class="flex items-center justify-between pt-5 border-t border-gray-100">
                        <span class="text-sm text-gray-400">Não encontrou o que procurava?</span>
                        <div class="flex items-center gap-2">
                            <button @click="activeTab = 'contato'"
                                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                <Mail class="w-4 h-4" /> Falar com suporte
                            </button>
                            <button @click="activeTab = 'chamados'"
                                class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors">
                                <Plus class="w-4 h-4" /> Abrir chamado
                            </button>
                        </div>
                    </div>
                </div>

                <!-- ===== TAB CONTATO ===== -->
                <div v-else-if="activeTab === 'contato'">
                    <div v-if="contactSent" class="flex flex-col items-center py-16 text-center">
                        <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 class="w-7 h-7 text-emerald-500" />
                        </div>
                        <h2 class="text-base font-bold text-gray-800 mb-1">Mensagem enviada!</h2>
                        <p class="text-sm text-gray-400 max-w-xs">Nossa equipe responderá em até 24 horas no e-mail informado.</p>
                        <button @click="contactSent = false; contactForm = { nome: '', email: '', assunto: '', mensagem: '' }"
                            class="mt-6 px-4 py-2 text-sm font-semibold text-emerald-600 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors">
                            Nova mensagem
                        </button>
                    </div>
                    <form v-else @submit.prevent="sendContact" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Nome</label>
                                <input v-model="contactForm.nome" type="text" placeholder="Seu nome"
                                    class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1.5">E-mail</label>
                                <input v-model="contactForm.email" type="email" placeholder="seu@email.com"
                                    class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition" required />
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1.5">Assunto</label>
                            <input v-model="contactForm.assunto" type="text" placeholder="Descreva brevemente o problema"
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition" required />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1.5">Mensagem</label>
                            <textarea v-model="contactForm.mensagem" rows="5" placeholder="Descreva com detalhes sua dúvida ou problema..."
                                class="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-400 transition resize-none" required></textarea>
                        </div>
                        <div class="flex justify-end pt-2">
                            <button type="submit"
                                class="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors">
                                <Send class="w-4 h-4" /> Enviar mensagem
                            </button>
                        </div>
                    </form>
                </div>

                <!-- ===== TAB CHAMADOS ===== -->
                <div v-else-if="activeTab === 'chamados'">
                    <div class="flex items-center justify-between mb-5">
                        <p class="text-sm text-gray-400">{{ tickets.length }} chamado{{ tickets.length !== 1 ? 's' : '' }} encontrado{{ tickets.length !== 1 ? 's' : '' }}</p>
                        <button class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-colors">
                            <Plus class="w-4 h-4" /> Novo chamado
                        </button>
                    </div>

                    <div class="space-y-2">
                        <div v-for="ticket in tickets" :key="ticket.id"
                            class="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                            <div class="flex items-center gap-3">
                                <component :is="statusConfig[ticket.status].icon"
                                    class="w-4 h-4 shrink-0"
                                    :class="statusConfig[ticket.status].text" />
                                <div>
                                    <p class="text-sm font-semibold text-gray-700">{{ ticket.title }}</p>
                                    <p class="text-xs text-gray-400 mt-0.5">{{ ticket.id }} · {{ ticket.date }}</p>
                                </div>
                            </div>
                            <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                                :class="[statusConfig[ticket.status].bg, statusConfig[ticket.status].text]">
                                {{ statusConfig[ticket.status].label }}
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-center mt-8 pt-5 border-t border-gray-100">
                        <p class="text-sm text-gray-400">Precisa de ajuda imediata?
                            <button @click="activeTab = 'contato'" class="text-emerald-600 font-semibold hover:underline ml-1">Falar com suporte</button>
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Footer -->
        <footer class="text-center pb-8">
            <p class="text-xs text-gray-400">© 2025 Organizze. Todos os direitos reservados.</p>
        </footer>
    </div>

    <!-- FAB Abrir chat -->
    <button class="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-500 rounded-full shadow-lg hover:bg-emerald-600 transition-colors z-40">
        <MessageCircle class="w-4 h-4" /> Abrir chat
    </button>
</template>
