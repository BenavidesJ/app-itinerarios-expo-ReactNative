import firebase from "firebase";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAowucwyIfUFFzLMYkQxh-QN-t66IZFY14",
    authDomain: "app-viajes-react-native.firebaseapp.com",
    projectId: "app-viajes-react-native",
    storageBucket: "app-viajes-react-native.appspot.com",
    messagingSenderId: "744779463777",
    appId: "1:744779463777:web:30e15e170cc3f23ce67e20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,   
  }