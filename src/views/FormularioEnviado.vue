<template lang="pug">
section-title(text="Formulario enviado!")
.text-justify.py-4
  | Muchas gracias! En breve nos pondremos en
  | contacto contigo.
router-link(:to="{name:'inicio'}")
  button(class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 mx-2 px-4 rounded")
    | Aceptar
</template>
