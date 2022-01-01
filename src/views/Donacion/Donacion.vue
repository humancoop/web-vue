<template lang="pug">
section-title(text="Apadrina nuestro proyecto")
donacion-form(@send="onSend")
</template>

<script lang="ts">
import router from '@/router'
import { newDonation } from '@/apis/apis'
  export default {
    methods: {
      async onSend(data) {
        try {
          await newDonation(data) 
          router.replace('/formulario-enviado')
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
