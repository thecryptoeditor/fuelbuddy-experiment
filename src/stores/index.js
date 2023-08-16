import { createPinia } from '@pinia/store';

export const useStore = createPinia();

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user;
    }
  }
});