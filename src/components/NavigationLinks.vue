<template lang="pug">
nav(
    class="hidden lg:flex flex items-center justify-between flex-wrap bg-gray-700 py-2 px-6"
  )
  router-link(:to="{name: 'quienes-somos'}" class="text-teal-200 hover:text-white") ¿Quiénes somos?
  router-link(:to="{name: 'que-hacemos'}" class="text-teal-200 hover:text-white") ¿Qué hacemos?
  router-link(:to="{name: 'que-puedes-hacer-tu'}" class="text-teal-200 hover:text-white") ¿Qué puedes hacer tú?
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavigationLinks'
})
</script>
