import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../services/firebaseAuth.js'

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
        async logout() {

            await signOut(auth);

            this.userDetails.user = null;

            this.userDetails.isUserLogin = false;
            localStorage.removeItem('pinia');
            location.reload();

        },

        // Authenticated by firebase and stored data in stored
        async login(email, password) {

            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)

                console.log('userCredential', userCredential);
                console.log(userCredential.user.email);

                this.userDetails['email'] = userCredential.user.email
                this.userDetails.isUserLogin = true
                location.reload();
            }
            catch (error) {

                switch(error.code) {

                    case 'auth/user-not-found':
                        alert("User not found")
                        break
                    case 'auth/wrong-password':
                        alert("Wrong password")
                        break
                    default:
                        alert("Something went wrong")
                }
        
                return;

            }

        },

    }

});
