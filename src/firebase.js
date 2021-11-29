// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYd4KabytQYZSBgfTO0iFg2lUr0Eo_IrM",
    authDomain: "frontdeskappmrk1.firebaseapp.com",
    databaseURL: "https://frontdeskappmrk1-default-rtdb.firebaseio.com",
    projectId: "frontdeskappmrk1",
    storageBucket: "frontdeskappmrk1.appspot.com",
    messagingSenderId: "912832166936",
    appId: "1:912832166936:web:2c1f662a05a03ac037176d",
    measurementId: "G-P41MT4RHBK"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);
export default database