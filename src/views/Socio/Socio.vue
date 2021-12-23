<template lang="pug">
section-title(text="Hazte socio")
socio-form(@send="onSend")
</template>

<script lang="ts">
import router from '@/router'
import { newMember } from '@/apis/apis'
  export default {
    methods: {
      async onSend(data) {
        try {
          await newMember(data) 
          router.replace('/formulario-enviado')
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
