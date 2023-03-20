// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzi_mQOZrPa6pfF5uXsKiRH8KTGNQiHBU",
  authDomain: "cs-125-database.firebaseapp.com",
  projectId: "cs-125-database",
  storageBucket: "cs-125-database.appspot.com",
  messagingSenderId: "849664240092",
  appId: "1:849664240092:web:c7a3494042ebfc4b820719",
  measurementId: "G-V5FQ51JSTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
export const db = getDatabase(app);