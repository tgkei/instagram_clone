import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3WufkRZ03nxU9o0cdAsaFcmnZilh4jt0",
  authDomain: "instagram-clone-react-c48d4.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-c48d4.firebaseio.com",
  projectId: "instagram-clone-react-c48d4",
  storageBucket: "instagram-clone-react-c48d4.appspot.com",
  messagingSenderId: "975577951451",
  appId: "1:975577951451:web:db86e379834164707cf0fe",
  measurementId: "G-8XE4YKD31P"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage}; 
