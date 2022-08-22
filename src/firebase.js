// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu5F4rIkvn9M67E-hJQl8YmzsT8Cvyc_M",
  authDomain:"netflix-react-7c644.firebaseapp.com",
  projectId: "netflix-react-7c644",
  storageBucket: "netflix-react-7c644.appspot.com",
  messagingSenderId: "729968442502",
  appId: "1:729968442502:web:c9f588d8532cf0c149e507",
  measurementId: "G-KF37DRDES8"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: "G-KF37DRDES8"
};   

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

