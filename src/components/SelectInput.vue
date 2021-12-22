<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
.relative
  select(
    class="appearance-none bg-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
    :id="name"
    :name="name"
    :placeholder="label"
    :value="message"
    :required="required"
    @input="$emit('update:message', $event.target.value)"
  )
    option(v-for="(option, index) in options" :key="index" :value="index" :text="option")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SelectInput',
  props: {
    name: String,
    label: String,
    message: String,
    required: Boolean,
    options: {
      type: Array
    }
  },
  emits: ['update:message']
})
</script>
