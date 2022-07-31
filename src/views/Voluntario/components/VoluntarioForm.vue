<template lang="pug">
form.p-10.w-full.bg-gray-400.rounded(@submit="onSubmit")
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
      date-input(
        label="Fecha de nacimiento"
        name="birthdate"
        v-model:message="form_data.birthdate"
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
      toggle-input(
        label="Ya soy socio de HumanCoop"
        name="already_a_member"
        v-model:value="form_data.already_a_member"
        :disabled="waiting"
        required
      )
    form-field(small)
      toggle-input(
        label="Soy sanitario"
        name="health_worker"
        v-model:value="form_data.health_worker"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      text-input(
        label="Formación"
        name="professional_experience"
        v-model:message="form_data.professional_experience"
        :disabled="waiting"
        required
      )
    form-field(small)
      number-input(
        label="Años de experiencia"
        name="years_of_experience"
        v-model:value="form_data.years_of_experience"
        :disabled="waiting"
        required
      )
  form-row
    form-field(small)
      toggle-input(
        label="Tengo experiencia en voluntariado"
        name="have_experience"
        v-model:value="form_data.have_experience"
        :disabled="waiting"
        required
      )
    form-field(small)
      toggle-input(
        label="Es mi primera vez en Humancoop"
        name="first_time"
        v-model:value="form_data.first_time"
        :disabled="waiting"
        required
      )
  form-row
    form-field
      text-input(
        label="¿Dónde nos conociste?"
        name="where_did_you_know"
        v-model:message="form_data.where_did_you_know"
        :disabled="waiting"
        required
      )
  div(class="md:flex md:items-center")
    submit-button(text="Enviar" :waiting="waiting")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VoluntarioForm',
  data() {
    return {
      form_data: {
        full_name: null,
        birthdate: null,
        email: null,
        phone_number: null,
        already_a_member: false,
        health_worker: false,
        professional_experience: null,
        years_of_experience: null,
        have_experience: false,
        first_time: false,
        where_did_you_know: null,
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
