<template lang="pug">
.my-6
    router-link(:to="destination")
      .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white.text-center
        thumbor.w-full(:src="src" width="266" height="")
        .px-6.py-4
          .font-bold.text-xl.mb-2 {{ title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'WhiteSquare',
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
