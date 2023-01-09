// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuBFWVyIDhLqZrudfqcwbIjuQXoshypSc",
  authDomain: "subscription-reminder-6e611.firebaseapp.com",
  projectId: "subscription-reminder-6e611",
  storageBucket: "subscription-reminder-6e611.appspot.com",
  messagingSenderId: "366825896785",
  appId: "1:366825896785:web:b4888dd4250cbb7c6db170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };