import React from 'react'
import SignInForm from '../../Components/sign-in-form/sign-in-form.componenets';
import SignUpForm from '../../Components/sign-up-form/sign-up-form.componenets';
import './authentication.scss'



const Authentication =() => {


//  const logGoogleUser = async () =>{
//   const {user} = await  signInWithGooglePopup();
//  const userDocRef = await createUserDocumentFromAuth(user);
//  };

//  const logGoogleRedirectUser = async () => {
//  const {user} = await signInWithGoogleRedirect();
//  console.log({user})
//  };
 

  return (
    <div>
        {/* <h1>hello i am sign in</h1> */}
        {/* <Button buttonType='google' onClick={logGoogleUser}> Sign in with Google Popup</Button> */}
       <div className='authentication-container'>
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>

       </div>
    </div>
  )
} 
export default Authentication;
