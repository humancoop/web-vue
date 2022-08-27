<template lang="pug">
img(:src="fullPath" style="object-fit:cover;")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Thumbor',
  props: {
    src: String,
    width: String,
    height: String,
  },
  computed: {
    fullPath: function () {
      return 'https://images.namelivia.com'.concat(
		'/unsafe/',
		this.width,
        'x',
        this.height,
        '/smart/',
		this.src
      )
    }
  }
})
</script>
