import { createPinia } from 'pinia';

export const useStore = createPinia();

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