import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAlXK7ihUttI_QvAkxKrssnWx0kACRetFk",
    authDomain: "koemchhuy-project-management.firebaseapp.com",
    projectId: "koemchhuy-project-management",
    storageBucket: "koemchhuy-project-management.appspot.com",
    messagingSenderId: "529109410498",
    appId: "1:529109410498:web:442d29a5c52d99d97fd15b",
    measurementId: "G-40J5C1K097"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 