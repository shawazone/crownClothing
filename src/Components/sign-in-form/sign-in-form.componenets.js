import { useState,  } from "react";
import "./sign-in-form.styles.scss";

// import { UserConntext } from "../../contexts/user.context";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utility/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultForFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserConntext);

  const resetFormFields = () => {
    setFormFields(defaultForFields);
  };

  const signInWithGoogle = async () => {
  
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email,password);
       resetFormFields();
    } catch (error) {
      switch (error) {
        case "auth/wrong-password":
          alert("incorect password for this email");
          break;
        case "auth/user-not-found":
          alert("this user does not exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign in
          </Button>
        </div>
      </form>
      {/* <Button onClick={signInWithGoogle} >Google sign in</Button>      */}
      <button className="button-containerr" onClick={signInWithGoogle}>
        Google sign in
      </button>
    </div>
  );
};
export default SignInForm;
