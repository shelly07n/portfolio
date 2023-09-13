import VueRouter from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('./modules/home/home.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./modules/login/login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('access_token');
    if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
      // Redirect to login if the route requires authentication and there's no token
      next('/login');
    } else {
      next();
    }
  });
  

export default router;
