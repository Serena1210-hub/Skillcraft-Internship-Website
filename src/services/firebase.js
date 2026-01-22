import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAzCdyYCS3qvjs0HNKn-g9ubVqOtOpXRG8",
  authDomain: "intern-portal-554e5.firebaseapp.com",
  projectId: "intern-portal-554e5",
  storageBucket: "=intern-portal-554e5.firebasestorage.com",
  messagingSenderId: "433036680908",
  appId: "1:433036680908:web:90463785d65d0a6b396c69"
}

const app = initializeApp(firebaseConfig); export const auth = getAuth(app);