import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1hdvcwIVxOIFt1XQxUSrzCVtrU0AoLRk",
  authDomain: "chat-24a75.firebaseapp.com",
  projectId: "chat-24a75",
  storageBucket: "chat-24a75.appspot.com",
  messagingSenderId: "601351790478",
  appId: "1:601351790478:web:8a8f5e736bc50138f84edf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);

