// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgPdRjDdVXkF4sglpsPXF7zAyYnlT6Z6o",
  authDomain: "todowithfirebase-e8e37.firebaseapp.com",
  projectId: "todowithfirebase-e8e37",
  storageBucket: "todowithfirebase-e8e37.appspot.com",
  messagingSenderId: "975504418895",
  appId: "1:975504418895:web:61ed10d71f6771b3df223a",
  measurementId: "G-TFTPH9BT4T"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

   const db=getFirestore(app);
   export default db;
// export default analytics;

// export default firebaseConfig;