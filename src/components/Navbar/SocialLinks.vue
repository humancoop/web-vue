<template lang="pug">
div(class="text-sm lg:flex-grow")
  a(
    href="https://facebook.com/humancoop.ong.9"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  )
    fa(:icon="{prefix: 'fab', iconName:'facebook'}")
  a(
    href="https://instagram.com/ong.humancoop"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  )
    fa(:icon="{prefix: 'fab', iconName:'instagram'}")
  a(
    href="https://twitter.com/human_coop"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  )
    fa(:icon="{prefix: 'fab', iconName:'twitter'}")
  a(
    href="https://open.spotify.com/user/31umi7ntu6zmm5nhl3u5etfhjnqy?si=EyPFgzvyQpmBsdxHnGbzXQ"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  )
    fa(:icon="{prefix: 'fab', iconName:'spotify'}")
  a(
    href="mailto:info@onghumancoop.org"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  )
    fa(icon="envelope")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SocialLinks'
})
</script>
