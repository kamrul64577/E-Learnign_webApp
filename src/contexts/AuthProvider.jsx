import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    getRedirectResult
   
} from 'firebase/auth';

// Initialize Firebase app


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [emailVerificationSent, setEmailVerificationSent] = useState(false);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const handleEmailVerification = (user) => {
        return sendEmailVerification(user)
            .then(() => {
                setEmailVerificationSent(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false);

    //     });
    //     return () => unsubscribe();
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                getRedirectResult(auth)
                    .then((result) => {
                        if (result.user) {
                            setUser(result.user);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        handleEmailVerification,
        emailVerificationSent,
        signIn,
        updateUser,
        logOut,
        user,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
