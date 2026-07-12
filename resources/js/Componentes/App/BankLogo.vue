<script setup>
defineProps({ bank: String });
</script>

<template>
    <!-- Nubank -->
    <div v-if="bank?.toLowerCase().includes('nubank')"
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
        style="background: #8A05BE">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7">
            <text x="20" y="26" text-anchor="middle" fill="white" font-size="15" font-weight="800" font-family="'Arial', sans-serif">Nu</text>
        </svg>
    </div>

    <!-- Inter / Banco Inter -->
    <div v-else-if="bank?.toLowerCase().includes('inter')"
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style="background: #FF6600">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
            <!-- Stylized flame/spark — Inter's icon -->
            <path d="M12 3C10.2 6.5 8 9.5 8 13a4 4 0 008 0c0-3.5-2.2-6.5-4-10z"/>
            <path d="M9 17.5C9 19.4 10.3 21 12 21s3-1.6 3-3.5c0-2-1.3-3.8-3-5.5-1.7 1.7-3 3.5-3 5.5z" fill="rgba(255,255,255,0.5)"/>
        </svg>
    </div>

    <!-- Santander -->
    <div v-else-if="bank?.toLowerCase().includes('santander')"
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style="background: #E4001A">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
            <!-- Three flames — Santander's iconic logo -->
            <path d="M7.5 19C7.5 17 8.5 15 10 13.5 10 16 10.5 18 12 19.5 13.5 18 14 16 14 13.5 15.5 15 16.5 17 16.5 19c0 1.4-2 2.5-4.5 2.5S7.5 20.4 7.5 19z" fill="white"/>
            <path d="M12 3C11 5.5 10 7.5 10 10c0 1.1 1 2 2 2s2-.9 2-2c0-2.5-1-4.5-2-7z" fill="white" opacity="0.85"/>
            <path d="M12 8c-.5 1.5-1 3-1 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/>
        </svg>
    </div>

    <!-- Bradesco -->
    <div v-else-if="bank?.toLowerCase().includes('bradesco')"
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-white text-sm"
        style="background: #CC1022">
        Bd
    </div>

    <!-- Itaú -->
    <div v-else-if="bank?.toLowerCase().includes('itaú') || bank?.toLowerCase().includes('itau')"
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-white text-sm"
        style="background: #003D8F">
        Itaú
    </div>

    <!-- Fallback genérico -->
    <div v-else
        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-sm bg-gray-400">
        {{ bank?.slice(0, 2).toUpperCase() ?? '??' }}
    </div>
</template>
