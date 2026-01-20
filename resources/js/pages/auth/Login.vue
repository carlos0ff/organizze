<script setup>
import { ref } from 'vue';

/** Elementos de entrada **/
import EmailInput from '@/components/inputs/EmailInput.vue';
import PasswordInput from '@/components/inputs/PasswordInput.vue';

import Divider from '@/components/layout/Divider.vue';
import BaseCard from '@/components/layout/BaseCard.vue';

/** Estado de erro **/
const email = ref('');
const password = ref('');

/** Debug testes **/
const submit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
};

</script>


<template>
   <div class="bg-gray-100 w-full flex h-screen flex-col items-center justify-center pt-5 pb-8">

        <!-- Logotype -->
        <div class="mt-8 mb-6 sm:mt-10 sm:mb-9">
            <a href="/" class="flex items-center justify-center">
                <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Logo Organizze" class=" object-contain" />
            </a>
        </div>

        <BaseCard title="Acesse sua conta">

            <!-- Botões de autenticação social -->
            <div class="flex flex-col w-full items-center justify-center mb-6">

                <!-- Google -->
                <button class="group w-full h-12 flex items-center justify-center gap-3 border-[1.5px] border-[#dfdfdf] rounded-md bg-white font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ea4435] hover:border-[#ea4435] mb-3">
                    <span class="relative w-5.5 h-5.5">
                        <!-- SVG colorido -->
                        <svg class="absolute inset-0 w-5.5 h-5.5 transition-opacity duration-200 opacity-100 group-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="#FBBC05" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="#34A853" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>

                        <!-- SVG branco -->
                        <svg class="absolute inset-0 w-5.5 h-5.5 transition-opacity duration-200 opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#F9FAFB" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
                            <path fill="#F9FAFB" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
                            <path fill="#F9FAFB" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
                            <path fill="#F9FAFB" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
                        </svg>
                    </span>
                    <span class="text-gray-700 transition-colors duration-300 group-hover:text-white">Continuar com Google</span>
                </button>

                <!-- Facebook -->
                <button type="button" aria-label="Continuar com Facebook" class="w-full max-w-lg mx-auto group flex items-center justify-center gap-3 rounded-md bg-[#1877F2] px-8 py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#166FE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2 cursor-pointer">
                    <svg width="12" height="24" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg" class="shrink-0 fill-current transition-colors duration-300 text-white" aria-hidden="true">
                        <path d="M7.78896 23.9738V13.4848H11.3269L11.8566 9.3971H7.78896V6.78721C7.78896 5.60374 8.11924 4.79715 9.82479 4.79715L12 4.79615V1.14015C11.6236 1.09051 10.3325 0.979248 8.83037 0.979248C5.69421 0.979248 3.54712 2.88415 3.54712 6.38258V9.39721H0V13.4849H3.54701V23.9739L7.78896 23.9738Z" />
                    </svg>
                    <span class="transition-colors duration-300">Continuar com Facebook</span>
                </button>
            </div>

            <!-- Linha divisória -->
            <Divider />

            <form  @submit.prevent="submit" method="post" action="" class="w-full flex flex-col  items-center" autocomplete="off">
                <div class="mb-4 flex w-full flex-col">
                    <EmailInput v-model="email" label="Seu email" placeholder="Digite seu email"/>
                </div>

                <div class="relative mb-4 flex w-full flex-col">
                    <PasswordInput v-model="password" />
                </div>

                <button type="submit" class="h-12.5 text-[#FEFDF9] bg-[#16C64F] relative mt-4 w-full rounded-md font-semibold transition duration-200 ease-out hover:bg-[#117641] hover:ease-in sm:mt-6">
                    Entrar
                </button>
            </form>
        </BaseCard>

        <span href="" class="mt-2 font-medium text-sm text-gray-600">
            Ainda não possui uma conta? <a href="/cadastro" class="text-[#16C64F] hover:underline underline font-medium cursor-pointer font-bold">faça seu cadastro!</a>
        </span>
    </div>
</template>
