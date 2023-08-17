import { defineStore } from 'pinia'

export const useUserStore = defineStore('pinia', {
    
    state: () => ({
        userDetails: {
            isUserLogin: false // Default value is false till user is not logged in
        },
    }),

    persist: true,

    actions: {

        setUser(user) {
            this.userDetails = user;
        },

        // A anction will be triggered when the user is logged out
        // This maked store empty as well as store
        logout() {
            this.setUser({isUserLogin: false});
            localStorage.removeItem('pinia');
            location.reload();
        },

        // Pushing the payload to userDetails 
        login(payload) {
            this.setUser(payload);
            location.reload();
        },

    }

});