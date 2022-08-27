<template lang="pug">
div(class="lg:hidden")
  div(class="flex flex-wrap mt-4")
    div(class="w-full my-2 px-2 py-2 text-center bg-gray-500")
      a(href="/quienes-somos/voluntarios")
          .font-bold Voluntarios
    div(class="w-full my-2 px-2 py-2 text-center bg-gray-500")
      a(href="/quienes-somos/junta")
          .font-bold Junta
    div(class="w-full my-2 px-2 py-2 text-center bg-gray-500")
      a(href="/quienes-somos/estatutos")
          .font-bold Estatutos
    div(class="w-full my-2 px-2 py-2 text-center bg-gray-500")
      router-link(:to="{'name': 'memorias'}")
          .font-bold Memorias
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SidebarMobile'
})
</script>
