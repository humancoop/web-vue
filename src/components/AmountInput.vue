<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
div(class="md:flex md:items-center")
  amount-square(
    v-for="(value, index) in amounts"
    :id="index"
    :key="index"
    :selected="index === selectedIndex"
    :value="value"
    @selected="onAmountSelected"
    :disabled="disabled"
  )
  amount-square(
    :id="3"
    :selected="selectedIndex === 3"
    @selected="onAmountSelected"
    @customAmount="onCustomAmount"
    :disabled="disabled"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AmountInput',
  props: {
    label: String,
    disabled: Boolean,
    amounts: {
      type: Array
    }
  },
  data() {
    return {
      selectedIndex: 0,
      customAmount: 10,
    }
  },
  emits: ['update:value'],
  methods: {
    onAmountSelected(selectedIndex) {
      this.selectedIndex = selectedIndex
      this.amount = this.amounts[selectedIndex]
      if (this.amount !== undefined) {
        this.$emit('update:value', this.amount)
      } else {
        this.$emit('update:value', this.customAmount)
      }
    },
    onCustomAmount(amount) {
      this.customAmount = amount
      this.$emit('update:value', this.customAmount)
    }
  },
})
</script>
