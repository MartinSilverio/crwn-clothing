import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC8R9p3WApjHeY5Mwx2k062d9gUezxiHWE',
  authDomain: 'crwn-db-2976e.firebaseapp.com',
  databaseURL: 'https://crwn-db-2976e.firebaseio.com',
  projectId: 'crwn-db-2976e',
  storageBucket: 'crwn-db-2976e.appspot.com',
  messagingSenderId: '314950232492',
  appId: '1:314950232492:web:f193f5a4e0ce177f0bf209',
  measurementId: 'G-3ECJQB6WVT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const proivder = new firebase.auth.GoogleAuthProvider();
proivder.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(proivder);

export default firebase;
