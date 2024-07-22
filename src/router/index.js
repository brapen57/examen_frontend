import { createRouter, createWebHistory } from 'vue-router';
import Calculo from '../components/Calculo.vue';
import Registro from '../components/Registro.vue';

const routes = [
  { path: '/', component: Calculo },
  { path: '/registro', component: Registro },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;