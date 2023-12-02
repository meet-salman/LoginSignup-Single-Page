import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDMwYapnNQaKoqfXNGx8wb1SqyEn2ZQCVg",
    authDomain: "my-socialapp-1.firebaseapp.com",
    projectId: "my-socialapp-1",
    storageBucket: "my-socialapp-1.appspot.com",
    messagingSenderId: "538715878691",
    appId: "1:538715878691:web:3175575828ce33fac80896",
    measurementId: "G-QEF02VL1XR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



