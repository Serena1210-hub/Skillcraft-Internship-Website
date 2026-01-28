import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAzCdyYCS3qvjs0HNKn-g9ubVqOtOpXRG8",
  authDomain: "intern-portal-554e5.firebaseapp.com",
  projectId: "intern-portal-554e5",
  storageBucket: "intern-portal-554e5.appspot.com",
  messagingSenderId: "433036680908",
  appId: "1:433036680908:web:90463785d65d0a6b396c69",
  measurementId: "G-60VH6CPBDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;