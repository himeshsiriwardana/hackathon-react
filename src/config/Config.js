import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB1SbckQfJKUW1hgfgFDiyIf91bF5XtVJM",
  authDomain: "react-hackathon-project.firebaseapp.com",
  projectId: "react-hackathon-project",
  storageBucket: "react-hackathon-project.appspot.com",
  messagingSenderId: "904016998539",
  appId: "1:904016998539:web:8a8679dae716a2d7c8a48e",
  measurementId: "G-HMY4SL2CYK"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db, storage } 
