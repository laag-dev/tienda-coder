import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCC_KL1jGaMN4xZt0f_HPwSdHsKWnhQrQ",
  authDomain: "tienda-coder-e2923.firebaseapp.com",
  projectId: "tienda-coder-e2923",
  storageBucket: "tienda-coder-e2923.appspot.com",
  messagingSenderId: "880872218669",
  appId: "1:880872218669:web:ee4384e0e675411197d8a4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };
