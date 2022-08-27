<template lang="pug">
section-title(text="Junta")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/portada_estatutos2.png")
.flex.flex-col
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/ignacio.jpg"
    fullname="Ignacio"
    title="Presidente"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/esther.jpg"
    fullname="Esther"
    title="Vicepresidenta"
    other="Corresponsable del área de Laboratorio"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/eugenia.jpg"
    fullname="Eugenia"
    title="Secrentaria y Tesorera"
    other="Responsable del área de Ginecología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/gema2.jpg"
    fullname="Gema"
    title="Vocal de Comunicación"
    other="Responsable del área de Farmacia"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/cristina.jpg"
    fullname="Cristina"
    title="Vocal de Financiación y Proyectos"
    other="Responsable del área de Oftalmología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/chiqui.jpg"
    fullname="Chiqui"
    title="Responsable del área de Prótesis Dentales"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/edu.jpg"
    fullname="Edu"
    title="Corresponsable del área de Laboratorio"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/iris.jpg"
    fullname="Iris"
    title="Responsable del área de Pediatría"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/jero.jpg"
    fullname="Jero"
    title="Responsable del área de Medicina"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/javi.jpg"
    fullname="Javi"
    title="Responsable del área de Farmacia"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/oscar2.jpg"
    fullname="Óscar"
    title="Responsable del área de Odontología"
  )
  member(
    src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/rut.jpeg"
    fullname="Ruth"
    title="Responsable del área de Veterinaria"
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
