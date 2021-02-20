import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhwxN_I5p0o8XJrHoAZpfFkMLVuAepg5A",
  authDomain: "e-commerce-george.firebaseapp.com",
  projectId: "e-commerce-george",
  storageBucket: "e-commerce-george.appspot.com",
  messagingSenderId: "641755921486",
  appId: "1:641755921486:web:10c605d91e5db63a9e971f",
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
