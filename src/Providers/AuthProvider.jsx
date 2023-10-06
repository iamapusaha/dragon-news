import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setuser] = useState([])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            console.log('from useEffect obsarver', currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;