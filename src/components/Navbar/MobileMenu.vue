<template lang="pug">
div(class="block lg:hidden")
    button(class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white")
      svg(
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      )
        path(
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        )

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MobileMenu'
})
</script>
