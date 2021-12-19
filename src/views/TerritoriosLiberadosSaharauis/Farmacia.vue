<template lang="pug">
section-title(text="Farmacia")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/farmacia_portada.jpg")
.text-justify.py-4.italic.text-lg
  | ¿Sabes por qué fracasan la mayoría de los tratamientos en los pacientes crónicos de Territorios Liberados?
.text-justify.py-4.font-bold
  | No existe adherencia al tratamiento.
.text-justify.py-4
  | A diario, lidian con la
  b  incertidumbre de si conseguirán la medicación para tratar sus problemas de salud.
  br
  | No saben si el próximo mes van a disponer de inhaladores para paliar los síntomas de sus problemas respiratorios.
  br
  | Ignoran si lograrán mantener la glucosa a raya. O si se les descompensará hasta el punto que no puedan moverse de su haima.
  br
  | O si los niños seguirán teniendo alteraciones gastrointestinales por falta de antiparasitarios, antibióticos con los que tratar las infecciones o productos de aseo mínimo que disminuyan los problemas en la piel.
.text-justify.py-4.italic.text-lg.italic
  | ¿Y cuál es nuestro papel al respecto?
.text-justify.py-4
  | Desde España, hacemos una previsión de medicación por paciente en torno a 4-6 meses - en función de sus patologías crónicas más frecuentes. Y la llevamos con nosotros.
  br
  | Una vez en terreno, y tras una exploración previa del paciente por un especialista, se le proporcionan los fármacos que necesita para resolver esa patología.
  br
  | Nuestra farmacia
  b  no es solo un dispensador de medicamentos... 
  br
  | Vamos más allá.
  br
  | Tratamos de
  b  ser una herramienta que les aporte información sobre su enfermedad y cómo tratarla.
  br
  | Qué deben de tomar, que comprendan cómo deben hacerlo y cómo no, con qué otra medicación pueden tener efectos adversos o que una medicina no es algo a lo que deban atarse por siempre jamás.
  br
  | Les
  b  ayudamos a conocerse
  |  y a lograr otros puntos de vista sobre
  b  cómo cuidarse con pequeños gestos que mejoren su estilo de vida.
.text-justify.py-4.italic.text-lg.italic
  | Queremos que su salud esté en sus manos.
.text-justify.py-4
  | ¿Te apuntas a este reto?

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



