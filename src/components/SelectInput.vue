<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
.relative
  select(
    class="appearance-none bg-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
    :id="name"
    :name="name"
    :value="value"
    :required="required"
    :disabled="disabled"
    @input="$emit('update:value', $event.target.value)"
  )
    option(disabled) {{label}}
    option(v-for="(option, index) in options" :key="index" :value="option[1]" :text="option[0]")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SelectInput',
  props: {
    name: String,
    label: String,
    value: String,
    required: Boolean,
    disabled: Boolean,
    options: {
      type: Array
    }
  },
  emits: ['update:value']
})
</script>
