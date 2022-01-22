<template lang="pug">
div(:class="cssClass" @click="onAmountSquareClick")
  span(class="text-4xl" v-if="value") {{value}} €
  div(v-else)
    p(class="text-2xl whitespace-nowrap") Otra cantidad
    p (Mínimo 10€)
    input.mt-4(
      class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
      id="custom_amount"
      name="custom_amount"
      type="number"
      min="10"
      step="5"
      value="10"
      placeholder="Cantidad"
      @input="onCustomAmount($event.target.value)"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AmountSquare',
  props: {
    value: Number,
    selected: Boolean,
    disabled: Boolean,
    id: Number,
  },
  computed: {
    cssClass: function () {
      const commonCss = "grow my-4 md:my-0 bg-gray-600 md:mx-4 text-center px-2 py-2 border-4 hover:cursor-pointer hover:border-teal-400"
      if (this.selected) {
        return `text-teal-400 border-teal-400 border-4 ${commonCss}`
      }
      return `bg-gray-100 ${commonCss}`
    }
  },
  methods: {
    onAmountSquareClick() {
      if (!this.disabled) {
        this.$emit('selected', this.id)
      }
    },
    onCustomAmount(amount) {
      if (!this.disabled) {
        this.$emit('customAmount', amount)
      }
    },
  },
  emits: ['selected', 'customAmount']
})
</script>
