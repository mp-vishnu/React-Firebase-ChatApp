import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhg1SVB2AuvIREWPEGcRtcxAVcCAWvUmI",
  authDomain: "react-chat-app-a5396.firebaseapp.com",
  projectId: "react-chat-app-a5396",
  storageBucket: "react-chat-app-a5396.appspot.com",
  messagingSenderId: "325473459028",
  appId: "1:325473459028:web:d6e1f486cd2431551c46c1"
};
initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, db };
