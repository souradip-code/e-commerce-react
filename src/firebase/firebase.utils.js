import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBP2Bj0NfuOTx5lVxwoRECpEQTyTw_oy-0",
  authDomain: "react-ecommerce-2ae88.firebaseapp.com",
  projectId: "react-ecommerce-2ae88",
  storageBucket: "react-ecommerce-2ae88.appspot.com",
  messagingSenderId: "606529875746",
  appId: "1:606529875746:web:4618f747548bd60dcb3f7b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
