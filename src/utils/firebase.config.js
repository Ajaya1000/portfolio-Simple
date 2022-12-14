// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import FIREBASE_CONFIG from './constants/firebaseConfig';

// Initialize Firebase
const initializeFirebase = () => {
    const app = initializeApp(FIREBASE_CONFIG);
    const analytics = getAnalytics(app);
}

export default initializeFirebase;