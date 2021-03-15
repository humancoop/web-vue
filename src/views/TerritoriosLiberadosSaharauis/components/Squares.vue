<template lang="pug">
.my-6.text-center
    square(
        title="Pediatría"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/pediatria.jpg"
        href="pediatria"
    )
    square(
        title="Oftalmología"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/oftalmologia.jpg"
        href="oftalmologia"
    )
    square(
        title="Odontología"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/odontologia.jpg"
        href="odontologia"
    )
    square(
        title="Medicina"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/medicina.jpg"
        href="medicina-general"
    )
    square(
        title="Laboratorio"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/laboratorio.jpg"
        href="laboratorio"
    )
    square(
        title="Ginecología"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/ginecologia.jpg"
        href="ginecologia"
    )
    square(
        title="Farmacia"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/farmacia.jpg"
        href="farmacia"
    )
    square(
        title="Enfermería"
        src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/enfermeria.jpg"
        href="enfermeria"
    )
    .clearfix
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  Square from './Square.vue'
export default defineComponent({
  name: 'Squares',
  components: {
    Square,
  }
})
</script>
