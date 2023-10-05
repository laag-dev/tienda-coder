import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9rrf15QpdT4e_LylCYfG-dzM9-NY97-c",
  authDomain: "tienda-code-b1985.firebaseapp.com",
  projectId: "tienda-code-b1985",
  storageBucket: "tienda-code-b1985.appspot.com",
  messagingSenderId: "797696160917",
  appId: "1:797696160917:web:84aa5626ee09a6cdefd79c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);