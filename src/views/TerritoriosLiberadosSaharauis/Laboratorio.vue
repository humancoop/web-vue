<template lang="pug">
section-title(text="Laboratorio")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/laboratorio_portada.jpg")
.text-justify.py-4
  | Hasta el año 2018, los Territorios Liberados carecían prácticamente de pruebas de
  | análisis clínicos que ayudaran al diagnóstico, manejo y seguimiento de los pacientes
  | de esta región. Esto hacía imposible el cumplimiento del Manual Clínico Terapéutico
  | para la Atención Primaria de la RASD y de ciertos Programas Nacionales de Salud que
  | hasta entonces solo se cumplían, al menos de forma parcial, en los campamentos de
  | refugiados de Tindouf.

.text-justify.py-4
  | Gracias a este proyecto, desde abril de 2018 se comenzaron a realizar en Tifariti y
  | Mehaires algunas pruebas básicas ya disponibles en los campamentos de refugiados,
  | incluyendo tests de enfermedades infecciosas como el VIH, la sífilis, la hepatitis B
  | y la hepatitis C, necesarios para el correcto cumplimiento del Programa Nacional de
  | Salud Sexual y Reproductiva. Asimismo, también se empezaron a realizar otras pruebas,
  | tales como el hematocrito, el grupo sanguíneo o el análisis de heces para la
  | detección de oxiuros.

.text-justify.py-4
  | Desde entonces, la cartera de servicios en las comisiones médicas ha ido aumentando
  | paulatinamente, incluyendo determinaciones tan necesarias como la hemoglobina o
  | numerosos parámetros de bioquímica básica. Las adiciones más recientes son los tests
  | para la detección de Helicobacter pylori y la determinación de anticuerpos
  | antitransglutaminasa para celiaquía, cuya prevalencia en la población saharaui es la
  | más alta del mundo.

.text-justify.py-4
  | La presencia de un laboratorio funcional en TTLL también ha posibilitado la
  | realización de estudios epidemiológicos y la recogida de información sanitaria que
  | permita dirigir las actuaciones en Salud y visibilice la situación sanitaria de esta
  | región. En mayo de 2019 se inició el primer estudio de celiaquía en TTLL y también se
  | ha llevado a cabo un estudio preliminar sobre los niveles de colesterol y
  | triglicéridos en la población saharaui.

p
  ul Actividades:
    li Permitir el acceso a pruebas de laboratorio de la población de los Territorios Liberados del Sáhara Occidental.
    li Mantenimiento del laboratorio de Tifariti.
    li Comisiones periódicas en diversas localidades.
    li Estudios epidemiológios.
    li Formación de personal local.
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
