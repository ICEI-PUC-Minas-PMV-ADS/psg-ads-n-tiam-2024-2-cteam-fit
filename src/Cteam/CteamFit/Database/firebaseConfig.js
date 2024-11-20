import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAebTELx6ckfqc8zAJ5rij4oNAAEqlrNn4",
  authDomain: "localhost",
  projectId: "1:589769926560:android:d9e36607d9691b2cf726c5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
