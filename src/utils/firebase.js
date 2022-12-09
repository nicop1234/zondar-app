import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCdYi9a89vQgYT3e3dGfiMGlepA32shHXk",
  authDomain: "zondar-68c2e.firebaseapp.com",
  projectId: "zondar-68c2e",
  storageBucket: "zondar-68c2e.appspot.com",
  messagingSenderId: "687196675925",
  appId: "1:687196675925:web:a5b53ce2c4695cc2b219dc",
  measurementId: "G-V0MHVB5DYX"
};


export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase)