<template lang="pug">
div(class="flex flex-wrap -mx-3 mb-6")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormRow',
})
</script>
