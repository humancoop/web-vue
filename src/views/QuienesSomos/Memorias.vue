<template lang="pug">
section-title(text="Memorias anuales")
.bg-gray-400
thumbor.object-cover.w-full(
  src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/portada_memorias.jpg"
  width="896"
  height=""
)
.flex.mt-8
  a.mx-auto(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/memoriaActividades2019.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_memoria_2019_2.png"
      width="200"
      height=""
    )
  a.mx-auto(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/memoriaActividades2018.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_memoria_2018.png"
      width="200"
      height=""
    )
  a.mx-auto(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/memoriaActividades2017.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_memoria_2017.png"
      width="200"
      height=""
    )
</template>
