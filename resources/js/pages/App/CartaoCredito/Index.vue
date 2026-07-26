<script setup>
import { ref, computed } from 'vue';
import { Plus, Search, CreditCard, Trash2 } from 'lucide-vue-next';

import Footer from '@/Components/layout/Footer.vue';
import Navbar from '@/Components/navigation/Navbar.vue';


// MOCK (depois você liga no backend)
const cards = ref([
    {
        id: 1,
        bank: 'Banco do Brasil',
        number: '•••• 5544',
        brand: 'VISA',
        value: 3400,
        status: 'Aberta',
    },
    {
        id: 2,
        bank: 'Santander',
        number: '•••• 9876',
        brand: 'MASTER',
        value: 860,
        status: 'Fechada',
    },
    { id: 3, bank: 'Inter', number: '•••• 4321', brand: 'VISA', value: 1240, status: 'Aberta' },
]);

const search = ref('');

const filteredCards = computed(() => {
    return cards.value.filter((card) => card.bank.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>

    <!-- Navbar -->
    <Navbar />

    <main class="max-w-7xl mx-auto px-4 pb-12" :class="trialBarDismissed ? 'pt-24' : 'pt-[7rem]'">
        <!-- HEADER -->
        <div class="flex justify-between items-center">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">Meus Cartões</h1>
                <p class="text-sm text-gray-400">Gerencie todos os seus cartões</p>
            </div>

            <button class="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 transition" >
                <Plus class="w-4 h-4" /> Novo Cartão
            </button>
        </div>

        <!-- SEARCH -->
        <div class="relative">
            <Search class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
                v-model="search"
                type="text"
                placeholder="Buscar por banco..."
                class="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
        </div>

        <!-- EMPTY STATE -->
        <div v-if="filteredCards.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
            <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
                <CreditCard class="w-6 h-6" />
            </div>
            <p class="mt-4 text-sm font-semibold text-gray-500">Nenhum cartão encontrado</p>
            <p class="text-xs text-gray-400">Adicione um cartão para começar</p>
        </div>

        <!-- GRID DE CARTÕES -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="card in filteredCards" :key="card.id"
                class="p-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg relative group hover:scale-[1.02] transition" >
                <!-- TOP -->
                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-[10px] uppercase opacity-70 font-bold tracking-widest">{{ card.bank }}</p>
                        <p class="text-sm tracking-widest mt-1">{{ card.number }}</p>
                    </div>
                    <span class="text-[10px] bg-white/20 px-2 py-1 rounded-full">{{ card.brand }}</span>
                </div>

                <!-- VALUE -->
                <div class="mt-8 flex justify-between items-end">
                    <div>
                        <p class="text-[10px] opacity-70">FATURA</p>
                        <p class="text-lg font-bold">R$ {{ card.value.toLocaleString() }}</p>
                    </div>

                    <span class="text-[10px] px-2 py-1 rounded-full font-bold uppercase" :class="card.status === 'Aberta' ? 'bg-emerald-400/20 text-emerald-300' : 'bg-gray-400/20 text-gray-300'">
                        {{ card.status }}
                    </span>
                </div>

                <!-- ACTIONS -->
                <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                    <button class="p-2 rounded-full bg-white/10 hover:bg-white/20">
                        <Trash2 class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </main>

</template>
