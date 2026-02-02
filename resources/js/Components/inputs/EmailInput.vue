<script setup>
const props = defineProps({
  id: {
    type: String,
    default: 'email_id',
  },
  label: {
    type: String,
    default: 'Seu email',
  },
  placeholder: {
    type: String,
    default: 'Digite seu e-mail',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col relative mt-0 w-full">
    <label :for="id" class="text-[#4D4D4D] font-semibold mb-2">
      {{ label }}
    </label>

    <div class="group relative flex flex-col items-center">
      <input
        :id="id"
        type="email"
        :value="modelValue"
        @input="e => emit('update:modelValue', e.target.value)"
        :placeholder="placeholder"
        class="focus:outline-none border border-[#DBDED8] bg-[#FEFDF9] h-12 w-full rounded-md px-4 transition-all duration-150 ease-in-out focus:border-[#1DB968] focus:shadow-focus-input-shadow focus:ring-0 group-focus-within:z-10"
        required
      />
    </div>
  </div>
</template>
