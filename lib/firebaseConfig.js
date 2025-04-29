// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE3rEpCdJhVoG6qauA40OKIWyV5OafBuU",
  authDomain: "watkhaothong.firebaseapp.com",
  projectId: "watkhaothong",
  storageBucket: "watkhaothong.firebasestorage.app",
  messagingSenderId: "371702743097",
  appId: "1:371702743097:web:dfd314bdfac72f4f2fcde8",
  measurementId: "G-Z52G0ZQ02K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { firebaseConfig };