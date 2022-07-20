import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});


    const signInUsingGoogle = (location, navigate) =>{
        let from = location.state?.from?.pathname || "/";
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)

        .then(result =>{
            navigate(from, { replace: true });
            setUser(result.user)
        })

    }

    // Observed user state changed
    useEffect(() => {
        const unSubsCribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unSubsCribed;
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then( () => { })
    }

    return{
        user,
        logOut,
        signInUsingGoogle
    }
}

export default useFirebase;