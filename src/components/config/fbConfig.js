import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmWMsK7-mmhuJXNigET2oRzeUQ9sqtBdk",
    authDomain: "marioplanreactreduxfirebase.firebaseapp.com",
    databaseURL: "https://marioplanreactreduxfirebase.firebaseio.com",
    projectId: "marioplanreactreduxfirebase",
    storageBucket: "marioplanreactreduxfirebase.appspot.com",
    messagingSenderId: "782150951298"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase 