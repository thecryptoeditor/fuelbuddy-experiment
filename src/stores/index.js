// import { createPinia } from 'pinia';

// export const useStore = createPinia();

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    name: 'Test User'
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
  }
});