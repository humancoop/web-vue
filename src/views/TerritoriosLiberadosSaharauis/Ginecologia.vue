<template lang="pug">
section-title(text="Ginecología y obstetricia")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/ginecologia_portada.jpg")
.text-justify.py-4
  | En Territorios Liberados no existe una red sanitaria que permita el control y cribado de las principales patologías ginecoobstétricas. Por ello, y colaborando conjuntamente con el personal saharaui, se está trabajando para asegurar una asistencia integral a la mujer, en especial a la mujer embarazada.
.text-justify.py-4
  | Este proyecto tiene varios objetivos, entre los cuales destacan la implantación de distintos programas de cribado ginecoobstétrico; el control del embarazo y postparto con protocolos basados en los de los Campamentos de Refugiados en Argelia; el despistaje de patologías ginecoobstétricas que necesitan derivación urgente o diferida al Hospital Nacional de Rabouni; y la elaboración de un plan integral de educación sexual y reproductiva.
.text-justify.py-4
  | Como ves, ¡todavía hay muchísimo trabajo por hacer! ¡Necesitamos tu ayuda!
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
