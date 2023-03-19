import React, { useContext, useEffect, useState } from 'react';
import {auth} from "../firebase"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

const AuthContext = React.createContext();

export const useAuth = ()=> {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsub;
    }, [])
    

    const value = {
        currentUser,
        loading,
        signUp,
        signIn,
        logOut
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}


