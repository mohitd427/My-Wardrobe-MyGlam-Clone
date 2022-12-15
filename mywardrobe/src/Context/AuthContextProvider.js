import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {auth} from '../config/firebaseConfig'
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from 'firebase/auth'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const setUpRecaptcha = (number) =>{
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
      }

    const [user, setUser] = useState("")
    const googleSignIn = () =>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }
    const logOut = () =>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    },[])
  return (
    <AuthContext.Provider value={{googleSignIn,user,setUser,logOut,setUpRecaptcha}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthContextProvider}