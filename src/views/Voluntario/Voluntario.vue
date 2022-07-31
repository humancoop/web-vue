<template lang="pug">
section-title(text="Hazte voluntario")
form.p-10.w-full.bg-gray-400.rounded
  form-row
    form-field
      text-input(label="Nombre y apellidos" name="full_name")
  form-row
    form-field(small)
      date-input(label="Fecha de nacimiento" name="birthdate")
  form-row
    form-field(very-small)
      text-input(label="Email" name="email")
    form-field(very-small)
      tel-input(label="Teléfono móvil" name="phone_number")
  form-row
    form-field(small)
      toggle-input(label="Ya soy socio de HumanCoop" name="already_a_member")
  form-row
    form-field
      toggle-input(label="Soy sanitario" name="health_worker")
  form-row
    form-field(small)
      text-input(label="Formación" name="formation")
    form-field(small)
      text-input(label="Especialidad (si procede)" name="speciality")
  form-row
    form-field(small)
      text-input(label="Experiencia profesional" name="professional_experience")
    form-field(small)
      number-input(label="Años de experiencia" name="years_of_experience")
  form-row
    form-field(small)
      toggle-input(label="Tengo experiencia en voluntariado" name="have_experience")
  form-row
    form-field
      toggle-input(label="Es mi primera vez en Humancoop" name="first_time")
  form-row
    form-field
      text-input(label="¿Dónde nos conociste?" name="where_did_you_know")
  div(class="md:flex md:items-center")
    submit-button(text="Enviar")
</template>
