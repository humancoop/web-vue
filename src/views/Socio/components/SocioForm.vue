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
      text-input(
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
    form-field(very-small)
      tel-input(
        label="Otro número de contacto"
        name="secondary_phone_number"
        v-model:message="form_data.secondary_phone_number"
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
    form-field
      span Aportación 30€ anuales
  form-row
    form-field
      text-input(
        label="¿Dónde nos conociste?"
        name="where_did_you_know"
        v-model:message="form_data.where_did_you_know"
      )
  div(class="md:flex md:items-center")
    submit-button(text="Enviar", type="submit")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SocioForm',
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
        where_did_you_know: null,
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
