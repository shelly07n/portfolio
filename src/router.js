import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./modules/login/login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./modules/home/home.vue'),
    children: [
      // Define your other routes here
      {
        path: '/',
        name: 'dashboard',
        // component: () => import('./modules/dashboard/dashboard.vue'),
        component: () => import('./components/comingsoon.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('./modules/profile/profile.vue'),
      },
      {
        path: '/eventManagement',
        name: 'eventManagement',
        component: () => import('./modules/calendar/calendar.vue'),
        // meta: { requiresAuth: true }, // Protect this route
      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('./modules/staff/staff.vue'),
      },
      {
        path: '/leads',
        name: 'leads',
        component: () => import('./modules/leads/leads.vue'),
      },
      {
        path: '/comingsoon',
        name: 'comingsoon',
        component: () => import('./components/comingsoon.vue'),
      },
      // Other routes go here
    ],
    meta: { requiresAuth: true }, // Protect this route
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated by validating the access_token
    const accessToken = localStorage.getItem('access_token'); // Retrieve the access_token from local storage (you can use cookies or a different storage mechanism)

    if (!accessToken) {
      // If the access_token is not present, redirect to the login page
      next('/login');
    } else {
      // User is authenticated, proceed to the requested route
      next();
    }
  } else {
    // For routes that don't require authentication, proceed
    next();
  }
});


export default router;
