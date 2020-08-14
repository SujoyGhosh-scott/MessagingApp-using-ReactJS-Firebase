import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJFSKHcv2Kw0HHZxW68mK2K46cFVRMTBU",
  authDomain: "messenger-clone-7492a.firebaseapp.com",
  databaseURL: "https://messenger-clone-7492a.firebaseio.com",
  projectId: "messenger-clone-7492a",
  storageBucket: "messenger-clone-7492a.appspot.com",
  messagingSenderId: "1089953129685",
  appId: "1:1089953129685:web:7d9febc1129485ccba6e5c",
  measurementId: "G-YH15QBN7SD",
});

const db = firebaseApp.firestore();

export default db;
