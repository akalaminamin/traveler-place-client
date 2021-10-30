import initalizeAuthentication from "../firebase/firebase.init";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
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
  const signInWithgoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth).then(() => {
      setCurrentUser({});
    });
  };

  return {
    currentUser,
    loading,
    setCurrentUser,
    setLoading,
    signInWithgoogle,
    logOut,
  };
};

export default useFirebase;
