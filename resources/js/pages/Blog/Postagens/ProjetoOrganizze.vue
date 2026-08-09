<script setup>
import { ref } from 'vue';
import BlogNavbar from '@/pages/Blog/Components/Navigation/Navbar.vue';
import BlogFooter from '@/pages/Blog/Components/layout/Footer.vue';
import {
    Clock, Eye, Calendar, Share2, Bookmark, ThumbsUp,
    Link, ChevronRight, ArrowLeft,
    Bot, Cpu, Code2, Zap, GitBranch, Terminal, ExternalLink,
} from 'lucide-vue-next';

const post = {
    title: 'Construindo o Organizze com IA: como usei o Claude para acelerar todo o projeto',
    cat: 'Desenvolvimento',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    author: 'Carlos',
    authorImg: 'https://i.pravatar.cc/80?img=12',
    authorBio: 'Desenvolvedor em formação. Construiu o Organizze usando Laravel 12, Vue 3 e Inertia.js — com IA como copiloto no processo inteiro.',
    date: '9 de agosto de 2026',
    readTime: 7,
    views: 1,
    likes: 0,
};

const liked      = ref(false);
const bookmarked = ref(false);
const linkCopied = ref(false);
const likes      = ref(post.likes);

function toggleLike()     { liked.value = !liked.value; likes.value += liked.value ? 1 : -1; }
function toggleBookmark() { bookmarked.value = !bookmarked.value; }
function copyLink()       { linkCopied.value = true; setTimeout(() => (linkCopied.value = false), 2000); }
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
                <span class="text-gray-400 truncate max-w-xs">Construindo o Organizze com IA</span>
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
                        <span class="absolute bottom-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
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

                            <p class="text-base leading-relaxed text-gray-600 font-light border-l-4 border-emerald-400 pl-4 italic">
                                A IA não substituiu o meu trabalho. Ela multiplicou o que eu consigo fazer em um dia.
                                Este post é sobre como foi esse processo — honestamente.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O projeto</h2>
                            <p class="leading-relaxed text-gray-600">
                                O <strong>Organizze</strong> é um sistema de gestão financeira pessoal que venho construindo do zero:
                                dashboard com métricas, controle de lançamentos (receitas, despesas e transferências), cartões de crédito,
                                limites de gastos por categoria, relatórios, Open Finance, blog e landing page.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Stack completa: <strong>Laravel 12 + Vue 3 + Inertia.js + Tailwind CSS + TypeScript + MySQL + Docker</strong>.
                                Um projeto de verdade, sem tutorial passo a passo, construído para aprender fazendo.
                            </p>

                            <!-- Stack badges -->
                            <div class="flex flex-wrap gap-2 my-4">
                                <span v-for="tech in ['Laravel 12','Vue 3','Inertia.js','Tailwind CSS','TypeScript','MySQL','Docker','Lucide','Ziggy']"
                                    :key="tech"
                                    class="text-[11px] font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                                    {{ tech }}
                                </span>
                            </div>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">Como a IA entrou no processo</h2>
                            <p class="leading-relaxed text-gray-600">
                                Usei o <strong>Claude (Anthropic)</strong> como copiloto ao longo de todo o desenvolvimento.
                                Não como atalho para copiar código — mas como um par de programação disponível 24h, que conhece
                                a codebase inteira e nunca fica sem paciência para explicar.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                O fluxo era assim: eu descrevia o que queria construir ou reorganizar, o Claude propunha a abordagem,
                                eu questionava, ajustávamos juntos, e o código resultante era algo que eu entendia — não código
                                que simplesmente "funciona" por motivos que desconheço.
                            </p>

                            <!-- O que a IA fez -->
                            <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
                                <div class="flex items-center gap-2 mb-3">
                                    <Bot class="w-4 h-4 text-emerald-500" />
                                    <p class="font-bold">O que o Claude ajudou a construir nesse projeto:</p>
                                </div>
                                <ul class="space-y-2 text-gray-600">
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span>Reorganização de <strong>60+ controllers</strong> de uma estrutura plana para pastas por domínio (Auth, App, Blog) com nomes em pt-br</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span>Login funcional com <strong>Auth::attempt + RateLimiter</strong> (5 tentativas, chave email|IP) e sessão regenerada</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span>Frontend do login com <strong>useForm</strong> do Inertia, erros reativos por campo e estado de loading</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span><strong>Landing page completa</strong> — hero com mockup do dashboard, features, Open Finance, planos, testimonials, FAQ e footer</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span>PHPDocs, tipagem estrita (<code>declare(strict_types=1)</code>) e métodos CRUD completos em todos os controllers</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-emerald-500 mt-0.5">✓</span>
                                        <span>Organização e refatoração de rotas (<code>routes/web/app.php</code>, <code>auth.php</code>, <code>public.php</code>)</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O desafio que pedi para a IA criar</h2>
                            <p class="leading-relaxed text-gray-600">
                                Uma das coisas mais interessantes que fiz foi pedir ao Claude para <strong>criar um desafio técnico real</strong>
                                para desenvolvedores PHP/Laravel — o tipo de desafio que uma empresa usaria num processo seletivo.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                O resultado foi o <strong>desafio-backend-workfacilit</strong>: um projeto completo simulando o core
                                de uma plataforma de automação de processos. O desafio pede que o candidato construa uma API REST
                                que gerencie <strong>fluxos de aprovação dinâmicos</strong> — onde admins definem templates com etapas
                                sequenciais e instâncias avançam conforme aprovações ou reprovações.
                            </p>

                            <!-- Desafio destaque -->
                            <div class="bg-gray-900 text-white rounded-xl p-6">
                                <div class="flex items-center gap-2 mb-4">
                                    <Terminal class="w-4 h-4 text-emerald-400" />
                                    <span class="text-sm font-bold text-gray-300">desafio-backend-workfacilit</span>
                                </div>
                                <p class="text-sm text-gray-300 leading-relaxed mb-4">
                                    Desafio técnico para devs PHP/Laravel júnior, criado com IA. Simula o core de uma plataforma de automação:
                                    workflows configuráveis com etapas, aprovações, condicionais e integrações.
                                </p>
                                <div class="grid grid-cols-2 gap-3 mb-4">
                                    <div v-for="item in [
                                        { label: 'Stack', value: 'PHP 8.3+ / Laravel 12' },
                                        { label: 'Infra', value: 'Docker + MySQL + Redis' },
                                        { label: 'Testes', value: 'Pest / PHPUnit' },
                                        { label: 'Bônus', value: 'Vue + Inertia (frontend)' },
                                    ]" :key="item.label" class="bg-white/5 rounded-lg p-3">
                                        <p class="text-[10px] text-gray-500 font-medium uppercase">{{ item.label }}</p>
                                        <p class="text-xs text-gray-200 font-semibold mt-0.5">{{ item.value }}</p>
                                    </div>
                                </div>
                                <a href="https://github.com/carlos0ff/desafio-backend-workfacilit"
                                    target="_blank"
                                    class="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
                                    Ver no GitHub
                                    <ExternalLink class="w-3.5 h-3.5" />
                                </a>
                            </div>

                            <p class="leading-relaxed text-gray-600">
                                O nível de detalhe foi impressionante: critérios de avaliação claros, requisitos funcionais e técnicos
                                separados, casos de borda especificados (etapas condicionais, aprovação múltipla, histórico de auditoria),
                                e até os critérios diferenciadores que separam um candidato mediano de um excelente.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                A lição aqui não é "a IA pode criar desafios". É que, quando você sabe o que quer e consegue
                                descrever com clareza — a IA entrega algo que normalmente levaria horas de trabalho em minutos.
                                <strong>O prompt é o skill.</strong>
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O que aprendi sobre trabalhar com IA</h2>
                            <p class="leading-relaxed text-gray-600">
                                Existe uma diferença enorme entre <em>usar IA</em> e <em>trabalhar com IA</em>.
                                Usar IA é pedir código e colar. Trabalhar com IA é entender o que foi gerado, questionar,
                                adaptar, e integrar com o que já existe.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Em nenhum momento durante este projeto simplesmente aceitei o que o Claude sugeriu sem entender.
                                Cada refatoração de controller, cada rota adicionada, cada componente Vue — passei pelo processo
                                de entender a estrutura, o motivo da escolha, e o que mudaria se fosse diferente.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                Isso é o que transforma IA de ferramenta de atalho para <strong>acelerador de aprendizado real</strong>.
                            </p>

                            <h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">O que vem a seguir</h2>
                            <p class="leading-relaxed text-gray-600">
                                O projeto ainda está ativo. Os próximos passos são implementar a lógica real de backend
                                para os módulos (lançamentos, contas, categorias), integração com Open Finance via certificação
                                Bacen, e testes automatizados com Pest.
                            </p>
                            <p class="leading-relaxed text-gray-600">
                                A base está sólida: arquitetura organizada, auth funcional, landing page publicada, rotas mapeadas.
                                Agora é sobre construir a lógica de negócio em cima dessa estrutura.
                            </p>

                            <!-- Nota final -->
                            <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mt-8">
                                <div class="flex items-center gap-2 mb-3">
                                    <Zap class="w-4 h-4 text-emerald-500" />
                                    <span class="text-sm font-bold text-emerald-700">Para quem está começando</span>
                                </div>
                                <p class="text-sm text-emerald-800 leading-relaxed">
                                    Use IA sem culpa — mas use com curiosidade. Pergunte o porquê de cada linha.
                                    Quebre o código gerado de propósito para ver o que acontece. Reescreva manualmente partes que não entendeu.
                                    <strong>O objetivo não é terminar rápido. É aprender mais rápido.</strong>
                                </p>
                            </div>

                        </div>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                            <span v-for="tag in ['Laravel','Vue 3','Inertia.js','Inteligência Artificial','Claude','Projetos','Open Source']"
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

                        <!-- Projeto no GitHub -->
                        <div class="bg-gray-900 rounded-2xl p-5 text-white">
                            <div class="flex items-center gap-2 mb-3">
                                <GitBranch class="w-4 h-4 text-emerald-400" />
                                <span class="text-sm font-bold">Ver no GitHub</span>
                            </div>
                            <p class="text-xs text-gray-400 mb-4 leading-relaxed">
                                O código do Organizze é público. Explore a arquitetura, controllers, rotas e páginas.
                            </p>
                            <a href="https://github.com/carlos0ff/organizze" target="_blank"
                                class="block w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm rounded-xl text-center transition-colors">
                                carlos0ff/organizze
                            </a>
                        </div>

                        <!-- Desafio WorkFacilit -->
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <div class="flex items-center gap-2 mb-3">
                                <Cpu class="w-4 h-4 text-gray-400" />
                                <h3 class="text-sm font-bold text-gray-900">Desafio criado com IA</h3>
                            </div>
                            <p class="text-xs text-gray-500 leading-relaxed mb-4">
                                Desafio técnico para devs PHP/Laravel júnior. Criado com Claude.
                                Workflows de aprovação dinâmica com Docker, Redis e testes.
                            </p>
                            <a href="https://github.com/carlos0ff/desafio-backend-workfacilit" target="_blank"
                                class="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                                Ver o desafio
                                <ExternalLink class="w-3 h-3" />
                            </a>
                        </div>

                        <!-- Stack utilizada -->
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                            <h3 class="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Stack do projeto</h3>
                            <div class="space-y-2">
                                <div v-for="tech in ['Laravel 12','Vue 3','Inertia.js','Tailwind CSS','TypeScript','MySQL','Docker','Claude (IA)']"
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
