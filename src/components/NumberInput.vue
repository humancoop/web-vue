<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
input(class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" :id="name" :name="name" type="number" :placeholder="label")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NumberInput',
  props: {
    name: String,
    label: String,
  }
})
</script>
