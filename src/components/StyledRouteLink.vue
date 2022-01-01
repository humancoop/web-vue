<template lang="pug">
router-link(:to="to")
  styled-link
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StyledRouteLink',
  props: {
    to: {
      type: String
    }
  }
})
</script>
