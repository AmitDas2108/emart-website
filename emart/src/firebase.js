import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9m5RSg-jCl-lQ5diEhWI_d-Wt4RW9GaI",
  authDomain: "emart-208ed.firebaseapp.com",
  projectId: "emart-208ed",
  storageBucket: "emart-208ed.appspot.com",
  messagingSenderId: "558184184751",
  appId: "1:558184184751:web:02f572549eff0e4bf44d5a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
