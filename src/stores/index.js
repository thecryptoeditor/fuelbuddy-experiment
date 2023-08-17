import { defineStore } from 'pinia'

export const useUserStore = defineStore('pinia', {
    
    state: () => ({
        userDetails: {},
        isUserLogin: false // Default value is false till user is not logged in
    }),

    persist: true,

    actions: {

        setUser(user) {
            this.userDetails = user;
        },

        setLoginAuth(value) {
            this.isUserLogin = value;
        },

        logout({ commit }) {
            commit("setUser", {});
            localStorage.removeItem("pinia");
            location.reload();
        },

        login({ commit }, payload) {
            commit("setUser", payload);
            location.reload();
        },

    }

});