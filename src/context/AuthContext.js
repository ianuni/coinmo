import React, { useContext, useEffect, useState } from 'react';
import {auth, db} from "../firebase"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { doc, getDoc, setDoc, query, where, collection} from 'firebase/firestore';

const AuthContext = React.createContext();
const usersRef = collection(db, "users");
const invoicesRef = collection(db, "invoices");
const q1 = query()
const q2 = query()
export const useAuth = ()=> {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUserToken, setCurrentUserToken] = useState();
    const [currentUserData, setCurrentUserData] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = async (form) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            name: form.name,
            nif: form.nif,
            phoneNumber: form.phoneNumber,
            category: form.category,
            email: form.email,
            address: form.address,
            apartment: form.apartment,
            city: form.city,
            postalCode: form.postalCode,
            country: form.country
        });
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
                await getDoc(doc(db, "users", user.uid)).then((dataSnap) => {
                    console.log(dataSnap.data())
                    
                    setCurrentUserData(dataSnap.data());
                    setLoading(false);
                    
                });
            }
        });

        return unsub;
    }, [])
    

    const value = {
        currentUserToken,
        currentUserData,
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


