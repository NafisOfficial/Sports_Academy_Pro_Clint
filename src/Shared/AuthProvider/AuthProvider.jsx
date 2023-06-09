import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../shared/Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const authContext = createContext(null)

const Authprovider = ({children}) => {



    const auth = getAuth(app)
    
    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true);

    const createUserByEmailPassword = (email , password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInByEmailAndPass = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singInByGoogle = (provider) =>{
        setLoading(true)
       return signInWithPopup(auth,provider)

    }

    const logOut = () =>{
        setLoading(true);
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user,loading,setUser,createUserByEmailPassword,signInByEmailAndPass,logOut,singInByGoogle}


    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;