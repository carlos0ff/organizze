<script setup>
import { ref } from 'vue';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/layout/Footer.vue';
import {
    Clock, Eye, Calendar, Share2, Bookmark, ThumbsUp,
    Twitter, Facebook, Link, ChevronRight, ArrowLeft,
    Code2, Heart, Coffee,
} from 'lucide-vue-next';

const post = {
    title: 'Fim do projeto Organizze Clone: o que aprendi construindo do zero',
    cat: 'Desenvolvimento',
    catSlug: 'desenvolvimento',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    author: 'Carlos',
    authorImg: 'https://i.pravatar.cc/80?img=12',
    authorBio: 'Desenvolvedor em formação. Aprendeu Laravel, Vue 3 e Inertia.js construindo este projeto do zero, sem tutorial — apenas quebrando a cabeça e tentando de novo.',
    date: '6 de junho de 2026',
    readTime: 8,
    views: 1,
    likes: 0,
};

const liked     = ref(false);
const bookmarked = ref(false);
const linkCopied = ref(false);
const likes     = ref(post.likes);

function toggleLike() { liked.value = !liked.value; likes.value += liked.value ? 1 : -1; }
function toggleBookmark() { bookmarked.value = !bookmarked.value; }
function copyLink() { linkCopied.value = true; setTimeout(() => (linkCopied.value = false), 2000); }
</script>

<template>
    <BlogNavbar />

    <main class="flex-1 pt-14 lg:pt-16 bg-gray-50 min-h-screen">

        <!-- Breadcrumb -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
            <nav class="flex items-center gap-2 text-xs text-gray-400">
                <a href="/blog" class="hover:text-[#22c75e] transition">Blog</a>
                <ChevronRight class="w-3 h-3" />
                <span class="text-gray-600">Desenvolvimento</span>
                <ChevronRight class="w-3 h-3" />
                <span class="text-gray-400 truncate max-w-xs">Fim do projeto</span>
            </nav>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <!-- Artigo -->
                <article class="lg:col-span-8">

                    <!-- Hero image -->
                    <div class="relative rounded-2xl overflow-hidden mb-6 shadow-md">
                        <img :src="post.img" :alt="post.title"
                            class="w-full h-64 sm:h-80 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <span class="absolute bottom-4 left-4 bg-gray-700 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                            {{ post.cat }}
                        </span>
                    </div>

                    <!-- Card do conteúdo -->
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">

                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                            {{ post.title }}
                        </h1>

                        <!-- Meta -->
                        <div class="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-5 border-b border-gray-100 mb-6">
                            <div class="flex items-center gap-2">
                                <img :src="post.authorImg" class="w-7 h-7 rounded-full" />
                                <span class="font-semibold text-gray-700">{{ post.author }}</span>
                            </div>
                            <span class="flex items-center gap-1"><Calendar class="w-3.5 h-3.5" /> {{ post.date }}</span>
                            <span class="flex items-center gap-1"><Clock class="w-3.5 h-3.5" /> {{ post.readTime }} min de leitura</span>
                            <span class="flex items-center gap-1"><Eye class="w-3.5 h-3.5" /> Primeira leitura</span>
                        </div>

                        <!-- Conteúdo -->
                        <div class="prose prose-sm sm:prose max-w-none text-gray-700 space-y-6">

                            <p class="text-base leading-relaxed text-gray-600 font-light border-l-4 border-gray-300 pl-4 italic">
                                Todo projeto tem um começo empolgante e um fim silencioso. Este é o meu fim silencioso —
                                e quero documentá-lo de forma honesta.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Por que este projeto existiu</h2>
                            <p class="leading-relaxed text-gray-600">
                                O Organizze Clone nasceu de uma vontade simples: entender como um produto de software real funciona
                                por dentro. Não apenas seguir um tutorial que te entrega tudo mastigado, mas pegar uma aplicação
                                complexa — com autenticação, múltiplas rotas, estado global, banco de dados — e tentar recriar
                                do zero.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                A escolha do <strong>Organizze</strong> foi deliberada: é um produto brasileiro, bem desenhado,
                                com funcionalidades claras o suficiente para servir de referência sem ser copiado literalmente.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">A stack e as escolhas técnicas</h2>
                            <p class="leading-relaxed text-gray-600">
                                Decidi usar <strong>Laravel 12 + Vue 3 + Inertia.js</strong> — uma combinação que permite ter
                                o poder do PHP no backend com a reatividade do Vue no frontend, sem precisar criar uma API REST
                                separada. O Inertia.js atua como a "cola" que conecta os dois.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Para estilização, escolhi <strong>Tailwind CSS</strong> — que aprendi a amar depois de odiá-lo
                                nas primeiras semanas. Para ícones, <strong>Lucide</strong>. Para types, <strong>TypeScript</strong>.
                                Tudo rodando dentro de <strong>Docker</strong> via Laravel Sail.
                            </p>

                            <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
                                <p class="font-bold mb-3">O que foi construído de verdade:</p>
                                <ul class="space-y-1.5 text-gray-600">
                                    <li>✅ Dashboard financeiro com métricas do mês</li>
                                    <li>✅ Gestão de lançamentos (receitas, despesas e transferências)</li>
                                    <li>✅ Relatórios mensal, anual e receitas vs despesas</li>
                                    <li>✅ Sistema de notificações com filtros</li>
                                    <li>✅ Perfil com 6 abas (dados, senha, aparência, plano…)</li>
                                    <li>✅ Limites de gastos por categoria com barras de progresso</li>
                                    <li>✅ Blog com posts, categorias e sidebar</li>
                                    <li>✅ Painel administrativo</li>
                                    <li>✅ Configurações completas de conta</li>
                                </ul>
                            </div>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O que não foi feito — e por quê</h2>
                            <p class="leading-relaxed text-gray-600">
                                Há partes que ficaram no papel: a integração real com Open Finance (que exigiria certificação no Bacen
                                ou um agregador pago), os relatórios com gráficos dinâmicos baseados em dados reais, o aplicativo mobile.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                A maior parte do que está "funcionando" usa dados mockados no frontend. Isso foi uma decisão
                                consciente — priorizar a interface e o aprendizado de componentes sobre a lógica de negócio do backend,
                                que seria o próximo passo natural.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O que aprendi de verdade</h2>
                            <p class="leading-relaxed text-gray-600">
                                Construir este projeto foi onde aprendi que código não é só sintaxe — é tomada de decisão constante.
                                Onde colocar esse componente? Essa responsabilidade é do frontend ou do backend? Como nomear essa rota?
                                Esses problemas pequenos, resolvidos centenas de vezes, formam o raciocínio de um desenvolvedor.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Aprendi Tailwind na prática. Aprendi a pensar em componentes reutilizáveis. Aprendi a domar
                                o Inertia.js, que parece mágico até você entender que é só uma camada de dados entre o Laravel e o Vue.
                                Aprendi que Docker salva vidas — e que permissões de arquivo dentro de container são uma armadilha eterna.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Por que encerrar agora</h2>
                            <p class="leading-relaxed text-gray-600">
                                Porque continuidade sem propósito é energia desperdiçada. Este projeto cumpriu o que precisava cumprir:
                                me ensinou a stack, me forçou a tomar decisões de arquitetura, me mostrou o que não sei e o que quero
                                aprender depois.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Encerrar não é fracasso — é reconhecer que um ciclo fechou. O código fica aqui como registro.
                                O aprendizado vai junto.
                            </p>

                            <div class="bg-gray-900 text-white rounded-xl p-6 mt-8">
                                <div class="flex items-center gap-2 mb-3">
                                    <Coffee class="w-4 h-4 text-amber-400" />
                                    <span class="text-sm font-bold text-gray-300">Nota final</span>
                                </div>
                                <p class="text-sm text-gray-300 leading-relaxed">
                                    Se você está começando e acha que não vai conseguir — eu também achei isso várias vezes
                                    durante esse projeto. A diferença entre quem aprende e quem não aprende não é talento:
                                    é continuar tentando mesmo quando parece que não está indo a lugar nenhum.
                                    <strong class="text-white">Porque está. Sempre está.</strong>
                                </p>
                            </div>
                        </div>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                            <span v-for="tag in ['Laravel','Vue 3','Inertia.js','Tailwind CSS','Projetos','Aprendizado']"
                                :key="tag"
                                class="text-[11px] font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
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
                                    {{ likes > 0 ? likes : 'Curtir' }}
                                </button>
                                <button @click="toggleBookmark"
                                    :class="bookmarked ? 'bg-amber-50 text-amber-500 border-amber-200' : 'bg-gray-50 text-gray-500 border-gray-200'"
                                    class="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all">
                                    <Bookmark class="w-4 h-4" :fill="bookmarked ? 'currentColor' : 'none'" />
                                    {{ bookmarked ? 'Salvo' : 'Salvar' }}
                                </button>
                            </div>
                            <div class="flex items-center gap-2">
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

                    <!-- Voltar -->
                    <div class="mt-8">
                        <a href="/blog" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#22c75e] transition-colors">
                            <ArrowLeft class="w-4 h-4" /> Voltar para o Blog
                        </a>
                    </div>

                </article>

                <!-- Sidebar -->
                <aside class="lg:col-span-4 space-y-5">
                    <div class="sticky top-20 space-y-5">

                        <!-- Banner encerrado -->
                        <div class="bg-gray-900 rounded-2xl p-5 text-white text-center">
                            <div class="flex items-center justify-center gap-2 mb-3">
                                <Heart class="w-4 h-4 text-red-400 fill-current" />
                                <Code2 class="w-4 h-4 text-emerald-400" />
                            </div>
                            <h3 class="text-base font-bold leading-snug mb-2">Projeto encerrado</h3>
                            <p class="text-xs text-gray-400 mb-4 leading-relaxed">
                                Este foi um projeto de aprendizado. O código está disponível como referência.
                            </p>
                            <a href="/fim-do-projeto"
                                class="block w-full py-2.5 bg-white text-gray-900 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors">
                                Ver página do projeto
                            </a>
                        </div>

                        <!-- Stack -->
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <h3 class="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Stack utilizada</h3>
                            <div class="space-y-2">
                                <div v-for="tech in ['Laravel 12','Vue 3','Inertia.js','Tailwind CSS','TypeScript','MySQL','Docker']"
                                    :key="tech" class="flex items-center gap-2 text-sm text-gray-600">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    {{ tech }}
                                </div>
                            </div>
                        </div>

                    </div>
                </aside>

            </div>
        </div>

        <BlogFooter />
    </main>
</template>
