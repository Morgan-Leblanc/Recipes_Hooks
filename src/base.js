import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANyl3zfbn5yejsLjnctgJtHVHKjAyHBx4",
  authDomain: "recipe-d2d52.firebaseapp.com",
  databaseURL: "https://recipe-d2d52.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
