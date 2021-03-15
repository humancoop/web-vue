<template lang="pug">
section-title(text="Oftalmología")
.bg-gray-400
  thumbor.object-cover.w-full(
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/oftalmologia_portada.jpg"
    width="896"
    height=""
  )
.text-justify.py-4
  | En Territorios Liberados Saharauis existe una elevada frecuencia de problemas oculares, fundamentalmente, debido a las condiciones medioambientales adversas, que implican una alta exposición solar y a fuertes corrientes de aire con arena del desierto. Las patologías más frecuentes entre los adultos son la catarata, el glaucoma y los problemas relacionados con la córnea. Las patologías más frecuentes en la infancia son las que afectan a la córnea, así como los defectos refractivos no corregidos. Destacar que las patologías oculares más frecuentes representan causas importantes de baja visión y ceguera a la par que son tratables y/o prevenibles.
.text-justify.py-4
  | A pesar de la frecuencia de patología oftalmológica en esta población, no existe ninguna alternativa de atención local en Oftalmología, dado que allí la asistencia es escasa y se encuentra fuera de los objetivos de la cooperación internacional. El oftalmólogo más cercano se encuentra en los Campamentos de Refugiados Saharauis, en Argelia.
.text-justify.py-4
  | Desde mayo de 2018, se llevan a cabo comisiones anuales Oftalmológicas en los Territorios Liberados del Sáhara Occidental, durante las cuales trabajamos estrechamente con ópticos saharauis.
.text-justify.py-4
  | En nuestra segunda comisión en mayo de 2019 se aplicó por primera vez el Plan de Oftalmología Pediátrica, durante el cual se dio asistencia a pacientes con edades comprendidas entre 0 y 16 años, encontrándose patología ocular en cerca de un 30% de ellos.
.text-justify.py-4
  | El Plan de Oftalmología en Territorios Liberados del Sáhara Occidental tiene como finalidad desarrollar un programa para la detección y tratamiento de patología oftalmológica, basado en el análisis previamente realizado de las necesidades de la población.

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



