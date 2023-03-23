import { initializeApp} from 'firebase/app'
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
} from 'firebase/auth'


// Your web app's Firebase configuration
import {
  getFirestore,
  doc,
  getDoc, //get document data
  setDoc, // set docment data 
  collection,
  writeBatch,
  query,
  getDocs,
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
 console.log(firebaseapp)
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();




 export const addCollectionAndDocuments = async (
  collectoionKey,
   objectsToAdd,
  
  ) => {
     const collectionRef = collection(db,collectoionKey);
     const batch = writeBatch(db);

     objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase()) ;
     batch.set(docRef , object);
    });

    await batch.commit();
    console.log(" batch done")
 };






export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db , 'catogories');
  const q = query(collectionRef);
  
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
    const { title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});
  return categoryMap;
}
 





  export const createUserDocumentFromAuth = async (
    userAuth,
   additionalInformation
    ) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
      // console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      // console.log(userSnapshot);
      // console.log(userSnapshot.exists());

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

  // 😎helper functios 👇👇👇 

  export const  createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);

  };
  export const  signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  
    };
    export const signOutUser =  async () => await signOut(auth);
  
 // auth singlaton 
    export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);