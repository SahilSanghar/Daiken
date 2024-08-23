// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt8atav7TuyRpVcQxi99ReAx3v2waTsOI",
    authDomain: "goldex-45ef8.firebaseapp.com",
    projectId: "goldex-45ef8",
    storageBucket: "goldex-45ef8.appspot.com",
    messagingSenderId: "83471845048",
    appId: "1:83471845048:web:11a987d5a25f18e941d64d",
    measurementId: "G-G88BGMTEEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);