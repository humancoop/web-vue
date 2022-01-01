//Route::post('/socio', 'NewMemberController@newMemberFormPost');
//Route::post('/voluntario', 'NewVolunteerController@newVolunteerFormPost');
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: "/",
          name: "inicio",
          component: () => import("./views/Inicio.vue"),
      },
      {
          path: "/donacion",
          name: "donacion",
          component: () => import("./views/Donacion/Donacion.vue"),
      },
      {
          path: "/que-puedes-hacer-tu",
          name: "que-puedes-hacer-tu",
          component: () => import("./views/QuePuedesHacerTu/QuePuedesHacerTu.vue"),
      },
      {
          path: '/que-hacemos',
          name: 'que-hacemos',
          component: () => import("./views/QueHacemos/QueHacemos.vue"),
      },
      {
          path: '/quienes-somos',
          name: 'quienes-somos',
          component: () => import("./views/QuienesSomos/QuienesSomos.vue"),
      },
      {
          path: '/socio',
          name: 'socio',
          component: () => import("./views/Socio/Socio.vue"),
      },
      {
          path: '/voluntario',
          name: 'voluntario',
          component: () => import("./views/Voluntario/Voluntario.vue"),
      },
      {
          path: '/territorios-liberados-saharauis',
          name: 'territorios-liberados-saharauis',
          component: () => import("./views/TerritoriosLiberadosSaharauis/TerritoriosLiberadosSaharauis.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/oftalmologia',
          name: 'oftalmologia',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Oftalmologia.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/odontologia',
          name: 'odontologia',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Odontologia.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/enfermeria',
          name: 'enfermeria',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Enfermeria.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/laboratorio',
          name: 'laboratorio',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Laboratorio.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/medicina-general',
          name: 'medicina-general',
          component: () => import("./views/TerritoriosLiberadosSaharauis/MedicinaGeneral.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/ginecologia',
          name: 'ginecologia',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Ginecologia.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/farmacia',
          name: 'farmacia',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Farmacia.vue"),
      },
      {
          path: '/territorios-liberados-saharauis/pediatria',
          name: 'pediatria',
          component: () => import("./views/TerritoriosLiberadosSaharauis/Pediatria.vue"),
      },
      {
          path: '/quienes-somos/memorias',
          name: 'memorias',
          component: () => import("./views/QuienesSomos/Memorias.vue"),
      },
      {
          path: '/quienes-somos/estatutos',
          name: 'estatutos',
          component: () => import("./views/QuienesSomos/Estatutos.vue"),
      },
      {
          path: '/formulario-enviado',
          name: 'formulario-enviado',
          component: () => import("./views/FormularioEnviado.vue"),
      },
      {
          path: '/privacidad',
          name: 'privacidad',
          component: () => import("./views/Privacidad/Privacidad.vue"),
      },
      {
          path: '/condiciones',
          name: 'condiciones',
          component: () => import("./views/Condiciones/Condiciones.vue"),
      },
  ],
});

export default router;
