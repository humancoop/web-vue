<template lang="pug">
div(:class="cssClass")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormField',
  props: {
    small: Boolean,
    verySmall: Boolean
  },
  computed: {
    cssClass: function () {
      return "w-full px-3 mb-6 md:mb-0" + (this.small? " md:w-1/2" : "") + (this.verySmall ? " md:w-1/3" : "")
    }
  }
})
</script>
