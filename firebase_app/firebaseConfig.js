import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqtB-0bKHueXApd3YzK6Ach7dh85muJTo",
  authDomain: "esp-firebase-720bc.firebaseapp.com",
  databaseURL: "https://esp-firebase-720bc-default-rtdb.firebaseio.com",
  projectId: "esp-firebase-720bc",
  storageBucket: "esp-firebase-720bc.firebasestorage.app",
  messagingSenderId: "746855134498",
  appId: "1:746855134498:web:977bc4e744d32f42b6617b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };