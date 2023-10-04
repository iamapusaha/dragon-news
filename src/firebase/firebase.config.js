// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHsIVyXA_uql2WGlMSNHLXb43SLW-ChVA",
    authDomain: "dragon-news-4e97b.firebaseapp.com",
    projectId: "dragon-news-4e97b",
    storageBucket: "dragon-news-4e97b.appspot.com",
    messagingSenderId: "548147814593",
    appId: "1:548147814593:web:3912d27b1f084163d1f440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;