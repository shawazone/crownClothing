import { initializeApp} from 'firebase/app'
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
               });
       } catch (error){
              console.log('error creating the user',error.message);
       }

     }

      // if user data deos not exist

        // if user data exists 

  }