// lib/firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase App Initialized:', app);

// Export services
const auth = getAuth();
setPersistence(auth, browserLocalPersistence)  // Ensures the session stays even after page refresh
  .catch((error) => {
    console.error('Persistence error:', error);
  });

export const db = getFirestore(app);
console.log('Firebase Auth and Firestore Initialized:', auth, db);

// Export Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
console.log('Google Auth Provider Initialized:', googleProvider);

export { auth };
