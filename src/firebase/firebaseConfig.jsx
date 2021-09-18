import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN3wLsymTekNuzj_XR1XBCRi52bFMgqC8",
  authDomain: "northwind-app-8c1f3.firebaseapp.com",
  projectId: "northwind-app-8c1f3",
  storageBucket: "northwind-app-8c1f3.appspot.com",
  messagingSenderId: "186104850823",
  appId: "1:186104850823:web:a44d25a529a2f520824b22",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase };
