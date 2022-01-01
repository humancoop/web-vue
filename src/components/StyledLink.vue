<template lang="pug">
a(class="text-teal-200" :href="href")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StyledLink',
  props: {
    href: {
      type: String
    }
  }
})
</script>
