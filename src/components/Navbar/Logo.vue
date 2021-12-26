<template lang="pug">
router-link.flex.items-centerflex-shrink-0.text-white.mr-6(:to="{name:'inicio'}")
  fa.mr-1.text-3xl(icon="globe-africa")
  span.font-semibold.text-xl.tracking-tight Human
  span.font-semibold.text-xl.tracking-tight.text-teal-500 Coop
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Logo'
})
</script>
