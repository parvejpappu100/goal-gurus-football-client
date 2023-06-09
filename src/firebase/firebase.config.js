// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqdHifNczDzvOSfTlODPatuLMMPlnI2g",
  authDomain: "goal-gurus-football.firebaseapp.com",
  projectId: "goal-gurus-football",
  storageBucket: "goal-gurus-football.appspot.com",
  messagingSenderId: "851944442487",
  appId: "1:851944442487:web:00ec2645ff5a470f119472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;