// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvD2NVg2HH7LWeBVhxeJsx5o2pnuOxa_U",
  authDomain: "shop-373516.firebaseapp.com",
  projectId: "shop-373516",
  storageBucket: "shop-373516.appspot.com",
  messagingSenderId: "923965348721",
  appId: "1:923965348721:web:e2ac45382b0e46cd4fb4d0",
  measurementId: "G-2XX6HKH0T5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
