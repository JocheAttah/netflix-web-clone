import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
// We need to somehow seed the database

// config

const config = {
  apiKey: "AIzaSyBxF35fJonxNTBXwk9PdDnWnBj5vOVbzwM",
  authDomain: "netflix-redo-e23e0.firebaseapp.com",
  projectId: "netflix-redo-e23e0",
  storageBucket: "netflix-redo-e23e0.appspot.com",
  messagingSenderId: "951869866727",
  appId: "1:951869866727:web:9641464e9521d972e8d842",
};

const firebase = Firebase.initializeApp(config); 


export { firebase };
