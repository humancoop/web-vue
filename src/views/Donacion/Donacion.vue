<template lang="pug">
section-title(text="Haz una donación")
form.p-10.w-full.bg-gray-400.rounded
  form-row
    form-field
      text-input(label="Nombre y apellidos" name="full_name")
  form-row
    form-field(small)
      date-input(label="Fecha de nacimiento" name="birthdate")
    form-field(small)
      text-input(label="NIF" name="nif")
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
      tel-input(label="Otro número de contacto" name="secondary_phone_number")
  form-row
    form-field(small)
      text-input(label="Número de cuenta (IBAN)" name="account_number")
    form-field(small)
      text-input(label="Nombre del titular" name="account_owner_name")
  form-row
    form-field(small)
      number-input(label="Aportación (€)" name="amount")
  div(class="md:flex md:items-center")
    submit-button(text="Enviar")
</template>
