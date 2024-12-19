// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQyYL9a_B_IcGn3vKSzzxeuXmTjt_ATKQ",
  authDomain: "next1-73bbe.firebaseapp.com",
  projectId: "next1-73bbe",
  storageBucket: "next1-73bbe.firebasestorage.app",
  messagingSenderId: "576341662017",
  appId: "1:576341662017:web:afcfa15bb6bfd3c580a9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)