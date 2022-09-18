<template lang="pug">
section-title(text="¿Qué hacemos?")
.flex.items-center.flex-col
  router-link(:to="{name:'territorios-liberados-saharauis'}" class="p-4")
    .max-w-sm.rounded.shadow-lg.p-4.bg-white
      thumbor.w-full(width="352" height="" src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/HC-Sahara.png")
  router-link(:to="{name:'mauritania'}" class="p-4")
    .max-w-sm.rounded.shadow-lg.p-4.bg-white
      thumbor.w-full(width="352" height="" src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/HC-Mauritania.png")
</template>
