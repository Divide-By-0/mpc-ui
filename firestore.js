import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey: "<apiKey>",
  authDomain: "<authDomain>",
  databaseURL: "<databaseURL>",
  projectId: "<projectId>",
  storageBucket: "",
  messagingSenderId: "<messageingSenderId>"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;