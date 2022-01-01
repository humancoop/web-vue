<template lang="pug">
form.p-10.w-full.bg-gray-400.rounded(@submit="onSubmit")
  form-row
    form-field
      text-input(
        label="Nombre y apellidos"
        name="full_name"
        v-model:message="form_data.full_name"
        required
      )
  form-row
    form-field(small)
      date-input(
        label="Fecha de nacimiento"
        name="birthdate"
        v-model:message="form_data.birthdate"
        required
      )
    form-field(small)
      text-input(
        label="NIF"
        name="nif"
        v-model:message="form_data.nif"
        required
      )
  form-row
    form-field
      text-input(
        label="Dirección"
        name="address"
        v-model:message="form_data.address"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Localidad"
        name="city"
        v-model:message="form_data.city"
        required
      )
    form-field(small)
      text-input(
        label="Provincia"
        name="province"
        v-model:message="form_data.province"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Código postal"
        name="postcode"
        v-model:message="form_data.postcode"
        required
      )
  form-row
    form-field(very-small)
      email-input(
        label="Email"
        name="email"
        v-model:message="form_data.email"
        required
      )
    form-field(very-small)
      tel-input(
        label="Teléfono móvil"
        name="phone_number"
        v-model:message="form_data.phone_number"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Número de cuenta (IBAN)"
        name="account_number"
        v-model:message="form_data.account_number"
        required
      )
    form-field(small)
      text-input(
        label="Nombre del titular"
        name="account_owner_name"
        v-model:message="form_data.account_owner_name"
        required
      )
  form-row
    form-field(small)
      number-input(
        label="Aportación (€)"
        name="amount"
        v-model:value="form_data.amount"
        required
      )
  div(class="md:flex md:items-center")
    submit-button(text="Enviar", type="submit")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DonacionForm',
  data() {
    return {
      form_data: {
        full_name: null,
        birthdate: null,
        nif: null,
        address: null,
        city: null,
        province: null,
        postcode: null,
        email: null,
        phone_number: null,
        secondary_phone_number: null,
        account_number: null,
        account_owner_name: null,
        amount: 5
      }
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
