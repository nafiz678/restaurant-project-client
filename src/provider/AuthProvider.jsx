import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app } from "@/firebase/firebase.init";



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (info) =>{
        return updateUser(auth.currentUser, info)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log("Current User=>" , currentUser)
            setLoading(false)
        })

        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signin,
        logOut,
        updateUser,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider