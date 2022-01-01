<template lang="pug">
router-link(:to="to")
  styled-button(:text="text") 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LinkButton',
  props: {
    text: {
      type: String
    },
    to: {
      type: String
    }
  }
})
</script>
