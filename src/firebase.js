import firebase from "firebase";
const firebaseApp=firebase.initializeApp( {
    apiKey: "AIzaSyDDj1TaXnqlIrJlcQOO-R_Q_D_pXuaXqfY",
    authDomain: "messenger-clone-505bc.firebaseapp.com",
    projectId: "messenger-clone-505bc",
    storageBucket: "messenger-clone-505bc.appspot.com",
    messagingSenderId: "42891587016",
    appId: "1:42891587016:web:bd1675c0676092bbe624fd",
    measurementId: "G-C17X8QCNNQ"
  });

  const db=firebaseApp.firestore();
  export default db;