<template lang="pug">
section-title(text="Enfermería")
.bg-gray-400
  thumbor.object-cover.w-full(
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/enfermeria_portada.jpg"
    width="896"
    height=""
  )
.text-justify.py-4
 | Desde el área de enfermería se puede colaborar en muchos aspectos. Gracias a la diversidad de especialidades la enfermería hace de nexo y cohesión para todas las áreas medicas realizando cribado y triaje de todos los pacientes que acuden para recibir una atención sanitaria integral. 
.text-justify.py-4
  | La primera atención sanitaria se da desde aquí, realizando valoraciones sencillas de orientación para los facultativos especialistas. Además, estamos presentes en las urgencias, los tratamientos in situ o en haimas (domicilios), la formación profesional, la educación sanitaria y la prevención y promoción de hábitos saludables para toda la comunidad.
.text-justify.py-4
 | La enfermería autóctona es escasa, los pocos que hay ayudan a su comunidad y luchan
 | frente a la escasez de material, fármacos y médicos, que aun hay menos. La experiencia
 | en el terreno es muchas veces parte de la formación y ellos son los que mejor lo saben.
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



