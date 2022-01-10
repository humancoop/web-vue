<template lang="pug">
header
  nav.flex.items-center.justify-between.flex-wrap.bg-gray-900.p-6
    logo
    mobile-menu
    div(class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto")
      social-links
      link-buttons
  navigation-links
  mobile-links
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavigationLinks from './NavigationLinks.vue'
import  MobileLinks from './MobileLinks.vue'
import  Logo from './Logo.vue'
import  MobileMenu from './MobileMenu.vue'
import  SocialLinks from './SocialLinks.vue'
import  LinkButtons from './LinkButtons.vue'
export default defineComponent({
  name: 'NavBar',
  components: {
    NavigationLinks,
    MobileLinks,
    Logo,
    MobileMenu,
    SocialLinks,
    LinkButtons,
  }
})
</script>
