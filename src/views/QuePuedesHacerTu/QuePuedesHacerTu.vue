<template lang="pug">
section-title(text="¿Qué puedes hacer tú?")
.flex.items-center.flex-col
  white-square(
    href="donacion"
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/dona.jpg"
    title="Apadrina el proyecto"
  )
  white-square(
    href="voluntario"
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/manos.jpg"
    title="Hazte voluntario"
  )
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import  WhiteSquare from './components/WhiteSquare.vue'
export default defineComponent({
  components: {
    WhiteSquare,
  }
})
</script>
