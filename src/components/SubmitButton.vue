<template lang="pug">
styled-button(:text="text" type="submit" :waiting="waiting")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubmitButton',
  props: {
    text: String,
    waiting: Boolean,
  }
})
</script>
