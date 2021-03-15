<template lang="pug">
.my-6.text-center
  router-link(:to="destination")
    .overflow-hidden.bg-white.shadow-lg.float-right(style="width:112px;")
      thumbor(:src="src" width="112" height="")
      .px-2
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
