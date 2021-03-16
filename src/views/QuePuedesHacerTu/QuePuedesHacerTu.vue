<template lang="pug">
section-title(text="¿Qué puedes hacer tú?")
.flex.mb-4
  div(class="w-1/3 p-4")
    router-link(:to="{name:'donacion'}")
      .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white
        thumbor.w-full(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/dona.jpg" width="266" height="")
        .px-6.py-4
          .font-bold.text-xl.mb-2 Haz una donación
  div(class="w-1/3 p-4")
    router-link(:to="{name:'socio'}")
      .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white
        thumbor.w-full(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/coche.jpg" width="266" height="")
        .px-6.py-4
          .font-bold.text-xl.mb-2 Hazte socio
  div(class="w-1/3 p-4")
    router-link(:to="{name:'voluntario'}")
      .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white
        thumbor.w-full(src="https://videos-humancoop.s3-eu-west-1.amazonaws.com/manos.jpg" width="266" height="")
        .px-6.py-4
          .font-bold.text-xl.mb-2 Hazte voluntario
</template>
