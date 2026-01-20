<script setup>
import { ref } from 'vue';

/** Elementos de entrada **/
import EmailInput from '@/components/inputs/EmailInput.vue';
import BaseCard from '@/components/layout/BaseCard.vue';

/** Estado **/
const email = ref('');

/** Submit do formulário **/
const submit = () => {
    console.log('Email para recuperação:', email.value);
};

</script>

<template>
    <div class="bg-gray-100 w-full flex h-screen flex-col items-center justify-center pt-5 pb-8">

        <!-- Logotype -->
        <div class="mt-8 mb-6 sm:mt-10 sm:mb-9">
            <a href="/" class="flex items-center justify-center">
                <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Logo Organizze" class="object-contain w-40 sm:w-48" />
            </a>
        </div>

        <BaseCard>
            <div class="flex flex-col items-center text-center max-w-md mx-auto mb-10">
                <img src="https://auth.organizze.com.br/images/auth/cadastro-007a76dc766900e275dc0f6f934d3de1.png?vsn=d" alt="Ilustração de cadastro" class="w-24 h-24 sm:w-28 sm:h-28 m-auto mb-4" />
                <h1 class="mb-2 text-xl sm:text-2xl font-semibold text-[#2E312D] leading-tight">
                    Recupere sua Senha
                </h1>
                <p class="text-sm sm:text-base text-[#5C5F5A] leading-relaxed mb-0.5">
                    Digite seu e-mail para receber um link de recuperação
                </p>
                <p class="text-xs sm:text-sm text-[#7A7D77]">
                    Enviaremos instruções para redefinir sua senha
                </p>
            </div>

            <form @submit.prevent="submit" method="post" action="" class="w-full flex flex-col items-center" autocomplete="off">

                <div class="flex justify-between items-center w-full ">
                    <div>
                        <h2 class="text-sm font-semibold text-[#4D4D4D]"> Seu email</h2>
                    </div>

                    <a href="/entrar" class="text-sm font-medium text-[#16C64F] hover:underline hover:text-[#117641] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                        ← Voltar e entrar!
                    </a>
                </div>

                <div class="mb-6 flex w-full flex-col">
                    <EmailInput v-model="email" label="" placeholder="exemplo@email.com" />
                </div>

                <!-- Texto informativo -->
                <div class="mb-6 w-full hidden">
                    <p class="text-xs sm:text-sm text-[#5C5F5A] bg-blue-50 p-3 rounded-lg border border-blue-100">
                        🔒 <span class="font-medium">Segurança garantida:</span>
                        O link de recuperação é válido por 30 minutos e será enviado apenas para este e-mail.
                    </p>
                </div>

                <!-- Botão de envio -->
                <button type="submit" class="h-12.5 text-[#FEFDF9] bg-[#16C64F] relative w-full rounded-md font-semibold transition duration-200 ease-out hover:bg-[#117641] hover:ease-in focus:outline-none focus:ring-2 focus:ring-[#16C64F] focus:ring-opacity-50  cursor-pointer">
                    Enviar link de recuperação
                </button>

            </form>
        </BaseCard>

        <div class="mt-6 text-center">
            <p class="text-xs text-[#7A7D77]">
                Precisa de ajuda?
                <a class="text-[#16C64F] hover:underline font-medium cursor-pointer ml-1">
                    Contatar suporte
                </a>
            </p>
        </div>
    </div>
</template>
