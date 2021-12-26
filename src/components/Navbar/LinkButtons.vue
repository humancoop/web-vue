<template lang="pug">
router-link(:to="{name:'donacion'}")
  button(class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded")
    | Haz una donación
router-link(:to="{name:'socio'}")
  button(class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 mx-2 px-4 rounded")
    | Hazte socio
router-link(:to="{name:'voluntario'}")
  button(class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded")
    | Hazte voluntario
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LinkButtons'
})
</script>
