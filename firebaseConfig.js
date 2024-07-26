import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBC7yNzGLytXH1VYZ9-AwQ8KhO5dJvvDUU",
  authDomain: "test-51172-default-rtdb.firebaseio.com",
  databaseURL: "https://test-51172-default-rtdb.firebaseio.com",
  projectId: "test-51172",
  storageBucket: "test-51172.appspot.com",
  messagingSenderId: "385712647518",
  appId: "1:385712647518:android:35067973619ec8036db3cf",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
