// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuqutG8z7ZsKkI40BMWRKZgoqoAzW3Vww",
    authDomain: "react-redux-crud-ebc71.firebaseapp.com",
    projectId: "react-redux-crud-ebc71",
    storageBucket: "react-redux-crud-ebc71.appspot.com",
    messagingSenderId: "699403260563",
    appId: "1:699403260563:web:88258fc72fafe903c57366",
    measurementId: "G-F4T1V2R9YW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth object to use it in other parts of your app
export const auth = getAuth(app);
