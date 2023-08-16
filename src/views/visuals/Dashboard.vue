<template>
    <div v-if="user">
      <p>User ID: {{ user.uid }}</p>
      <p>Name: {{ user.displayName }}</p>
      <!-- other user details... -->
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      Not logged in
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  export default {
    setup() {
      const user = ref(null);
  
      onMounted(() => {
        user.value = firebase.auth().currentUser;
      });
  
      const logout = async () => {
        await firebase.auth().signOut();
        user.value = null;
        // Redirect to login page...
      };
  
      return { user, logout };
    }
  }
  </script>
  