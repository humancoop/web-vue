<template lang="pug">
.flex.mx-4.my-4
  thumbor(:src="src" width="150" height="")
  .flex.flex-col.mx-4
    div(class="text-2xl lg:text-4xl") {{ fullname }}
    div(class="text-xl lg:text-2xl") {{ title }}
    div(class="text-xl lg:text-2xl") {{ other }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Member',
  props: {
    src: String,
    fullname: String,
    title: String,
    other: String,
  }
})
</script>
