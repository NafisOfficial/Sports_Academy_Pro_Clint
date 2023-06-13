import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const authContext = createContext(null)

const Authprovider = ({children}) => {

    const provider = new GoogleAuthProvider()

    const auth = getAuth(app)
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const [darkmod,setDarkmode] = useState(false)

    const createUserByEmailPassword = (email , password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const updateUser = (data) =>{
        console.log(data.displayName,data.photoURL);
        return updateProfile(auth.currentUser,{displayName:data.displayName,photoURL: data.photoURL});
    }
    
    const signInByEmailAndPass =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singInByGoogle = () =>{
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


    const authInfo = {user,loading,darkmod,setDarkmode,setUser,updateUser,createUserByEmailPassword,signInByEmailAndPass,logOut,singInByGoogle}


    return (
        <authContext.Provider value={authInfo}>
            <div className={darkmod?'bg-gray-900':''}>
                {children}
            </div>
        </authContext.Provider>
    );
};

export default Authprovider;