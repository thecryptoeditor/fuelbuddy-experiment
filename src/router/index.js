import Vue from "vue";
import VueRouter from "vue-router";

import LogIn from "../views/auth/LogIn.vue"

Vue.use(VueRouter);

const unAuthenticatedRoutes = [
	"LogIn",
];

const router = new VueRouter({
	mode: "history",
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
	],
	scrollBehavior(to, from, savedPosition) {
		var appWrapper = document.getElementById('app-content');
		appWrapper.scrollTop = 0;
	}
});

router.beforeEach((to, from, next) => {
  console.log(store)
	// if (! (unAuthenticatedRoutes.indexOf(to.name) > -1) && !store.getters.user.username ) {
	    next({ name: 'LogIn' })
	// }
	// else if((unAuthenticatedRoutes.indexOf(to.name) > -1) && store.getters.user.username) {
	// 	next({ name: 'Dashboard' })
	// }
	// else {
		// next()
	// }
})

export default router;
