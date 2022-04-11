// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUVKKkNOjaLEO6vjGZelpa-4Mzx90vMo",
  authDomain: "emao-jhon-simple.firebaseapp.com",
  projectId: "emao-jhon-simple",
  storageBucket: "emao-jhon-simple.appspot.com",
  messagingSenderId: "1052712642457",
  appId: "1:1052712642457:web:39078a269ea2e3a5285508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
