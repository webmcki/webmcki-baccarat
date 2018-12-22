
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./components/Dashboard.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./components/Projects.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./components/Team.vue'),
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('./components/Navbar.vue'),
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import('./components/Popup.vue'),
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: () => import('./components/DataTable.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue'),
    },
    {
      path: '/teststate',
      name: 'teststate',
      component: () => import('./components/TestState.vue'),
    },
  ],
});
