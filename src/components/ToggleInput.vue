<template lang="pug">
label(class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name")
  | {{label}}
div(class="flex content-center")
  input(
    type="checkbox"
    value="1"
    :name="name"
    :id="name"
    @input="$emit('update:value', $event.target.value)"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ToggleInput',
  props: {
    name: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
  },
  emits: ['update:value']
})
</script>
