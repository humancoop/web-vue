<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
label(class="text-gray-700 text-xs font-bold uppercase") No
div(class="relative inline-block w-10 mr-2 ml-2 align-middle select-none")
  input(type="checkbox" value="1" :name="name" :id="name" class="toggle-checkbox transition duration-200 ease-in-out absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer")
  label(for="toggle" class="toggle-label block transition duration-200 ease-in-out overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer")
label(class="text-gray-700 text-xs font-bold uppercase") Si
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ToggleInput',
  props: {
    name: String,
    label: String,
  }
})
</script>
