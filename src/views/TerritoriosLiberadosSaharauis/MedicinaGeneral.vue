<template lang="pug">
section-title(text="Medicina")
.bg-gray-400
  thumbor.object-cover.w-full(
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/medicina_portada.jpg"
    width="896"
    height=""
  )
| Falta texto
squares
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import  Squares from './components/Squares.vue'
export default defineComponent({
  components: {
    Squares,
  }
})
</script>



