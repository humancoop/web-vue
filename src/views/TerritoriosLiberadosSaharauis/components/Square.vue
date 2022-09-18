<template lang="pug">
div(class="flex text-center")
  router-link(:to="destination")
    div(class="overflow-hidden bg-white shadow-lg" style="width:105px")
      thumbor(:src="src" width="105" height="")
      .font-bold.text-base.mb-2 {{ title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Square',
  props: {
    href: String,
    src: String,
    title: String,
  },
  computed: {
    destination: function () {
      return {name: this.href}
    }
  }
})
</script>
