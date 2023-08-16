<template>
    <div>
        <p>User ID: {{ user.uid }}</p>
        <p>Name: {{ user.displayName }}</p>

        <button @click="logout">Logout</button>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    name: 'Dashboard',
    title: 'FuelBuddy - Dashboard',

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
  