// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL8As0xt3-8DzRlo-OUNdAvALygxuz1r4",
    authDomain: "ai-tarot-efe92.firebaseapp.com",
    projectId: "ai-tarot-efe92",
    storageBucket: "ai-tarot-efe92.appspot.com",
    messagingSenderId: "520027950084",
    appId: "1:520027950084:web:be2800bbe491e1b35b7951",
    measurementId: "G-DFFSDC5P12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };