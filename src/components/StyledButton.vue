<template lang="pug">
button(
  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
  :type="type"
  :disabled="waiting"
)
  div(v-if="waiting") Enviando...
  div(v-else) {{text}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StyledButton',
  props: {
    text: {
      type: String
    },
    type: {
      type: String
    },
    waiting: {
      type: Boolean
    },
  }
})
</script>
