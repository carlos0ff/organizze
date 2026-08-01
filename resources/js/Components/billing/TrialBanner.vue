<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { X } from 'lucide-vue-next';

const trialDays  = ref(7);
const trialTotal = 30;
const trialPct   = computed(() => Math.round(((trialTotal - trialDays.value) / trialTotal) * 100));
const trialBarDismissed = ref(false);

</script>

<template>

    <div v-if="!trialBarDismissed" class="left-0 w-full z-40 bg-amber-50 border-b border-amber-200/80 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4">

            <!-- Plano -->
            <div class="flex items-center gap-2 shrink-0">
                <span class="text-sm font-bold text-amber-900">Teste grátis</span>
                <span class="hidden sm:inline text-[11px] font-semibold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-md">
                    Plano manual
                </span>
            </div>

            <!-- Progresso + dias -->
            <div class="flex items-center gap-3 flex-1 max-w-sm">
                <span class="text-xs text-amber-700 whitespace-nowrap font-medium">
                    {{ trialDays }} dias restantes
                </span>
                <div class="flex-1 h-1.5 bg-amber-200 rounded-full overflow-hidden">
                    <div class="h-full bg-amber-500 rounded-full transition-all duration-500" :style="`width: ${trialPct}%`" />
                </div>
                <span class="text-[11px] text-amber-500 font-medium hidden md:inline">{{ trialPct }}%</span>
            </div>

            <div class="flex items-center gap-2 shrink-0">
                <a href="/app/planos" class="text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 px-4 py-1.5 rounded-md transition-colors shadow-sm shadow-amber-200 whitespace-nowrap">
                    Ver planos
                </a>
                <button @click="trialBarDismissed = true" class="text-amber-400 hover:text-amber-600 transition-colors p-0.5">
                    <X class="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
</template>
