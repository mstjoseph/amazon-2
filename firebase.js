import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC95jyLaqaWkJQ11HT4garAloEwVTzLBao",
    authDomain: "amzn-2-de4ff.firebaseapp.com",
    projectId: "amzn-2-de4ff",
    storageBucket: "amzn-2-de4ff.appspot.com",
    messagingSenderId: "525455059007",
    appId: "1:525455059007:web:acb5ca6e1d1d123a75f08a",
    measurementId: "G-CL7MYPENJQ"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;