<template lang="pug">
div(class="hidden lg:w-1/6 lg:block")
  a(href="/quienes-somos/voluntarios" class="text-center")
    .max-w-sm.overflow-hidden.bg-gray-500.my-2
      .px-6.py-4
        .font-bold.text-l Voluntarios
  a(href="/quienes-somos/junta" class="text-center")
    .max-w-sm.overflow-hidden.bg-gray-500.my-2
      .px-6.py-4
        .font-bold.text-l Junta
  a(href="/quienes-somos/estatutos" class="text-center")
    .max-w-sm.overflow-hidden.bg-gray-500.my-2
      .px-6.py-4
        .font-bold.text-l Estatutos
  router-link(:to="{'name': 'memorias'}" class="text-center")
    .max-w-sm.overflow-hidden.bg-gray-500.my-2
      .px-6.py-4
        .font-bold.text-l Memorias
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Sidebar'
})
</script>
