
import firebase from 'firebase/app';

// import {ref,onUnmounted} from 'vue';


const config={
    // using my personal config to avoid initial complexity.
    // we will maintain .env file for all those keys and security attributes.

    
    apiKey: "AIzaSyBYoOkIDO7k3GGBf57Rp7KtIYW312TuL04",
    authDomain: "dour-the-run.firebaseapp.com",
    projectId: "dour-the-run",
    storageBucket: "dour-the-run.appspot.com",
    messagingSenderId: "51694529932",
    appId: "1:51694529932:web:44e4e4d53bf8ed713bbaa9",
    measurementId: "G-2M3NZ4YCR4"
};

const firebaseApp = firebase.initializeApp(config);



