<template lang="pug">
nav(
    class="lg:hidden bg-gray-700 py-2 px-6"
    v-if="open"
  )
  .flex.mt-4
    router-link(:to="{name: 'quienes-somos'}" class="text-teal-200 hover:text-white") ¿Quiénes somos?
  .flex.mt-4
    router-link(:to="{name: 'que-hacemos'}" class="text-teal-200 hover:text-white") ¿Qué hacemos?
  .flex.mt-4
    router-link(:to="{name: 'que-puedes-hacer-tu'}" class="text-teal-200 hover:text-white") ¿Qué puedes hacer tú?
  .flex.mt-4
    router-link(:to="{name: 'donacion'}" class="text-teal-200 hover:text-white") Apadrina nuestro proyecto
  .flex.mt-4
    router-link(:to="{name: 'socio'}" class="text-teal-200 hover:text-white") Hazte socio
  .flex.mt-4.mb-4
    router-link(:to="{name: 'voluntario'}" class="text-teal-200 hover:text-white") Hazte voluntario
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MobileLinks',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
})
</script>
