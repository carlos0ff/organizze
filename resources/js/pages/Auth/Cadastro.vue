<script setup>
import { ref } from 'vue';

// Estados do formulário
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const termsAccepted = ref(false);

// Validações (opcional - você pode implementar depois)
const errors = ref({});

const handleSubmit = () => {
    // Lógica de submissão do formulário
    console.log({
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        termsAccepted: termsAccepted.value,
    });
};

const handleGoogleLogin = () => {
    // Lógica de login com Google
    console.log('Login com Google');
};

const handleFacebookLogin = () => {
    // Lógica de login com Facebook
    console.log('Login com Facebook');
};
</script>

<template>
    <div class="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-8">
        <!-- Logotipo com espaçamento refinado -->
        <div class="mb-6 sm:mb-8 md:mb-10">
            <a href="/" class="flex items-center justify-center" aria-label="Página inicial Organizze">
                <img
                    src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d"
                    alt="Organizze"
                    class="object-contain h-7 sm:h-9 md:h-10 transition-transform duration-200 hover:scale-105"
                    loading="eager"
                />
            </a>
        </div>

        <!-- Card principal -->
        <div class="w-full max-w-md bg-white shadow-xl rounded-xl sm:rounded-2xl px-5 py-7 sm:px-8 sm:py-10 md:px-10 md:py-12">
            <!-- Cabeçalho da seção -->
            <div class="flex flex-col items-center text-center max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
                <h1 class="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-[#1E2B21] leading-tight tracking-tight">
                    Crie sua conta<br class="hidden xs:inline" />
                    como quiser
                </h1>
                <p class="text-sm sm:text-base text-[#4A4F48] leading-relaxed">Comece a controlar sua grana de forma simples e eficiente</p>
            </div>

            <!-- Botões de autenticação social -->
            <div class="flex flex-col w-full gap-3 mb-6 sm:mb-8">
                <!-- Google - Versão simplificada -->
                <button
                    @click="handleGoogleLogin"
                    class="group w-full h-12 flex items-center justify-center gap-3 border border-[#E0E0E0] rounded-lg bg-white font-medium transition-all duration-200 hover:bg-[#ea4435] hover:border-[#ea4435] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ea4435] focus:ring-offset-2"
                >
                    <!-- SVG único com efeito hover via CSS -->
                    <svg
                        class="w-5 h-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"
                        />
                        <path
                            fill="#4285F4"
                            d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"
                        />
                    </svg>
                    <span class="text-gray-700 transition-colors duration-200 group-hover:text-white">Continuar com Google</span>
                </button>

                <!-- Facebook - Versão refinada -->
                <button
                    @click="handleFacebookLogin"
                    class="hover:cursor-pointer w-full group flex items-center justify-center gap-3 rounded-lg bg-[#1877F2] px-8 py-3 text-sm sm:text-base font-medium text-white transition-all duration-200 hover:bg-[#166FE5] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2"
                >
                    <svg
                        width="12"
                        height="24"
                        viewBox="0 0 12 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="shrink-0 fill-current transition-transform duration-200 group-hover:scale-110"
                        aria-hidden="true"
                    >
                        <path
                            d="M7.78896 23.9738V13.4848H11.3269L11.8566 9.3971H7.78896V6.78721C7.78896 5.60374 8.11924 4.79715 9.82479 4.79715L12 4.79615V1.14015C11.6236 1.09051 10.3325 0.979248 8.83037 0.979248C5.69421 0.979248 3.54712 2.88415 3.54712 6.38258V9.39721H0V13.4849H3.54701V23.9739L7.78896 23.9738Z"
                        />
                    </svg>
                    <span>Continuar com Facebook</span>
                </button>
            </div>

            <!-- Divisor "ou" aprimorado -->
            <div class="relative flex items-center justify-center mb-6 sm:mb-8">
                <div class="border-t border-gray-200 flex-grow"></div>
                <span class="mx-4 text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">ou</span>
                <div class="border-t border-gray-200 flex-grow"></div>
            </div>

            <!-- Formulário -->
            <form @submit.prevent="handleSubmit" autocomplete="off" class="w-full flex flex-col items-center">
                <!-- Email -->
                <div class="mb-4 flex w-full flex-col">
                    <label for="email" class="text-[#4D4D4D] font-semibold mb-2 text-sm sm:text-base"> Seu e-mail </label>
                    <input
                        id="email"
                        v-model="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        type="email"
                        required
                        class="px-4 border border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-lg transition-all duration-200 focus:outline-none focus:border-[#1DB968] focus:shadow-[0_0_0_3px_rgba(29,185,104,0.1)] focus:ring-0 hover:border-[#1DB968]/50"
                    />
                </div>

                <!-- Campos de senha lado a lado -->
                <div class="flex w-full flex-col sm:flex-row gap-3 sm:gap-2 text-sm sm:text-base">
                    <div class="flex flex-col w-full sm:w-1/2">
                        <label for="password" class="text-[#4D4D4D] font-semibold mb-2 text-sm sm:text-base"> Sua senha </label>
                        <input
                            id="password"
                            v-model="password"
                            name="password"
                            placeholder="Digite a senha"
                            type="password"
                            required
                            minlength="6"
                            class="px-4 border border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-lg transition-all duration-200 focus:outline-none focus:border-[#1DB968] focus:shadow-[0_0_0_3px_rgba(29,185,104,0.1)] focus:ring-0 hover:border-[#1DB968]/50"
                        />
                    </div>

                    <!-- Confirmar senha -->
                    <div class="flex flex-col w-full sm:w-1/2">
                        <label for="passwordConfirmation" class="text-[#4D4D4D] font-semibold mb-2 text-sm sm:text-base"> Repetir senha </label>
                        <input
                            id="passwordConfirmation"
                            v-model="passwordConfirmation"
                            name="password_confirmation"
                            placeholder="Digite novamente"
                            type="password"
                            required
                            minlength="6"
                            class="px-4 border border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-lg transition-all duration-200 focus:outline-none focus:border-[#1DB968] focus:shadow-[0_0_0_3px_rgba(29,185,104,0.1)] focus:ring-0 hover:border-[#1DB968]/50"
                        />
                    </div>
                </div>

                <!-- Termos e Serviços - Versão aprimorada -->
                <div class="mt-6 flex w-full items-start gap-3">
                    <input
                        id="termsUse"
                        v-model="termsAccepted"
                        name="terms_use"
                        type="checkbox"
                        required
                        class="mt-0.5 w-4 h-4 border-2 border-[#DBDED8] rounded focus:ring-2 focus:ring-[#1DB968] focus:ring-offset-2 checked:bg-[#1DB968] checked:border-[#1DB968] transition-colors duration-200"
                    />
                    <label for="termsUse" class="text-[#4A4F48] text-sm leading-relaxed font-medium">
                        Li e concordo com os
                        <a
                            href="/termos"
                            class="text-[#1DB968] font-semibold underline hover:text-[#117641] hover:no-underline transition-colors duration-200"
                            target="_blank"
                        >
                            termos de uso
                        </a>
                    </label>
                </div>

                <!-- Botão de submit -->
                <button
                    type="submit"
                    class="h-12 text-white bg-[#1DB968] relative mt-6 w-full rounded-lg font-semibold transition-all duration-200 ease-out hover:bg-[#117641] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1DB968] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1DB968] disabled:hover:shadow-none"
                    :disabled="!termsAccepted"
                >
                    Criar conta
                </button>
            </form>

            <!-- Link para login -->
            <div class="text-center mt-6">
                <p class="text-sm text-gray-600">
                    Já tem uma conta?
                    <a href="/entrar" class="font-semibold text-[#1DB968] hover:text-[#117641] hover:underline transition-colors duration-200">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
