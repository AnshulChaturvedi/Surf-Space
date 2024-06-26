// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmzQ-Dquh3ys5mmq2xDyXRDoUH5LfWud4",
    authDomain: "sufsapce.firebaseapp.com",
    projectId: "sufsapce",
    storageBucket: "sufsapce.appspot.com",
    messagingSenderId: "91710157961",
    appId: "1:91710157961:web:44585e4f6951d793e18258"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();