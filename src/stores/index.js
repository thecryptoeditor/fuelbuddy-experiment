import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    
    state: () => ({
        user: null,
        name: 'Test User',
        isUserLogin: true // Default value is false till user is not logged in
    }),

    actions: {
        setUser(user) {
            this.user = user;
        },
    }
});