import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyA9mtQZSYh46b3qG1eCCAXcyBKVEWoJzy4",
    authDomain: "snarkify-firebase-id.firebaseapp.com",
    databaseURL: "https://snarkify-firebase-id.firebaseio.com",
    projectId: "snarkify-firebase-id",
    storageBucket: "snarkify-firebase-id.appspot.com",
    messagingSenderId: "79620220126",
    appId: "1:79620220126:web:5a282f3025a88d37d00e4f"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;