<template lang="pug">
h1(:class="classes") {{text}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SectionTitle',
  props: {
    text: String,
    size: {
        type: String,
        default: '6'
    },
  },
  computed: {
    classes: function () {
        return `text-center text-${this.size}xl leading-relaxed`
    }
  }
})
</script>
