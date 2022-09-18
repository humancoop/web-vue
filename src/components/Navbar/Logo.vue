<template lang="pug">
router-link.flex.items-centerflex-shrink-0.text-white.mr-6(:to="{name:'inicio'}")
  img(src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/dentalcoop_logo_2.svg" alt="HumanCoop" width="150")

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Logo'
})
</script>
