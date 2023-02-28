import { createContext, useState , useEffect} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utility/firebase/firebase.utility";

//as the actual value you want to access
export const UserConntext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser]= useState(null);
    const value = {currentUser, setCurrentUser};


 
useEffect(()=>{
   const unsubscribe =  onAuthStateChangedListner((user)=> {
    if(user){
        createUserDocumentFromAuth(user);
    }
    setCurrentUser(user);
   });

   return unsubscribe;
}, [])

    return <UserConntext.Provider  value={value}>{children}</UserConntext.Provider>
};