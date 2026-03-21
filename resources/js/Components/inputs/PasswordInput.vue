<template>
    <div class="flex flex-col relative mb-4 w-full">
        <label for="password" class="text-[#4D4D4D] font-semibold mb-2">Sua senha</label>
        <div class="group relative flex flex-col items-center">
            <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                class="border-1 border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-md px-4 transition-all duration-150 ease-in-out focus:outline-none focus:border-[#1DB968] focus:shadow-focus-input-shadow focus:ring-0 group-focus-within:z-10border-1 border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-md px-4 transition-all duration-150 ease-in-out focus:border-[#1DB968] focus:shadow-focus-input-shadow focus:ring-0 group-focus-within:z-10"
                required
            />
            <a href="/recuperar" class="text-[#787878] inline-block w-full px-2 py-1 text-sm hover:text-[#16C64F]"> Esqueci minha senha </a>
        </div>
    </div>
</template>
