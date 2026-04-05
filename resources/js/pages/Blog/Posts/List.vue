<script setup>
import Navbar from '@/pages/Blog/Components/Navigation/Navbar.vue'
import Footer from '@/pages/Blog/Components/Layout/Footer.vue';

</script>


<template>
    <Navbar />

    <main class="flex-1 pt-12 lg:pt-20">

        <!-- Hero Blogger artigos -->
        <section class="bg-[#EDFDF2]">
            <div class="max-w7xl mx-auto px-4 pt-12">
                <div class="flex flex-col-2 justify-between">
                    <div class="">
                        <h1>Minha vida é uma merda :( </h1>
                    </div>
                    <div class="">
                        <h1>Minha vida é uma merda ;()</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção de Artigos -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            <!-- Artigos listagem -->
            <section class="max-w-7xl mx-auto px-6 py-8">
                <div class="mb-8 flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Mais artigos</h2>
                        <p class="mt-1 text-sm text-gray-600">Conteúdos recentes para te ajudar a organizar melhor suas finanças.</p>
                    </div>

                    <a href="/artigos" class="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition" >
                        Ver todos
                        <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- GRID -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    <!-- Artigo 1 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full" >
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Tecnologia</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">Apps de finanças: como escolher o ideal</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mt-2">
                                Aprenda os critérios essenciais para escolher um app financeiro eficiente.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 2 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1470&auto=format&fit=crop" alt="Pessoa mexendo no tablet com planilha aberta" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                Orçamento
                            </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Como montar um orçamento que realmente funciona</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 3 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" class="absolute inset-0 w-full h-full object-cover" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full"> Organização </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900">Como organizar suas finanças em menos de 30 minutos</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 leading-relaxed mt-2">
                                Um método simples para sair da bagunça financeira e ganhar clareza sobre seu dinheiro.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 4 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop" alt="Mão segurando faturas e papel" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium"> Dívidas </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Estratégias práticas para sair das dívidas</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 5 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2" class="absolute inset-0 w-full h-full object-cover" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Empreendedorismo</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">MEI: como organizar suas finanças</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2">Dicas essenciais para manter o controle financeiro sendo MEI.</p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 6 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e" class="absolute inset-0 w-full h-full object-cover" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Educação Financeira</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-2">Educação financeira para iniciantes</h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2">Conceitos básicos para transformar sua vida financeira.</p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 7 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop" alt="Planilha financeira em tela" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">Orçamento</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                <a href="#">Como montar um orçamento que realmente funciona</a>
                            </h3>
                            <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 8 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df" class="absolute inset-0 w-full h-full object-cover" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full">Cartão de crédito</span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold line-clamp-1">Como usar cartão sem se endividar</h3>
                            <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed mt-2">
                                Evite armadilhas e use seu cartão de crédito com inteligência, mantendo o controle dos gastos no dia a dia.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>

                    <!-- Artigo 9 -->
                    <article class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col h-full">
                        <div class="relative h-48">
                            <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full"> Controle Financeiro </span>
                        </div>
                        <div class="p-5 flex flex-col flex-1">
                            <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">Como fazer controle financeiro sem planilha complicada</h3>
                            <p class="text-sm text-gray-600 line-clamp-2 leading-relaxed mt-2">
                                Métodos simples e rápidos que realmente funcionam para quem odeia planilhas ou apps cheios de funcionalidades.
                            </p>
                            <div class="mt-auto flex justify-between pt-3 border-t border-gray-100">
                                <span class="text-xs font-semibold text-gray-700">Equipe Organizze</span>
                                <a href="#" class="text-xs text-green-700">Ler artigo →</a>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Loading Posts -->
                <div class="mt-12 flex justify-center">
                    <button class="px-8 py-3 rounded-md border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white hover:cursor-pointer transition-colors" >
                        Carregar mais
                    </button>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </main>
</template>

