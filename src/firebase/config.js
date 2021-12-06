// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7twRDWNeu4vm8sHPOuPBDYjU-eAYcVno",
  authDomain: "proyecto-reactjs-a9ef7.firebaseapp.com",
  projectId: "proyecto-reactjs-a9ef7",
  storageBucket: "proyecto-reactjs-a9ef7.appspot.com",
  messagingSenderId: "426661744756",
  appId: "1:426661744756:web:a4e9ac8b897a49ce254121",
  measurementId: "G-JZGRP6NG34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);