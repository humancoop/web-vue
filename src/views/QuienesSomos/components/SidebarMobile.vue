<template lang="pug">
div(class="lg:hidden")
  div(class="flex flex-wrap content-between mt-4")
    a(href="/quienes-somos/voluntarios" class="w-1/4 mx-2 my-2 text-center")
      .max-w-sm.overflow-hidden.bg-gray-500
        .px-1.py-1
          .font-bold Voluntarios
    a(href="/quienes-somos/junta" class="w-1/4 mx-2 my-2 text-center")
      .max-w-sm.overflow-hidden.bg-gray-500
        .px-1.py-1
          .font-bold Junta
    a(href="/quienes-somos/estatutos" class="w-1/4 mx-2 my-2 text-center")
      .max-w-sm.overflow-hidden.bg-gray-500
        .px-1.py-1
          .font-bold Estatutos
    router-link(:to="{'name': 'memorias'}" class="w-1/4 mx-2 my-2 text-center")
      .max-w-sm.overflow-hidden.bg-gray-500
        .px-1.py-1
          .font-bold Memorias
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SidebarMobile'
})
</script>
