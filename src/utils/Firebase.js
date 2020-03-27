import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNIkYZNg9Nmc63CIWFRG0PAc8wSoEaLQE",
  authDomain: "shoppers-db-f9c98.firebaseapp.com",
  databaseURL: "https://shoppers-db-f9c98.firebaseio.com",
  projectId: "shoppers-db-f9c98",
  storageBucket: "shoppers-db-f9c98.appspot.com",
  messagingSenderId: "512985340188",
  appId: "1:512985340188:web:9a4e44a2cb1c05e56c42d9",
  measurementId: "G-X6YPZ7J9VY"
};

export const currentUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
