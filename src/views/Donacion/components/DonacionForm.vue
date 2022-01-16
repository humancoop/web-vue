<template lang="pug">
form.p-10.w-full.bg-gray-400.rounded(@submit="onSubmit")
  form-row
    form-field
      span Rellena este formulario y colabora con nosotros con una aportación mensual.
  form-row
    form-field
      text-input(
        label="Nombre y apellidos"
        name="full_name"
        v-model:message="form_data.full_name"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="NIF"
        name="nif"
        v-model:message="form_data.nif"
        :disabled="waiting"
        required
      )
  form-row
    form-field
      text-input(
        label="Dirección"
        name="address"
        v-model:message="form_data.address"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Localidad"
        name="city"
        v-model:message="form_data.city"
        :disabled="waiting"
        required
      )
    form-field(small)
      text-input(
        label="Provincia"
        name="province"
        v-model:message="form_data.province"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Código postal"
        name="postcode"
        v-model:message="form_data.postcode"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      email-input(
        label="Email"
        name="email"
        v-model:message="form_data.email"
        :disabled="waiting"
        required
      )
    form-field(small)
      tel-input(
        label="Teléfono móvil"
        name="phone_number"
        v-model:message="form_data.phone_number"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Número de cuenta (IBAN)"
        name="account_number"
        v-model:message="form_data.account_number"
        :disabled="waiting"
        required
      )
    form-field(small)
      text-input(
        label="Nombre del titular"
        name="account_owner_name"
        v-model:message="form_data.account_owner_name"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      select-input(
        label="Aportación Mensual (€)"
        name="amount"
        :disabled="waiting"
        :options="[['10', 10], ['20', 20], ['30', 30], ['50', 50]]"
        v-model:value="form_data.amount"
        required
      )
  form-row
    form-field(small)
      styled-checkbox(required)
        span.mr-2 Acepto la
        styled-route-link(:to="{name: 'privacidad'}") política de privacidad
    form-field(small)
      styled-checkbox(required)
        span.mr-2 Acepto que
        styled-route-link(:to="{name: 'condiciones'}") me pasen los recibos
  form-row
    form-field
      submit-button(text="Enviar" :waiting="waiting")
  form-row
    form-field
      div
        span Si prefieres colaborar con una donación puntual, este es nuestro número de cuenta:
        br
        span ES31 2100 0876 3002 0029 8355
  form-row
    form-field
      span.mr-2 ¿Tienes alguna duda?
      styled-link(href="mailto:eugenia.guinea@gmail.com") Ponte en contacto con nosotros
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DonacionForm',
  data() {
    return {
      form_data: {
        full_name: null,
        nif: null,
        address: null,
        city: null,
        province: null,
        postcode: null,
        email: null,
        phone_number: null,
        account_number: null,
        account_owner_name: null,
        amount: 10
      }
    }
  },
  props: {
    waiting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSubmit(evt) {
      if (evt) {
        evt.preventDefault()
      }
      this.$emit('send', this.form_data)
    }
  }
})
</script>
