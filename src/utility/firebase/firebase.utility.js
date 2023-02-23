import { initializeApp} from 'firebase/app'
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
} from 'firebase/auth'


// Your web app's Firebase configuration
import {
  getFirestore,
  doc,
  getDoc, //get document data
  setDoc, // set docment data 
 }
  from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDGAie4_unu6hMzpFRMh3HX-JqIRmLryvc",
    authDomain: "crwn-clothing-db-e9a00.firebaseapp.com",
    projectId: "crwn-clothing-db-e9a00",
    storageBucket: "crwn-clothing-db-e9a00.appspot.com",
    messagingSenderId: "892430655149",
    appId: "1:892430655149:web:492f3861cd6a8228267024"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth,
   additionalInformation
    ) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      // console.log(userSnapshot);
      console.log(userSnapshot.exists());

     if (!userSnapshot.exists()){
      const {displayName,email}= userAuth;
      const createdAt = new Date();
       try{
               await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
               });
       } catch (error){
              console.log('error creating the user',error.message);
       }

     }

    return userDocRef;

  };

  export const  createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);

  };
  export const  signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  
    };
  
