import React, { useContext, useEffect, useState } from 'react';
import {auth, db} from "../firebase"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { doc, getDoc, setDoc, query, where, collection} from 'firebase/firestore';
import {getUserData, getUserInvoices, setUserData} from "../utils/database"

const AuthContext = React.createContext();

export const useAuth = ()=> {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUserToken, setCurrentUserToken] = useState();
    const [currentUserData, setCurrentUserData] = useState();
    const [currentUserInvoices, setCurrentUserInvoices] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = async (form) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        await setUserData(auth.currentUser.uid, form);
    }

    const signIn = async (form) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, form.email, form.password);
    }

    const logOut = () => {
        signOut(auth);
        
    }

    useEffect(() =>  {
        const unsub = onAuthStateChanged(auth, async user => {
            setCurrentUserToken(user);
            if(user){
                await getUserData(user.uid).then((userData) => {
                    setCurrentUserData(userData);
                });
                await getUserInvoices(user.uid).then((userInvoices) => {
                    setCurrentUserInvoices(userInvoices);
                    setLoading(false);
                });
            }
        });

        return unsub;
    }, [])
    

    const value = {
        currentUserToken,
        currentUserData,
        currentUserInvoices,
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


