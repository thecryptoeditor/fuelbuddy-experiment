import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '@/stores';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "LogIn",
        },
        {
            path: "/login",
            name: "LogIn",
            component: () => import('@/views/auth/LogIn.vue'),
            meta: { requiresAuth: false, title: 'Fuelbuddy - Login' }
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import('@/views/visuals/Dashboard.vue'),
            meta: { requiresAuth: true, title: 'Fuelbuddy - Dashboard' }
        }
    ]
})


router.beforeEach((to, from, next) => {

    const nearestWithTitle = to.matched.find(r => r.meta && r.meta.title);

    if(nearestWithTitle.meta.title) {
        document.title = nearestWithTitle.meta.title;
    } 


    const store = useUserStore();

    if (to.matched.some(record => record.meta.requiresAuth)) {

        // If isUserLogin false in the store then redirect to the login page `/login` page 
        if (!store.userDetails.isUserLogin) {
            next('/login');
        } 
        else {
            next(); // Allow access
        }

    } 
    else {
        next();
    }

});

export default router;
