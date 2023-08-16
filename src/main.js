import { createApp } from 'vue'
import { createPinia } from 'pinia'

// styles main file imported from styles folder
import "./assets/styles/index.scss";

// Firebase configuration configuration
import firebase from 'firebase/app';
import 'firebase/database'

import App from './App.vue'
import router from './router'

// Firebsae intigration
// Here we import firebase config from .env file
// const config = {
//     apiKey: process.env.VUE_APP_apiKey,
//     authDomain: process.env.VUE_APP_authDomain,
//     databaseURL: process.env.VUE_APP_databaseURL,
//     projectId: process.env.VUE_APP_projectId,
//     storageBucket: process.env.VUE_APP_storageBucket,
//     messagingSenderId: process.env.VUE_APP_messagingSenderId
//   };
  
  // Initialize Firebase Database
//   const app = firebase.initializeApp(config);
//   let FBDB = app.database();
  
  export default FBDB;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
