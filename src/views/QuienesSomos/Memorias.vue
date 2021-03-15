<template lang="pug">
section-title(text="Memorias anuales")
.bg-gray-400
thumbor.object-cover.w-full(
  src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/portada_memorias.jpg"
  width="896"
  height=""
)
.flex.mb-4
  div(class="w-5/6")
    p.text-justify.py-4
      a(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/memoriaActividades2019.pdf")
        thumbor(
          src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_memoria_2019.png"
          width="200"
          height=""
        )
</template>
