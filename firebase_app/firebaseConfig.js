import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                // Replace with your API Key
  authDomain: "YOUR_AUTH_DOMAIN",        // Replace with your Auth Domain
  databaseURL: "YOUR_DATABASE_URL",      // Replace with your Database URL
  projectId: "YOUR_PROJECT_ID",          // Replace with your Project ID
  storageBucket: "YOUR_STORAGE_BUCKET",  // Replace with your Storage Bucket
  messagingSenderId: "YOUR_SENDER_ID",   // Replace with your Sender ID
  appId: "YOUR_APP_ID"                   // Replace with your App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
