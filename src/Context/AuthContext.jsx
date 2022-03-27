import React, { useContext, useState } from "react";

import { auth } from '../firebase'
// import { collection, addDoc, } from "firebase/firestore";
import { updateProfile } from "firebase/auth"


const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext);
}

// crerating authprovider component that simply holds all the needed state and functionality
export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [pending, setPending] = useState(true);

    //signing user
    const signup = async (fullName, email, password, profilePicture) => {
        // creating user 
        await auth.createUserWithEmailAndPassword(email, password)

        //updating profile name and pic
        await updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: profilePicture
        })


        //adding fullnam to firestore by creating db i.e users
        // await addDoc(collection(db, "users"), {
        //     uid: res.user.uid,
        //     fullName,
        //     authProvider: "local",
        //     email,
        //     photo: profilePicture
        // });

        // console.log(user);
    }

    // logging in user
    const login = async (email, password) => {
        // setPersistence(auth, browserLocalPersistence)
        await auth.signInWithEmailAndPassword(email, password);
    }

    // resetting user password
    const sendPasswordReset = async (email) => {
        await auth.sendPasswordResetEmail(email);
    };

    //logging out user
    const logout = async () => {
        await auth.signOut();

    }

    //getting current user
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            user ? setCurrentUser(user) : setCurrentUser(null);
            setPending(false)
        })

        return unsubscribe
    }, [])

    //
    if (pending) {
        return <></>
    }
    return <AuthContext.Provider value={{ currentUser, signup, login, sendPasswordReset, logout }}>{props.children}</AuthContext.Provider>;
};


