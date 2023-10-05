import { createContext, useContext } from "react";
import { auth } from "../firebase/Firebase.conf";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log("errorrrrrrrr");
  }

  return context;
};

export function AuthProvider({ children }) {
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log(response);
  };
  const login = async (email, password) => {

    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  }

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return signInWithPopup (auth, responseGoogle)
  };

  const logout = async ()  => {

    const response = await signOut(auth);
    console.log(response)
}
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
