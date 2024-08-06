// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv2oJ4iUcykymSZcU24OgxO5oLEltEcas",
  authDomain: "inventory-management-6b9ec.firebaseapp.com",
  projectId: "inventory-management-6b9ec",
  storageBucket: "inventory-management-6b9ec.appspot.com",
  messagingSenderId: "688483245023",
  appId: "1:688483245023:web:9f98816619ea0c138a426a",
  measurementId: "G-305DZY0BRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}