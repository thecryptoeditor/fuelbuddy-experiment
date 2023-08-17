import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdat93q2fClSNAXV70b_XC9bdp51VHCeg",
    authDomain: "fuel-buddy-experiment.firebaseapp.com",
    projectId: "fuel-buddy-experiment",
    storageBucket: "fuel-buddy-experiment.appspot.com",
    messagingSenderId: "646557801509",
    appId: "1:646557801509:web:3509fe8ef6ce4ee3b173cc",
    measurementId: "G-C1KH7TDCCQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
