import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "@/views/auth/LogIn.vue";

import { useUserStore } from '../stores';

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
            meta: { requiresAuth: false }
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

        // If isUserLogin false in the store then redirect to the login page `/login` page 
        if (!store.userDetails.isUserLogin) {
            next('/login');
        } 
        // else if (store.userDetails.isUserLogin) {
        //     next('/dashboard');
        // }
        else {
            next(); // Allow access
        }

    } 
    else {
        next();
    }

});

export default router;
