import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';
function Signin() {
 const logGoogleUser = async () =>{
  const {user} = await  signInWithGooglePopup();
 const userDocRef = await createUserDocumentFromAuth(user);
 }

  return (
    <div>
        <h1>hello i am sign in</h1>
        <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </div>
  )
} 
export default Signin;
