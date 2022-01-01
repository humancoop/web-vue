<template lang="pug">
link-button(to="{name:'donacion'}" text="Haz una donación")
link-button.mx-2(to="{name:'socio'}" text="Hazte socio")
link-button(to="{name:'voluntario'}" text="Hazte voluntario")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  LinkButton from './LinkButton.vue'
export default defineComponent({
  name: 'LinkButtons',
  components: {
    LinkButton
  }
})
</script>
