import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import GamePage from '../views/GamePage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/game', name: 'Game', component: GamePage },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
