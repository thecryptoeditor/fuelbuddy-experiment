import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/auth/LogIn.vue";

const unAuthenticatedRoutes = [
    "LogIn",
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "LogIn",
            component: LogIn,
            meta: { transitionName: "slide" }
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () =>
            import("../views/visuals/Dashboard.vue"),
            meta: { 
                transitionName: "slide",
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
	console.log('store')
    if (!unAuthenticatedRoutes.includes(to.name)) {
		next({ name: 'LogIn' });
		} 
		// else if (unAuthenticatedRoutes.includes(to.name) && store.getters.user.username) {
			//     next({ name: 'Dashboard' });
			// } 
			else {
				    next();
				}
				console.log('store1')
});

export default router;
