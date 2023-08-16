<template>
	<div id="app">
	  	<div class="app-content">
			<!-- <transition :name="transitionName"> -->
		  		<RouterView />
			<!-- </transition> -->
	  	</div>
	</div>
</template>
  
<script setup>
  	import { computed, onBeforeRouteUpdate, onMounted } from 'vue';
  	import { RouterView } from 'vue-router';
  	import router from "./router";
  
  	// const DEFAULT_TRANSITION = "slide";
  	// const DEFAULT_TRANSITION_MODE = "slide-right";
  
  	// let transitionName = DEFAULT_TRANSITION;
  	// let transitionMode = DEFAULT_TRANSITION_MODE;
  	// let transitionEnterActiveClass = "";

	onMounted(() => {
		console.log(router)
	 })
  
  	// onBeforeRouteUpdate((to, from, next) => {
	// 	let newTransitionName =
	//   		to.meta.transitionName ||
	//   		from.meta.transitionName ||
	//   		DEFAULT_TRANSITION;

	// 	if (newTransitionName === "slide") {
	//   		const toDepth = to.path.split("/").length;
	//   		const fromDepth = from.path.split("/").length;
	//   		newTransitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
	// 	}

	// 	transitionMode = DEFAULT_TRANSITION_MODE;
	// 	transitionEnterActiveClass = `${newTransitionName}-enter-active`;
	// 	transitionName = newTransitionName;
	// 	next();
  	// });
  
  	// const authPages = computed(() => {
	// 	const activeRoute = router.currentRoute.value.path;
	// 	return activeRoute.includes("/login");
  	// });
</script>
  