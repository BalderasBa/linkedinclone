import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyAVNLGRro0GvicEqt_NRyt8Hu4bCN6_W_o",
  authDomain: "linkedin--cln.firebaseapp.com",
  projectId: "linkedin--cln",
  storageBucket: "linkedin--cln.appspot.com",
  messagingSenderId: "335911570814",
  appId: "1:335911570814:web:770f0bda92bbf7a87f372f",
  measurementId: "G-RZKMR25BG8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
