
import { createContext,useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth'

const AuthContext=createContext()

export function AuthContextprovider({children}){
    const[user,setUser]=useState({})

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)

    }
    function logOut(){
        return signOut(auth)

    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(currUser)=>{
            setUser(currUser)
            return()=>{
                unsub()
            }

        })
    })


    return(
        <AuthContext.Provider value={{logIn,signUp,logOut,user}}>
            {children}
        </AuthContext.Provider>

    )
}
export function UserAuth(){
    return useContext(AuthContext)
}