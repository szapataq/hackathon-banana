import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRjGoQ50fUNFctCVt2CW6adacIPFJVEVY",
    authDomain: "banana-936b3.firebaseapp.com",
    databaseURL: "https://banana-936b3.firebaseio.com",
    projectId: "banana-936b3",
    storageBucket: "banana-936b3.appspot.com",
    messagingSenderId: "840226715851",
    appId: "1:840226715851:web:f3f589f2714d52acd7c34e",
    measurementId: "G-W9BRDEJGD9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase};