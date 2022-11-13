<template lang="pug">
section-title(text="Voluntarios")
cover-image(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/portada_memorias.jpg")
.flex.mt-8
  video(controls poster="https://videos-humancoop.s3-eu-west-1.amazonaws.com/javier.png")
    source(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/javier.mp4" type="video/mp4")
    | Sorry, your browser doesn't support embedded videos.
.flex.mt-8
  a.mx-auto.px-2(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/caroline.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_caroline.png"
      width="200"
      height=""
    )
  a.mx-auto.px-2(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/elena.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_elena.png"
      width="200"
      height=""
    )
  a.mx-auto.px-2(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/lucas.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_lucas.png"
      width="200"
      height=""
    )
  a.mx-auto.px-2(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/mariluz.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_mariluz.png"
      width="200"
      height=""
    )
  a.mx-auto.px-2(href="https://videos-humancoop.s3-eu-west-1.amazonaws.com/noelia.pdf")
    thumbor(
      src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/preview_noelia.png"
      width="200"
      height=""
    )
</template>
