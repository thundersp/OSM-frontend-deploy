// lib/firebaseAuth.js
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { toast } from 'react-toastify'; // Import toast

// Set up Google Sign-In
const provider = new GoogleAuthProvider();
const auth = getAuth(); // Initialize auth

// Function to handle sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Signed in user:', result.user); // Log user info to verify success
    toast.success('Signed in successfully!'); // Display success toast
    return result.user;
  } catch (error) {
    console.error('Sign-in error:', error);
    toast.error('Sign-in failed! Please try again.'); // Display error toast
    throw error;
  }
};

// Function to handle sign-out
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
    toast.info('Signed out successfully!'); // Display info toast
  } catch (error) {
    console.error('Error during sign-out', error);
    toast.error('Sign-out failed! Please try again.'); // Display error toast
    throw error;
  }
};
