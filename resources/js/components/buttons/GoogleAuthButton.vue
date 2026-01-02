

<template>
  <button type="button"
    aria-label="Continuar com Google"
    class="group flex w-full items-center justify-center gap-3
      rounded-md border-[1.5px] border-[#DFDFDF]
      bg-[#FEFDF9] px-6 py-3
      text-sm sm:text-base font-medium
      transition-all duration-300 ease-in-out
      hover:bg-[#EA4435] hover:border-[#EA4435]
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-[#EA4435] focus-visible:ring-offset-2 mb-2 cursor-pointer
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 48 48"
      class="shrink-0"
    >
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.56 13.16 17.83 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.21-.43-4.73H24v9.46h12.7c-.55 2.97-2.2 5.48-4.68 7.18l7.2 5.6C43.93 37.52 46.5 31.58 46.5 24.5z"/>
      <path fill="#FBBC05" d="M10.6 28.46c-.5-1.48-.78-3.06-.78-4.71s.28-3.23.78-4.71l-8.04-6.24C.92 16.12 0 19.94 0 23.75s.92 7.63 2.56 10.95l8.04-6.24z"/>
      <path fill="#34A853" d="M24 47.5c6.47 0 11.9-2.13 15.87-5.8l-7.2-5.6c-2 1.35-4.56 2.15-8.67 2.15-6.17 0-11.44-3.66-13.4-8.96l-8.04 6.24C6.51 42.62 14.62 47.5 24 47.5z"/>
    </svg>

    <span class="text-gray-700 group-hover:text-white transition-colors">
      Continuar com Google
    </span>
  </button>

</template>
