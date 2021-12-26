<template lang="pug">
navbar
main.mb-auto.mx-auto.text-gray-900.max-w-4xl
  router-view
footer.text-center.w-full.mt-16.bg-gray-900.p-4
  footer-content
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  Navbar from './components/Navbar/Navbar.vue'
import  FooterContent from './components/FooterContent.vue'
export default defineComponent({
  components: {
    FooterContent,
    Navbar,
  }
})
</script>


