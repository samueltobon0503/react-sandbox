import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdY2L4F5PflZGy8SYXngJpwltWEfebl90",
  authDomain: "events-app-f102b.firebaseapp.com",
  projectId: "events-app-f102b",
  storageBucket: "events-app-f102b.firebasestorage.app",
  messagingSenderId: "801108372691",
  appId: "1:801108372691:web:b55074f93a04215fc43826"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);