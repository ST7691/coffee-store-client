import React from 'react'
import { AuthContext } from './AuthContext'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebase/firebase.init';
const AuthProvider = ({ children }) => {
    // -----------------sign up ------------------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // ----------sign in ----------------------
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    // -----------------usrInfo-------------------
    const userInfo = {
      createUser,
      signInUser,
    };
    return <AuthContext value={userInfo}
    >{children}</AuthContext>;
}

export default AuthProvider