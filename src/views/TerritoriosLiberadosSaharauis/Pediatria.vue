<template lang="pug">
section-title(text="Pediatría")
.bg-gray-400
  thumbor.object-cover.w-full(
    src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/pediatria_portada2.png"
    width="896"
    height=""
  )
.text-justify.py-4
  | El objetivo de este área es reforzar la Atención Primaria a la población pediátrica de Territorios Liberados, acompañando y empoderando al personal sanitario local.  Actualmente no hay pediatras trabajando de manera estable en esta zona, y los pacientes son atendidos en la mayoría de las ocasiones por personal de enfermería, quienes deciden los tratamientos y realizan las derivaciones al hospital de Rabouni (Campamentos de Refugiados en Tinduf, Argelia). En las comisiones realizadas desde 2018 hemos contado con la presencia de pediatras o médicos/as de familia, que se ha encargado de llevar a cabo las actividades relacionadas con nuestro objetivo:
.text-justify.py-4
  ul
    li - Análisis de necesidades de recursos humanos y materiales, que se ha llevado a cabo a través de las comisiones médicas.
    li - Implantación y seguimiento de la Cartilla de Salud, donde poder registrar el crecimiento y desarrollo de estos pacientes, así como las enfermedades detectadas.
    li - Revisión de protocolos y adaptación a los recursos: Apoyándonos en los protocolos del PISIS y basándonos en las necesidades detectadas, queremos adaptar estos protocolos a los recursos materiales y humanos de Territorios Liberados. 
    li - Establecer vínculos con personal local saharaui para entender y definir circuitos de derivación a especialidades en Rabouni y así agilizar y facilitar la atención de patologías concretas o complejas.
    li - Comisiones de formación: después de haber llevado a cabo varias comisiones de asistencia médica mediante las que identificamos las principales patologías y necesidades de la población, en marzo de 2020 se llevó a cabo la primera comisión de formación. Acudieron a ella más de 40 sanitarios/as saharauis a los que se formó con un contenido teórico y una asistencia clínica acompañada por parte de nuestro equipo. Dado el éxito de esta comisión, las futuras comisiones médicas seguirán este formato, con el fin de apoyar la autonomía del personal saharaui y fomentar su implicación y motivación.

    li - Salud infantil a través de la escuela: a través de este proyecto se pretende hacer un estudio transversal que permita valorar la salud integral de la infancia: clínico-antropométrico, nutricional, microbiológico (parásitos en heces), oftalmológico y odontológico. De esta manera se pretende identificar situaciones de riesgo o de mejora, para así poder definir mejor nuestra ayuda y priorizar futuros proyectos.

.text-justify.py-4
  | Como ves, aún queda mucho por hacer y tú puedes formar parte del cambio. Si eres pediatra o médico/a de familia con interés en pediatría, te animamos a que te unas a nuestro equipo! 


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



