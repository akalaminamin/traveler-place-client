import initalizeAuthentication from "../firebase/firebase.init";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";

initalizeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // google sign in
  const signInWithgoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logOut = () => {
    return signOut(auth).then(() => {
      setCurrentUser({});
    });
  };

  return {
    signup,
    login,
    currentUser,
    loading,
    setCurrentUser,
    setLoading,
    signInWithgoogle,
    logOut,
  };
};

export default useFirebase;
