import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAutEH-raPpG1AkMGOLt3eZIrlGIXFuwdQ",
    authDomain: "itss-5cb86.firebaseapp.com",
    projectId: "itss-5cb86",
    storageBucket: "itss-5cb86.appspot.com",
    messagingSenderId: "795701003107",
    appId: "1:795701003107:web:284903d9351a901a848956"
  };

firebase.initializeApp(firebaseConfig);