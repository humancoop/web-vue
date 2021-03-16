<template lang="pug">
h1.text-center.text-4xl.leading-relaxed {{text}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SectionTitleLong',
  props: {
    text: String,
  }
})
</script>
