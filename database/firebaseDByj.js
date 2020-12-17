import * as firebase from "firebase";
//import { firebase } from "@firebase/app";
import "firebase/firestore";
//import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwBt99qCqFBWmkFwU-XXFHimptsbiXsC4",
  authDomain: "todo-app-a4842.firebaseapp.com",
  projectId: "todo-app-a4842",
  storageBucket: "todo-app-a4842.appspot.com",
  messagingSenderId: "309317372267",
  appId: "1:309317372267:web:e0d766c619c1a71a8aa42e",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
