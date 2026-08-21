import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyDQ-oid7lgzC9CcoEQ4E4Cqlc9IXiU5mTYw",

    authDomain:
        "dst-rawana-lanka-6c9a6.firebaseapp.com",

    projectId:
        "dst-rawana-lanka-6c9a6",

    storageBucket:
        "dst-rawana-lanka-6c9a6.firebasestorage.app",

    messagingSenderId:
        "330485253308",

    appId:
        "1:330485253308:web:c772152686d3a6f0dabcb9",

    measurementId:
        "G-M0E6C892T6"

};


const app =
    initializeApp(firebaseConfig);


const auth =
    getAuth(app);


export {
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
};