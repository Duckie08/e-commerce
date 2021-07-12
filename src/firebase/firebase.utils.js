import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCFHIUtAnEmlK4Fjv5-P3yJXVZBedhkmBI",
    authDomain: "crwn-db08.firebaseapp.com",
    projectId: "crwn-db08",
    storageBucket: "crwn-db08.appspot.com",
    messagingSenderId: "951739907087",
    appId: "1:951739907087:web:47fe032d8465baa62c377a",
    measurementId: "G-2T8KNNRPN9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;
