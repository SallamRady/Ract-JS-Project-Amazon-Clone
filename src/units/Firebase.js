import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADVq6z5KT41L85-CjNJ-l7r_FVC8J7E5I",
    authDomain: "fir-b4a3f.firebaseapp.com",
    projectId: "fir-b4a3f",
    storageBucket: "fir-b4a3f.appspot.com",
    messagingSenderId: "1085304062453",
    appId: "1:1085304062453:web:48b4fb0ff7865fba9da0bc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore()