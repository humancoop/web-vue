<template lang="pug">
link-button.mr-2(:to="{name:'donacion'}" text="Apadrina nuestro proyecto")
//link-button.mx-2(:to="{name:'socio'}" text="Hazte socio")
link-button(:to="{name:'voluntario'}" text="Hazte voluntario")
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
