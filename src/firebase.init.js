// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_IXf_lBd-ZPtAI9OuymmC3tyBiclkQA",
  authDomain: "dotask-a9fb5.firebaseapp.com",
  projectId: "dotask-a9fb5",
  storageBucket: "dotask-a9fb5.appspot.com",
  messagingSenderId: "592450992249",
  appId: "1:592450992249:web:44f6983588d329e065bca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;