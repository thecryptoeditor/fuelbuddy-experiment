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