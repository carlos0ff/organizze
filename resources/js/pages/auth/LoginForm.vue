<script setup>
    import { ref } from 'vue';
    import AuthCard from '../../components/auth/AuthCard.vue';

    /** Elementos de entrada **/
    import EmailInput from '../../components/inputs/EmailInput.vue';
    import PasswordInput from '../../components/inputs/PasswordInput.vue';

    /** Botões de autenticação social **/
    import GoogleAuthButton from '../../components/buttons/GoogleAuthButton.vue';
    import FacebookAuthButton from '../../components/buttons/FacebookAuthButton.vue';

    /** Estado de erro **/
    const email = ref('');
    const password = ref('');

    /** Debug testes **/
    const submit = () => {
        console.log('Email:', email.value);
        console.log('Password:', password.value);
    };

</script>


<template>
   <div class="bg-gray-100 w-full flex h-screen flex-col items-center justify-center pt-5 pb-8">

        <div class="mt-8 mb-6 sm:mt-10 sm:mb-9">
            <a href="/#home">
                <img src="https://auth.organizze.com.br/images/auth/logo-909f6075bb5972376e589ed01866ee33.svg?vsn=d" alt="Logo Organizze" class=" object-contain" />
            </a>
        </div>

        <AuthCard title="Acesse sua conta">
            <GoogleAuthButton />
            <FacebookAuthButton />

            <form  @submit.prevent="submit" method="post" action="" class="space-y-4 flex flex-col w-full items-center">
                <EmailInput v-model="email" />
                <PasswordInput v-model="password" />

                <a href="#esqueci-senha"
                    class="text-[#787878] w-full hover:text-[#16C64F]  text-sm font-medium cursor-pointer">
                    Esqueci minha senha
                </a>

                <button type="submit"
                    class="font-semibold w-full bg-[#16C64F] hover:bg-[#14A842] text-[#FEFDF9] uppercase py-2 px-4 rounded-md  transition-colors cursor-pointer"
                >
                    Entrar
                </button>
            </form>


        </AuthCard>
         <span href="" class="mt-2 font-medium text-sm text-gray-600">
            Ainda não possui uma conta? <a class="text-[#16C64F] hover:underline underline font-medium cursor-pointer font-bold">Cadastre-se!</a>
        </span>
    </div>
</template>
