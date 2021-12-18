<template lang="pug">
section-title(text="Hazte voluntario")
form.p-10.w-full.bg-gray-400.rounded
  form-row
    form-field
      text-input(label="Nombre y apellidos" name="full_name")
  form-row
    form-field(small)
      date-input(label="Fecha de nacimiento" name="birthdate")
    form-field(small)
      text-input(label="Lugar de nacimiento" name="birthplace")
  form-row
    form-field
      text-input(label="Dirección" name="address")
  form-row
    form-field(small)
      text-input(label="Localidad" name="city")
    form-field(small)
      text-input(label="Provincia" name="province")
  form-row
    form-field(small)
      text-input(label="Código postal" name="postcode")
  form-row
    form-field(very-small)
      text-input(label="Email" name="email")
    form-field(very-small)
      tel-input(label="Teléfono móvil" name="phone_number")
    form-field(very-small)
      tel-input(label="Número de contacto familiar" name="relative_phone_number")
  form-row
    form-field(small)
      text-input(label="Estado civil" name="civil_status")
    form-field(small)
      number-input(label="Número de hijos" name="children")
  form-row
    form-field(small)
      text-input(label="Nombre del padre" name="father_name")
    form-field(small)
      text-input(label="Nombre de la madre" name="mother_name")
  form-row
    form-field(small)
      text-input(label="NIF" name="nif")
    form-field(small)
      text-input(label="Número de pasaporte" name="passport_number")
  form-row
    form-field(very-small)
      date-input(label="Fecha de expedición" name="issue_date")
    form-field(very-small)
      text-input(label="Lugar de expedición" name="issue_place")
    form-field(very-small)
      date-input(label="Fecha de validez" name="expiration_date")
  form-row
    form-field(small)
      toggle-input(label="Ya soy socio de HumanCoop" name="already_a_member")
    form-field(small)
      text-input(label="Número de cuenta voluntario" name="account_number")
  form-row
    form-field(small)
      text-input(label="Alergias" name="allergies")
    form-field(small)
      text-input(label="Intolerancias" name="intolerancies")
  form-row
    form-field(small)
      text-input(label="Enfermedades previas (Opcional)" name="previous_diseases")
    form-field(small)
      text-input(label="Medicación previa (Opcional)" name="previous_medication")
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
    form-field
      area-input(label="Motivaciones" name="motivations")
  form-row
    form-field(small)
      toggle-input(label="Tengo experiencia en voluntariado" name="have_experience")
    form-field(small)
      text-input(label="Actividad desarrollada" name="activity")
  form-row
    form-field
      toggle-input(label="Es mi primera vez en Humancoop" name="first_time")
  form-row
    form-field
      text-input(label="¿Dónde nos conociste?" name="where_did_you_know")
  div(class="md:flex md:items-center")
    submit-button(text="Enviar")
</template>
