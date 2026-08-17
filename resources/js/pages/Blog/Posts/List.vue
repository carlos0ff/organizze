<script setup>
import { ArrowRight } from 'lucide-vue-next';
import Footer from "@/pages/Blog/Components/layout/Footer.vue";
</script>

<template>
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center shrink-0">
                    <a href="#" class="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <img
                            src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                            alt="Organizze"
                            class="h-8 w-auto"
                        />
                        <span class="hidden text-sm font-medium text-gray-600 sm:inline">Blog</span>
                    </a>
                </div>

                <!-- Menu / Links Centralizado -->
                <div class="hidden md:flex items-center justify-center space-x-8 flex-1">
                    <a
                        href="#home"
                        class="capitalize relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#categorias"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Categorias
                    </a>
                    <a
                        href="#depoimentos"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Artigos
                    </a>
                    <a
                        href="#depoimentos"
                        class="capitalize relative text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Mais lido
                    </a>

                    <!-- <a href="#mais-lidos" class="relative inline-flex items-center text-sm font-medium text-[#1a202c] group">
                        <span class="relative z-10 px-1 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-[#2d3748]">
                            Mais lidos
                        </span>
                        <span class="absolute left-0 bottom-1 w-full h-1.5 bg-linear-to-r from-[#48bb78] to-[#38a169] opacity-80 transition-all duration-300 ease-out group-hover:h-4 group-hover:opacity-100 group-hover:from-[#38a169] group-hover:to-[#2f855a] animate-pulse shadow-sm group-hover:shadow-md group-hover:shadow-[#48bb78]/30"></span>
                    </a> -->
                </div>

                <div class="flex items-center gap-3">
                    <!-- Search Bar -->
                    <div class="hidden md:flex items-center relative">
                        <button class="p-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        <div class="absolute top-14 right-0 w-80">
                            <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-4 hidden">
                                <div class="relative">
                                    <svg
                                        class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Buscar artigos..."
                                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16C64F]/30 focus:border-[#16C64F]"
                                    />
                                </div>

                                <div class="mt-4 text-sm">
                                    <p class="text-gray-500 font-medium mb-2">Buscas recentes:</p>

                                    <div class="space-y-1">
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition"> Como organizar finanças </a>
                                        <a href="#" class="block text-gray-700 hover:text-[#16C64F] transition"> Dicas de produtividade </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Organizze -->
                    <a href="#Organizze" class="relative overflow-hidden px-6 py-2 rounded-md font-medium text-white bg-[#117641] group">
                        <span
                            class="absolute inset-0 bg-[#006A33] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                        ></span>
                        <span class="relative z-10">Conhaça o organizze</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <main class="flex-1 pt-12 lg:pt-20">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <section class="max-w-7xl mx-auto px-4 py-10">
                <div class="relative flex flex-col md:flex-row overflow-hidden rounded-md shadow-lg">
                    <div class="relative md:w-2/3 h-65 md:h-90">
                        <img
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                            alt="Controle de gastos"
                            class="w-full h-full object-cover"
                        />
                        <span class="absolute bottom-4 left-4 bg-[#1F3D2B] text-white text-xs px-3 py-1 rounded-full"> Controle de Gastos</span>

                        <button
                            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div class="md:w-1/3 bg-[#2F4F3F] p-6 md:p-8 flex flex-col justify-center">
                        <h2 class="text-white text-xl md:text-2xl font-semibold leading-snug">
                            Gastos diários: como mapear, reduzir e controlar sem sofrimento
                        </h2>
                        <p class="mt-4 text-sm text-gray-300 leading-relaxed line-clamp-3">
                            Manter as finanças pessoais organizadas não precisa ser complicado. Neste artigo, você vai aprender como identificar seus
                            gastos diários, entender para onde seu dinheiro está indo e aplicar estratégias simples para reduzir desperdícios e tomar
                            decisões financeiras mais conscientes.
                        </p>

                        <div class="mt-5 flex items-center gap-4 text-xs text-gray-300">
                            <span class="flex items-center gap-2 capitalize">
                                <img src="https://i.pravatar.cc/40?img=12" alt="Autor" class="w-5 h-5 rounded-full object-cover" />
                                Carlos Júnior
                            </span>
                            <span>23/01/2026</span>
                            <span>7 min de leitura</span>
                        </div>
                    </div>

                    <div class="absolute bottom-4 right-4 flex gap-2">
                        <span class="w-2 h-2 rounded-full bg-green-400"></span>
                        <span class="w-2 h-2 rounded-full bg-white/40"></span>
                        <span class="w-2 h-2 rounded-full bg-white/40"></span>
                    </div>
                </div>
            </section>

            <section class="mt-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    <div class="md:max-w-sm">
                        <h2 class="text-3xl font-bold text-gray-900 mb-3">Temas</h2>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Explore os assuntos mais relevantes e encontre conteúdos criados para facilitar suas decisões financeiras no dia a dia.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/MEI-280x210-1.jpg"
                                alt="MEI"
                                class="w-full h-44 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <span class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90"></span>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">MEI & Empreendedorismo</h3>
                                <p class="text-white/80 text-xs mt-1">Obrigações, impostos e dicas</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/Investimento-280x210-1.jpg"
                                alt="Investimentos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Investimentos</h3>
                                <p class="text-white/80 text-xs mt-1">Renda fixa e variável</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/Direitos-do-consumidor-280x210-1.jpg"
                                alt="Orçamento"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Orçamento</h3>
                                <p class="text-white/80 text-xs mt-1">Controle financeiro</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src="https://www.organizze.com.br/blog/wp-content/uploads/D%C2%A1vidas-280x210-1.jpg"
                                alt="Impostos"
                                class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 p-4">
                                <h3 class="text-white font-semibold text-base">Impostos</h3>
                                <p class="text-white/80 text-xs mt-1">Declarações e taxas</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section class="py-10 mt-10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div class="lg:col-span-8 space-y-8">
                            <article class="relative group overflow-hidden rounded-xl shadow-md">
                                <a href="https://www.organizze.com.br/blog/gestao-financeira/aplicativo-para-controle-financeiro">
                                    <img
                                        src="https://www.organizze.com.br/blog/wp-content/uploads/aplicativo-para-controle-financeiro.jpg"
                                        alt="Pessoa usando aplicativo para controle financeiro no celular"
                                        class="w-full h-95 lg:h-120 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </a>

                                <div
                                    class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 text-white"
                                >
                                    <a
                                        class="bg-green-800 text-white text-[12px] px-2 py-0.5 rounded-md md:w-30 Capitalize font-semibold hover:cursor-pointer"
                                    >
                                        Gestão Financeira
                                    </a>
                                    <h2 class="text-2xl lg:text-3xl font-bold leading-tight mb-3">
                                        <a
                                            href="https://www.organizze.com.br/blog/gestao-financeira/aplicativo-para-controle-financeiro"
                                            class="hover:underline"
                                        >
                                            12 melhores aplicativos para controle financeiro e organização de contas
                                        </a>
                                    </h2>

                                    <p class="text-gray-200 mb-4 line-clamp-2">
                                        Controlar seus gastos não precisa ser complicado. Confira os 12 melhores aplicativos para controle financeiro
                                        e tenha os comandos na palma da sua mão!...
                                    </p>

                                    <div class="flex items-center justify-between text-sm">
                                        <div class="flex items-center gap-4 text-gray-300">
                                            <span>Por Anderson de Andrade</span>
                                            <span>• 9 min de leitura</span>
                                        </div>
                                        <a
                                            href="#"
                                            class="inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
                                        >
                                            Leia mais
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <article class="flex gap-4 group">
                                    <a href="https://www.organizze.com.br/blog/mei/gestao-financeira-para-mei/imposto-de-renda-mei" class="shrink-0">
                                        <img
                                            src="https://www.organizze.com.br/blog/wp-content/uploads/imposto-de-renda-mei-280x210.jpg"
                                            alt="Mulher pesquisando sobre o Imposto de Renda MEI"
                                            class="w-32 h-24 object-cover rounded-lg"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div class="flex-1">
                                        <a class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer">
                                            Gestão Financeira Para MEI
                                        </a>

                                        <h4 class="mt-1 font-medium leading-tight">
                                            <a
                                                href="https://www.organizze.com.br/blog/mei/gestao-financeira-para-mei/imposto-de-renda-mei"
                                                class="hover:text-blue-700"
                                            >
                                                Imposto de Renda MEI 2025: tudo o que você precisa saber!
                                            </a>
                                        </h4>
                                        <p class="mt-1 text-xs text-gray-600 leading-snug line-clamp-2">
                                            Entenda quem precisa declarar, quais rendimentos entram no cálculo e quais são os prazos e regras do
                                            Imposto de Renda para MEI em 2025.
                                        </p>
                                    </div>
                                </article>

                                <article class="flex gap-4 group">
                                    <a
                                        href="https://www.organizze.com.br/blog/investimento/como-montar-uma-carteira-de-investimentos"
                                        class="shrink-0"
                                    >
                                        <img
                                            src="https://www.organizze.com.br/blog/wp-content/uploads/como-montar-uma-carteira-de-investimentos-280x210.jpg"
                                            alt="Pessoa usando o computador para aprender como montar uma carteira de investimentos"
                                            class="w-32 h-24 object-cover rounded-lg"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div class="flex-1">
                                        <a class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer"> Investimento </a>
                                        <h4 class="mt-1 font-medium leading-tight">
                                            <a
                                                href="https://www.organizze.com.br/blog/investimento/como-montar-uma-carteira-de-investimentos"
                                                class="hover:text-blue-700"
                                            >
                                                Como montar uma carteira de investimentos pela primeira vez
                                            </a>
                                        </h4>
                                        <p class="mt-1 text-xs text-gray-600 leading-snug line-clamp-2">
                                            Aprenda a montar sua primeira carteira de investimentos, diversificar ativos e escolher opções alinhadas
                                            ao seu perfil e objetivos financeiros.
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
                                        >
                                            Leia mais
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <aside class="lg:col-span-4">
                            <div class="bg-gray-50 rounded-xl p-6 sticky top-6 space-y-6">
                                <div class="border-b border-gray-200 pb-2 mb-4">
                                    <h3 class="text-xl font-bold text-gray-900">Mais lidos</h3>
                                </div>

                                <div class="space-y-6">
                                    <article class="border-b border-gray-300/50 mb-3">
                                        <a
                                            href="https://www.organizze.com.br/blog/investimento"
                                            class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer"
                                        >
                                            Investimento
                                        </a>
                                        <h3 class="mt-1 text-sm md:text-base font-semibold leading-tight">
                                            <a href="#" class="transition-colors hover:text-green-700">
                                                Veja qual é o melhor investimento hoje para iniciantes e dicas para começar
                                            </a>
                                        </h3>

                                        <p class="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-1">
                                            Conheça as opções de investimento mais indicadas para quem está começando, com baixo risco, boa liquidez e
                                            dicas práticas para dar os primeiros passos com segurança.
                                        </p>
                                    </article>

                                    <article class="border-b border-gray-300/50 mb-3">
                                        <a
                                            href="https://www.organizze.com.br/blog/vida-domestica-e-bem-estar"
                                            class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer"
                                        >
                                            Vida doméstica e Bem estar
                                        </a>
                                        <h3 class="mt-2 text-sm md:text-base font-semibold leading-tight">
                                            <a
                                                href="https://www.organizze.com.br/blog/vida-domestica-e-bem-estar/lista-de-compras-do-mes-como-fazer-e-economizar"
                                                class="hover:text-blue-700"
                                            >
                                                Lista de compra do mês: o que não esquecer e como economizar
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">
                                            Aprenda a montar uma lista de compras eficiente, evitar gastos desnecessários e economizar no supermercado
                                            sem abrir mão do que é essencial no dia a dia.
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
                                        >
                                            Leia mais
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </article>

                                    <article class="border-b border-gray-300/50 mb-3">
                                        <a
                                            href="https://www.organizze.com.br/blog/investimento"
                                            class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer"
                                        >
                                            Investimento
                                        </a>
                                        <h3 class="mt-2 text-sm md:text-base font-semibold leading-tight">
                                            <a
                                                href="https://www.organizze.com.br/blog/investimento/qual-banco-digital-rende-mais"
                                                class="hover:text-blue-700"
                                            >
                                                Qual banco digital rende mais? Veja as principais opções
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-1">
                                            Compare os principais bancos digitais do mercado, entenda como funciona o rendimento do dinheiro parado e
                                            descubra qual opção oferece mais vantagens.
                                        </p>
                                    </article>

                                    <article>
                                        <a
                                            href="https://www.organizze.com.br/blog/investimento"
                                            class="bg-green-800 text-white text-[10px] px-2 py-0.5 rounded-md hover:cursor-pointer"
                                        >
                                            Investimento
                                        </a>

                                        <h3 class="mt-2 text-sm md:text-base font-semibold leading-tight">
                                            <a href="https://www.organizze.com.br/blog/investimento/rendimento-poupanca" class="hover:text-blue-700">
                                                Rendimento da poupança: entenda quanto você realmente ganha
                                            </a>
                                        </h3>

                                        <p class="mt-1 text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2">
                                            Saiba como funciona o rendimento da poupança, quanto ela realmente paga hoje e se ainda vale a pena manter
                                            seu dinheiro aplicado nela.
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section class="max-w-7xl mx-auto px-6 py-8">
                <div class="mb-8 flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Mais artigos</h2>
                        <p class="mt-1 text-sm text-gray-600">Conteúdos recentes para te ajudar a organizar melhor suas finanças.</p>
                    </div>

                    <a href="/artigos" class="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline">
                        Ver todos <ArrowRight className="h-[4px] w-[4px] ml-1" />
                    </a>
                </div>

                <!--  -->
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
                                    alt="Interior de restaurante moderno"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    Tecnologia
                                </span>
                            </div>

                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Apps de finanças: como escolher o ideal para você</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Veja os critérios certos para escolher um aplicativo financeiro que realmente ajude no controle.
                                </p>

                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>

                                    <a
                                        href="#"
                                        class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                    >
                                        Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1611974714658-058f48423691?q=80&w=1470&auto=format&fit=crop"
                                    alt="Pessoa analisando faturas e documentos"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    Dívidas
                                </span>
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Estratégias práticas para sair das dívidas</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.
                                </p>

                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>

                                    <a
                                        href="#"
                                        class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                    >
                                        Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
                                    alt="Gráfico de dados em uma tela e código"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
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

                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>

                                    <a
                                        href="#"
                                        class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                    >
                                        Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"
                                    alt="Placa de circuito eletrônico"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    Tecnologia
                                </span>
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Apps de finanças: como escolher o ideal para você</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Veja os critérios certos para escolher um aplicativo financeiro que realmente ajude no controle.
                                </p>
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1583511655953-26a65429d39e?q=80&w=1470&auto=format&fit=crop"
                                    alt="Pessoa segurando uma nota de dinheiro e papel em branco"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    Dívidas
                                </span>
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Estratégias práticas para sair das dívidas</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.
                                </p>
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1470&auto=format&fit=crop"
                                    alt="Pessoa mexendo no tablet com planilha aberta"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
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
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura
                                        </span>
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1470&auto=format&fit=crop"
                                    alt="Laptop moderno em uma mesa com luzes"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium"
                                    >Tecnologia</span
                                >
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Apps de finanças: como escolher o ideal para você</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Veja os critérios certos para escolher um aplicativo financeiro que realmente ajude no controle.
                                </p>
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5"
                                            ><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura</span
                                        >
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
                                    alt="Mão segurando faturas e papel"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium"
                                    >Dívidas</span
                                >
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Estratégias práticas para sair das dívidas</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Técnicas simples para renegociar dívidas e retomar o controle da sua vida financeira.
                                </p>
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5"
                                            ><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura</span
                                        >
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>

                        <article
                            class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop"
                                    alt="Planilha financeira em tela"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span class="absolute bottom-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-full font-medium"
                                    >Orçamento</span
                                >
                            </div>
                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                    <a href="#">Como montar um orçamento que realmente funciona</a>
                                </h3>
                                <p class="text-sm text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                                    Esqueça planilhas complexas e aprenda um método realista para controlar seu orçamento.
                                </p>
                                <div class="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <span class="flex items-center gap-1.5"
                                            ><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            7 min leitura</span
                                        >
                                    </div>
                                    <a href="#" class="inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:gap-1.5 transition-all"
                                        >Ler artigo
                                        <svg
                                            class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
                                    ></a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="mt-12 flex justify-center">
                    <button
                        class="px-8 py-3 rounded-md border border-green-700 hover:cursor-pointer text-green-700 font-semibold hover:bg-green-700 hover:text-white ransition-colors duration-200"
                    >
                        Carregar mais
                    </button>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
    </main>
</template>
