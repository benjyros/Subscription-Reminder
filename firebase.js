// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigJu = {
  apiKey: "AIzaSyCuBFWVyIDhLqZrudfqcwbIjuQXoshypSc",
  authDomain: "subscription-reminder-6e611.firebaseapp.com",
  projectId: "subscription-reminder-6e611",
  storageBucket: "subscription-reminder-6e611.appspot.com",
  messagingSenderId: "366825896785",
  appId: "1:366825896785:web:b4888dd4250cbb7c6db170"
};

const firebaseConfigBenjy = {
  apiKey: "AIzaSyClKmSuoXGXkR3rl_c6DVUlpaGompvL2-M",
  authDomain: "subscription-reminder-35f35.firebaseapp.com",
  projectId: "subscription-reminder-35f35",
  storageBucket: "subscription-reminder-35f35.appspot.com",
  messagingSenderId: "842709470753",
  appId: "1:842709470753:web:d825eaceb1afbdb07a5d60",
  measurementId: "G-1YJ27FEF2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigJu);

const firestore = getFirestore(app);

export { firestore };