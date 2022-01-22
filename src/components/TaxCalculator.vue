<template lang="pug">
.flex.items-center
  span(class="text-3xl") Te podrías desgravar&nbsp;
  span(class="text-3xl text-teal-200") {{result}} €
  span(class="text-3xl") &nbsp;al año
p.mt-4.text-justify Hasta 150€ podrías desgravar el 80% de las donaciones. De los primeros 150 € deduces el 80%.
p De la cantidad que supera esos primeros 150 € puedes deducirte el 40%, si has donado en los dos ejercicios anteriores una cantidad igual o superior al año anterior y el 35% en el resto de los casos.
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TaxCalculator',
  props: {
    amount: {
      type: Number
    }
  },
  computed: {
    result: function () {
      let partialResult = 0
      if(this.amount <= 12.5) { 
        partialResult = this.amount*0.8
      } else {
        partialResult = 10 + (0.35 * (this.amount - 12.5))
      }
      return (partialResult * 12).toFixed(2)
    }
  },
})
</script>
