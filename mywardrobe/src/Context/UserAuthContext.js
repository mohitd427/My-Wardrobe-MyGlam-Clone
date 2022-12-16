import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged } from "firebase/auth";

import { auth } from "../config/firebaseConfig";

const userAuthContext = createContext();

export const  UserAuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({})
    const signUp = (email, password, displayName) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    },[])
    console.log(user)
    return <userAuthContext.Provider value={{user, signUp , logIn}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext)
}