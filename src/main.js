import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

// styles main file imported from styles folder
import "./assets/styles/index.scss";

// Firebase configuration configuration
// import firebase from 'firebase/app';
import 'firebase/database'

// import store from "./stores";

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

    (error) => {``

        const { status, data } = error.response;

        // If the response 401 and the logout true in the response
        if (status === 401 && data.logout === true) {
            createPinia.dispatch("logout");
        }

        return Promise.reject(error);
    }
);


// Firebsae intigration
// const config = {
//     apiKey: process.env.VUE_APP_apiKey,
//     authDomain: process.env.VUE_APP_authDomain,
//     databaseURL: process.env.VUE_APP_databaseURL,
//     projectId: process.env.VUE_APP_projectId,
//     storageBucket: process.env.VUE_APP_storageBucket,
//     messagingSenderId: process.env.VUE_APP_messagingSenderId
// };



axios.defaults.withCredentials = true;

// API base URL for Application
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// Header setup will goes here with the updated token in the header
axios.defaults.headers = headers;

const app = createApp(App)

app.config.globalProperties.axios = axios;

app.use(createPinia())
app.use(router)
// app.use(store)

app.mount('#app')
