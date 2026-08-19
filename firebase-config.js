// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY", // 👈 अपनी API Key यहाँ डालें
  authDomain: "haryanagramin-7ee4a.firebaseapp.com",
  databaseURL: "https://haryanagramin-7ee4a-default-rtdb.firebaseio.com", // Realtime Database URL
  projectId: "haryanagramin-7ee4a",
  storageBucket: "haryanagramin-7ee4a.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase & Realtime Database
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
