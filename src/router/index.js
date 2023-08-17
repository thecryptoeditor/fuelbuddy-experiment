import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "@/views/auth/LogIn.vue";

import { useUserStore } from '../stores';

const unAuthenticatedRoutes = [
    "LogIn"
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "LogIn",
            component: LogIn,
        },
        {
            path: "/login",
            name: "LogIn",
            component: () => import('@/views/auth/LogIn.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import('@/views/visuals/Dashboard.vue'),
            meta: { requiresAuth: true }
        }
    ]
})


router.beforeEach((to, from, next) => {
    
    const store = useUserStore();

    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (to.name == 'login' && (unAuthenticatedRoutes.indexOf(to.name) > -1) && store.isUserLogin == false) {  // Assuming you have an `isUserAuthenticated` function
            next('/login');  // Redirect to login page
        } 
        else if (to.name == 'dashboard' && !(unAuthenticatedRoutes.indexOf(to.name) > -1) && store.isUserLogin == true) {  // Assuming you have an `isUserAuthenticated` function
            next('/dashboard');  // Redirect to dashboard page
        } 
        else {
            next();  // Allow access
        }

    } 
    else {
        next();  // If the route doesn't require authentication, allow access
    }

});
  

export default router;
