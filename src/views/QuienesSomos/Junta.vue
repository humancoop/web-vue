<template lang="pug">
section-title-long(text="Junta directiva y responsables de área")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/portada_estatutos2.png")
.flex.flex-col
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/ignacio.jpg"
    fullname="Ignacio Calatayud"
    title="Presidente"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/eugenia.jpg"
    fullname="Eugenia Guinea"
    title="Secrentaria y Tesorera"
    other="Área de Ginecología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/gema2.jpg"
    fullname="Gema Palacios"
    title="Vocal de Comunicación"
    other="Área de Farmacia"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/cristina.jpg"
    fullname="Cristina del Prado Sánchez"
    title="Vocal de Financiación y Proyectos"
    other="Área de Oftalmología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/javi.jpg"
    fullname="Javier Suárez"
    title="Área de Enfermería"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/jero.jpg"
    fullname="Jerónimo Carrillo"
    title="Área de Medicina"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/iris.jpg"
    fullname="Iris González Gómez de Agüero"
    title="Área de Pediatría"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/oscar2.jpg"
    fullname="Óscar Rodríguez"
    title="Área de Odontología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/chiqui.jpg"
    fullname="Chiqui Reyes"
    title="Área de Prótesis Dentales"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/rut.jpeg"
    fullname="Ruth Franco"
    title="Área de Veterinaria"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/esther.jpg"
    fullname="Esther Simón"
    title="Área de Laboratorio"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/edu.jpg"
    fullname="Eduardo Villegas"
    title="Área de Laboratorio"
  )
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import  Member from './components/Member.vue'
export default defineComponent({
  components: {
    Member,
  }
})
</script>
