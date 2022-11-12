<template lang="pug">
section-title(text="Hazte socio")
socio-form(@send="onSend" :waiting="waiting")
</template>

<script lang="ts">
import router from '@/router'
import { newSocio } from '@/apis/apis'
  export default {
    methods: {
      async onSend(data) {
        this.waiting = true
        try {
          await newSocio(data) 
          router.replace('/formulario-enviado')
        } catch (err) {
          console.log(err)
        } finally {
          this.waiting = false
        }
      }
    },
    data() {
      return {
        waiting: false,
      }
    },
  }
</script>
