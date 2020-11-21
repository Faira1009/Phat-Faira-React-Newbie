import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyALKwSHtgStm6oi2EErHmnHblrlQ_tfxUo",
    authDomain: "to-do-app-8f8a3.firebaseapp.com",
    databaseURL: "https://to-do-app-8f8a3.firebaseio.com",
    projectId: "to-do-app-8f8a3",
    storageBucket: "to-do-app-8f8a3.appspot.com",
    messagingSenderId: "276371040840",
    appId: "1:276371040840:web:2e0e73865a1c340d48867d"
  };

  firebase.initializeApp(firebaseConfig)
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();