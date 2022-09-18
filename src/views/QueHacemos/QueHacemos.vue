<template lang="pug">
section-title(text="¿Qué hacemos?")
.flex.mb-4
.p-4
  router-link(:to="{name:'territorios-liberados-saharauis'}")
    .max-w-sm.rounded.shadow-lg.p-4.bg-white
      thumbor.w-full(width="352" height="" src="https://videos-humancoop.s3.eu-west-1.amazonaws.com/HC-Sahara.png")
</template>
