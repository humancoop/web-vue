<template lang="pug">
thumbor.object-cover.w-full(:src="src" width="896" height="")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CoverImage',
  props: {
    src: String,
  }
})
</script>
