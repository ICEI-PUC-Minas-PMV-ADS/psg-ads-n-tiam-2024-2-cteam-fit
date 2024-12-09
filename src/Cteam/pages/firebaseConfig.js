import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAebTELx6ckfqc8zAJ5rij4oNAAEqlrNn4",
  authDomain: "cteam-fit.firebaseapp.com",
  databaseURL: "https://cteam-fit-default-rtdb.firebaseio.com",
  projectId: "cteam-fit",
  storageBucket: "cteam-fit.firebasestorage.app",
  messagingSenderId: "589769926560",
  appId: "1:589769926560:web:90940693518f4678f726c5",
  measurementId: "G-79SGHFNB88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); 

export { auth, db };