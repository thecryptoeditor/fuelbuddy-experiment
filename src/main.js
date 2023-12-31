import { createApp } from 'vue'
import axios from "axios";

// Pinia store configuration
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// styles main file imported from styles folder
import "./assets/styles/index.scss";

import App from './App.vue'
import router from './router'


let headers = {
    // Taking token from the store and returning to the API call
    // accessToken: store.getters.user.accessToken,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
};

axios.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {

        const { status, data } = error.response;

        // If the response 401 and the logout true in the response
        if (status === 401 && data.logout === true) {
            createPinia.dispatch("logout");
        }

        return Promise.reject(error);
    }
);


axios.defaults.withCredentials = true;

// API base URL for Application
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// Header setup will goes here with the updated token in the header
axios.defaults.headers = headers;

const app = createApp(App)

app.config.globalProperties.axios = axios;

app.use(pinia)
app.use(router)

app.mount('#app')
