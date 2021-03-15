<template lang="pug">
header
  nav.flex.items-center.justify-between.flex-wrap.bg-gray-900.p-6
    logo
    mobile-menu
    div(class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto")
      social-links
      link-buttons
  navigation-links
main.mb-auto.mx-auto.text-gray-900.max-w-4xl
  router-view
footer.text-center.w-full.mt-16.bg-gray-900.p-4
  footer-content
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavigationLinks from './components/NavigationLinks.vue'
import  Logo from './components/Logo.vue'
import  MobileMenu from './components/MobileMenu.vue'
import  SocialLinks from './components/SocialLinks.vue'
import  LinkButtons from './components/LinkButtons.vue'
import  FooterContent from './components/FooterContent.vue'
export default defineComponent({
  components: {
    NavigationLinks,
    Logo,
    MobileMenu,
    SocialLinks,
    LinkButtons,
    FooterContent,
  }
})
</script>


