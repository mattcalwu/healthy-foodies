// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfx-i7p5Vvu7-HTpeQ6AtzwbOch5bZXQ",
  authDomain: "cs-125-project-5af82.firebaseapp.com",
  projectId: "cs-125-project-5af82",
  storageBucket: "cs-125-project-5af82.appspot.com",
  messagingSenderId: "836835704098",
  appId: "1:836835704098:web:6a28e4838f7b1ebd72b97b",
  measurementId: "G-RCF1CWS9MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app)
const provider = new GoogleAuthProvider();
export {firebaseAuth,provider};
