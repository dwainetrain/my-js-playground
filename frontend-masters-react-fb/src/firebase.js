// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.16.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

import firebase from 'firebase/app';
import 'firebase/firestore';

// This was the Firestore SDK config information provided in the google docs,
// Not sure if it's necassary or not just yet...
// const admin = require('firebase-admin');

// const serviceAccount = require('./key-ignore/frontend-masters-react-fb/key-ignore/frontend-masters-fb-react-dca4331795a2.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// THis I got from clicking the little gear next to the project name in console 
// and choosing project settings...
const config = {
    apiKey: "AIzaSyCKsA6uDfUn3umC3T716f7ea6hh3eJrLOk",
    authDomain: "frontendmasters-think-piece.firebaseapp.com",
    databaseURL: "https://frontendmasters-think-piece.firebaseio.com",
    projectId: "frontendmasters-think-piece",
    storageBucket: "frontendmasters-think-piece.appspot.com",
    messagingSenderId: "631004087833",
    appId: "1:631004087833:web:18635f4cf460fa73c30c88"
  };

  firebase.initializeApp(config);

  // This attaches firebase to the window object for easier debugging
  // Not sure what that means, but it's useful for the course
  // basically, it's already attached to window, but here we're just giving it
  // the name firebase for easier typing
  window.firebase = firebase;

  // export firestore as a function to call in other files
  export const firestore = firebase.firestore();

  export default firebase;