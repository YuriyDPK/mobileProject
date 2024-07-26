import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC7yNzGLytXH1VYZ9-AwQ8KhO5dJvvDUU",
  authDomain: "test-51172.firebaseapp.com",
  projectId: "test-51172",
  storageBucket: "test-51172.appspot.com",
  messagingSenderId: "385712647518",
  appId: "1:385712647518:web:f16c9bddeff74a4b6db3cf",
  measurementId: "G-V9TFFW9F70",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db };
