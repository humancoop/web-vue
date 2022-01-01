<template lang="pug">
div
  input(type="checkbox" :required="required").mr-2
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StyledCheckbox',
  props: {
    required: Boolean
  }
})
</script>
