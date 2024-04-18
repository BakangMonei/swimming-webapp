// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add Auth
import { collection, getFirestore } from "firebase/firestore"; // Add Firestore
import { getDatabase } from "firebase/database"; // Add Realtime Database
import { getStorage } from "firebase/storage"; // Add Storage
import { query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWpivML7i-lDklLMEvQ1eGMwj2CVJOe_Y",
  authDomain: "swimming-webapp.firebaseapp.com",
  databaseURL: "https://swimming-webapp-default-rtdb.firebaseio.com",
  projectId: "swimming-webapp",
  storageBucket: "swimming-webapp.appspot.com",
  messagingSenderId: "684335922955",
  appId: "1:684335922955:web:f10f5c4251b6b82927ec0e",
  measurementId: "G-FHN1M148KJ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Initialize Firebase services
const auth = getAuth(firebaseApp); // Initialize Auth
const firestore = getFirestore(firebaseApp); // Initialize Firestore
const database = getDatabase(firebaseApp); // Initialize Realtime Database
const storage = getStorage(firebaseApp); // Initialize Storage

export { auth, firestore, database, storage, firebaseApp };