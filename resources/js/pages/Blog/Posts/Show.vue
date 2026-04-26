<script setup>
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/Layout/Footer.vue';
import {
    Clock, Eye, Calendar, Share2, Bookmark, ThumbsUp,
    Twitter, Facebook, Link, ChevronRight, ArrowLeft,
} from 'lucide-vue-next';

const route = useRoute();

// ── Mock post (em produção virá do Inertia props) ──────────────────────────
const post = {
    slug: route.params.slug,
    title: '12 melhores aplicativos para controle financeiro e organização de contas',
    cat: 'Controle de Gastos',
    catSlug: 'controle-de-gastos',
    img: 'https://www.organizze.com.br/blog/wp-content/uploads/aplicativo-para-controle-financeiro.jpg',
    author: 'Anderson de Andrade',
    authorImg: 'https://i.pravatar.cc/80?img=15',
    authorBio: 'Especialista em finanças pessoais com mais de 10 anos de experiência. Escreve sobre controle financeiro, investimentos e educação financeira.',
    date: '20 de abril de 2026',
    updatedAt: '22 de abril de 2026',
    readTime: 9,
    views: 4820,
    likes: 312,
};

const RELATED = [
    { img: 'https://images.unsplash.com/photo-1640249329895-c4d6fa71116c?w=400&q=80', cat: 'Investimentos', title: 'Como montar uma carteira de investimentos pela primeira vez', readTime: 7, slug: 'como-montar-carteira-investimentos' },
    { img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80', cat: 'Orçamento', title: 'Método 50-30-20: como dividir seu salário de forma inteligente', readTime: 6, slug: 'metodo-50-30-20-dividir-salario' },
    { img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80', cat: 'Metas', title: 'Como definir metas financeiras alcançáveis em 2026', readTime: 7, slug: 'metas-financeiras-alcancaveis' },
];

const POPULAR = [
    { cat: 'Investimento', title: 'Melhor investimento para iniciantes', views: 4820, slug: 'melhor-investimento-para-iniciantes' },
    { cat: 'Orçamento', title: 'Lista de compras do mês', views: 3710, slug: 'lista-de-compras-do-mes' },
    { cat: 'Investimento', title: 'Qual banco digital rende mais?', views: 3105, slug: 'qual-banco-digital-rende-mais' },
    { cat: 'Poupança', title: 'Rendimento da poupança em 2026', views: 2890, slug: 'rendimento-da-poupanca' },
];

const liked = ref(false);
const bookmarked = ref(false);
const linkCopied = ref(false);
const likes = ref(post.likes);

function toggleLike() {
    liked.value = !liked.value;
    likes.value += liked.value ? 1 : -1;
}
function toggleBookmark() { bookmarked.value = !bookmarked.value; }
function copyLink() {
    linkCopied.value = true;
    setTimeout(() => (linkCopied.value = false), 2000);
}

const CONTENT_SECTIONS = [
    {
        heading: 'Por que usar um aplicativo de controle financeiro?',
        text: 'Manter as finanças pessoais organizadas é um desafio para a maioria dos brasileiros. Com tantas contas, cartões e despesas diárias, é fácil perder o controle. É aqui que os aplicativos de controle financeiro entram em cena: eles centralizam todas as suas informações em um só lugar, facilitando o acompanhamento do orçamento e a tomada de decisões mais conscientes.',
    },
    {
        heading: '1. Organizze — o melhor para controle detalhado',
        text: 'O Organizze é uma das soluções mais completas do mercado brasileiro. Com ele, você pode cadastrar múltiplas contas, cartões de crédito e categorias personalizadas. O app oferece relatórios mensais detalhados, gráficos de gastos por categoria e alertas de vencimento. Disponível para iOS, Android e navegador.',
        highlight: 'Plano gratuito disponível com recursos essenciais. Plano Pro a partir de R$ 19,90/mês.',
    },
    {
        heading: '2. Mobills — ideal para quem tem cartão de crédito',
        text: 'O Mobills se destaca pelo controle de faturas de cartão de crédito. A interface é muito intuitiva e permite visualizar exatamente quanto está comprometido em cada cartão. Oferece metas de gastos, lembretes de contas e relatórios visuais atraentes.',
        highlight: 'Versão gratuita com funcionalidades limitadas. Premium a partir de R$ 9,90/mês.',
    },
    {
        heading: '3. GuiaBolso — com conexão bancária',
        text: 'O GuiaBolso foi pioneiro na conexão bancária automática no Brasil. Ele importa seus extratos diretamente do banco, sem precisar digitar manualmente cada transação. Além disso, oferece análise de crédito e comparação de produtos financeiros.',
        highlight: 'Gratuito para conexão bancária básica.',
    },
    {
        heading: 'Como escolher o melhor aplicativo para você?',
        text: 'A escolha do aplicativo ideal depende do seu perfil financeiro e necessidades. Se você tem muitos cartões de crédito, priorize apps com bom gerenciamento de faturas. Se quer automação, busque os que oferecem conexão bancária. Para quem está começando, qualquer app gratuito já é um grande passo.',
    },
    {
        heading: 'Conclusão',
        text: 'Não existe um app perfeito para todo mundo, mas todos os listados aqui são excelentes pontos de partida. O mais importante é começar — escolha um, dedique alguns minutos por dia para registrar seus gastos e você já estará na frente de grande parte das pessoas no controle das próprias finanças.',
    },
];
</script>

<template>
    <BlogNavbar />

    <main class="flex-1 pt-14 lg:pt-16 bg-gray-50 min-h-screen">

        <!-- ── BREADCRUMB ──────────────────────────────────────────────────────── -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
            <nav class="flex items-center gap-2 text-xs text-gray-400">
                <RouterLink to="/blog" class="hover:text-[#22c75e] transition">Blog</RouterLink>
                <ChevronRight class="w-3 h-3" />
                <RouterLink :to="`/blog/categoria/${post.catSlug}`" class="hover:text-[#22c75e] transition">{{ post.cat }}</RouterLink>
                <ChevronRight class="w-3 h-3" />
                <span class="text-gray-600 truncate max-w-xs">{{ post.title }}</span>
            </nav>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <!-- ── ARTIGO PRINCIPAL ──────────────────────────────────────────── -->
                <article class="lg:col-span-8">

                    <!-- Hero image -->
                    <div class="relative rounded-2xl overflow-hidden mb-6 shadow-md">
                        <img :src="post.img" :alt="post.title"
                            class="w-full h-64 sm:h-80 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <RouterLink :to="`/blog/categoria/${post.catSlug}`"
                            class="absolute bottom-4 left-4 bg-[#22c75e] text-white text-[11px] font-bold px-3 py-1 rounded-full hover:bg-emerald-600 transition">
                            {{ post.cat }}
                        </RouterLink>
                    </div>

                    <!-- Card do conteúdo -->
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">

                        <!-- Título -->
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                            {{ post.title }}
                        </h1>

                        <!-- Meta line -->
                        <div class="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-5 border-b border-gray-100 mb-6">
                            <div class="flex items-center gap-2">
                                <img :src="post.authorImg" class="w-7 h-7 rounded-full" />
                                <span class="font-semibold text-gray-700">{{ post.author }}</span>
                            </div>
                            <span class="flex items-center gap-1"><Calendar class="w-3.5 h-3.5" /> {{ post.date }}</span>
                            <span class="flex items-center gap-1"><Clock class="w-3.5 h-3.5" /> {{ post.readTime }} min de leitura</span>
                            <span class="flex items-center gap-1"><Eye class="w-3.5 h-3.5" /> {{ post.views.toLocaleString('pt-BR') }} leituras</span>
                        </div>

                        <!-- Conteúdo -->
                        <div class="prose prose-sm sm:prose max-w-none text-gray-700 space-y-6">
                            <p class="text-base leading-relaxed text-gray-600 font-light border-l-4 border-[#22c75e] pl-4 italic">
                                Controlar seus gastos não precisa ser complicado. Neste artigo, você vai conhecer os 12 melhores aplicativos para controle financeiro e escolher o ideal para o seu perfil.
                            </p>

                            <template v-for="section in CONTENT_SECTIONS" :key="section.heading">
                                <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">{{ section.heading }}</h2>
                                <p class="leading-relaxed text-gray-600">{{ section.text }}</p>
                                <div v-if="section.highlight"
                                    class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800 font-medium flex items-start gap-2">
                                    <span class="text-emerald-500 mt-0.5">💡</span>
                                    {{ section.highlight }}
                                </div>
                            </template>
                        </div>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                            <span v-for="tag in ['Finanças Pessoais', 'Controle de Gastos', 'Aplicativos', 'Orçamento', 'Dicas']"
                                :key="tag"
                                class="text-[11px] font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 cursor-pointer transition">
                                #{{ tag }}
                            </span>
                        </div>

                        <!-- Reações -->
                        <div class="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                            <div class="flex items-center gap-3">
                                <button @click="toggleLike"
                                    :class="liked ? 'bg-red-50 text-red-500 border-red-200' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-300'"
                                    class="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all">
                                    <ThumbsUp class="w-4 h-4" />
                                    {{ likes.toLocaleString('pt-BR') }}
                                </button>

                                <button @click="toggleBookmark"
                                    :class="bookmarked ? 'bg-amber-50 text-amber-500 border-amber-200' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-300'"
                                    class="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all">
                                    <Bookmark class="w-4 h-4" :fill="bookmarked ? 'currentColor' : 'none'" />
                                    {{ bookmarked ? 'Salvo' : 'Salvar' }}
                                </button>
                            </div>

                            <!-- Compartilhar -->
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-gray-400 font-medium hidden sm:block">Compartilhar:</span>
                                <a href="#" class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                                    <Facebook class="w-3.5 h-3.5" />
                                </a>
                                <a href="#" class="w-8 h-8 bg-sky-400 text-white rounded-lg flex items-center justify-center hover:bg-sky-500 transition">
                                    <Twitter class="w-3.5 h-3.5" />
                                </a>
                                <button @click="copyLink"
                                    :class="linkCopied ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                                    class="w-8 h-8 rounded-lg flex items-center justify-center transition">
                                    <Link class="w-3.5 h-3.5" />
                                </button>
                                <span v-if="linkCopied" class="text-[10px] text-emerald-600 font-bold">Copiado!</span>
                            </div>
                        </div>
                    </div>

                    <!-- Autor -->
                    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-5 flex items-start gap-4">
                        <img :src="post.authorImg" class="w-14 h-14 rounded-full shrink-0" />
                        <div>
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Escrito por</p>
                            <p class="text-base font-bold text-gray-900">{{ post.author }}</p>
                            <p class="text-sm text-gray-500 mt-1 leading-relaxed">{{ post.authorBio }}</p>
                        </div>
                    </div>

                    <!-- Atualizado -->
                    <p class="text-[11px] text-gray-400 mt-3 text-center">
                        Última atualização: {{ post.updatedAt }}
                    </p>

                    <!-- Artigos relacionados -->
                    <div class="mt-8">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Artigos relacionados</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <article v-for="rel in RELATED" :key="rel.slug"
                                class="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-[#22c75e]/30 transition-all">
                                <div class="relative h-36 overflow-hidden">
                                    <img :src="rel.img" :alt="rel.title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <span class="absolute bottom-2 left-2 bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        {{ rel.cat }}
                                    </span>
                                </div>
                                <div class="p-3">
                                    <h4 class="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#22c75e] transition-colors">
                                        <RouterLink :to="`/blog/post/${rel.slug}`">{{ rel.title }}</RouterLink>
                                    </h4>
                                    <p class="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                                        <Clock class="w-3 h-3" /> {{ rel.readTime }} min
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <!-- Voltar -->
                    <div class="mt-8">
                        <RouterLink to="/blog"
                            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#22c75e] transition-colors">
                            <ArrowLeft class="w-4 h-4" /> Voltar para o Blog
                        </RouterLink>
                    </div>

                </article>

                <!-- ── SIDEBAR ────────────────────────────────────────────────────── -->
                <aside class="lg:col-span-4 space-y-5">

                    <!-- Sticky wrapper -->
                    <div class="sticky top-20 space-y-5">

                        <!-- Banner app -->
                        <div class="bg-gradient-to-br from-[#22c75e] to-[#117641] rounded-2xl p-5 text-white text-center">
                            <p class="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Dica do Blog</p>
                            <h3 class="text-base font-bold leading-snug mb-2">Organize suas finanças com o Organizze</h3>
                            <p class="text-xs opacity-80 mb-4">Controle gastos, crie metas e conecte seu banco. Grátis para começar.</p>
                            <RouterLink to="/app"
                                class="block w-full py-2.5 bg-white text-[#117641] font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors">
                                Experimentar grátis
                            </RouterLink>
                        </div>

                        <!-- Mais lidos -->
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <h3 class="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Mais lidos</h3>
                            <div class="space-y-4">
                                <article v-for="(art, i) in POPULAR" :key="art.slug" class="flex items-start gap-3 group">
                                    <span class="text-xl font-black text-gray-100 leading-none w-6 shrink-0">{{ i + 1 }}</span>
                                    <div class="min-w-0">
                                        <RouterLink :to="`/blog/post/${art.slug}`"
                                            class="inline-block bg-[#22c75e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 hover:bg-emerald-600 transition">
                                            {{ art.cat }}
                                        </RouterLink>
                                        <h4 class="text-xs font-semibold text-gray-800 leading-snug group-hover:text-[#22c75e] transition-colors">
                                            <RouterLink :to="`/blog/post/${art.slug}`">{{ art.title }}</RouterLink>
                                        </h4>
                                        <p class="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                                            <Eye class="w-3 h-3" /> {{ art.views.toLocaleString('pt-BR') }}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <!-- Newsletter mini -->
                        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center">
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Newsletter</p>
                            <p class="text-sm font-semibold text-gray-800 mb-3">Receba dicas semanais de finanças</p>
                            <input type="email" placeholder="seu@email.com"
                                class="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg mb-2 focus:outline-none focus:border-[#22c75e]" />
                            <button class="w-full py-2 bg-[#22c75e] text-white text-xs font-bold rounded-lg hover:bg-emerald-600 transition">
                                Assinar grátis
                            </button>
                        </div>

                    </div>
                </aside>

            </div>
        </div>

        <BlogFooter />
    </main>
</template>
