import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(); 
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true); 

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithGoogle =()=>{
        setLoading(true) ; 
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth);
    }
     
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    })

    const authInfo = {
        user, 
        createUser,
        loginwithGoogle,
        loading,
        login,
        logout
    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
