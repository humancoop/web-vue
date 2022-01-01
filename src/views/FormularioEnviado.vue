<template lang="pug">
section-title(text="Formulario enviado!")
.text-justify.py-4
  | Muchas gracias! En breve nos pondremos en
  | contacto contigo.
router-link(:to="{name:'inicio'}")
  styled-button(text="Aceptar")
</template>
