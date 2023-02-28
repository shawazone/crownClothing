import { useState ,} from "react";
import './sign-up-form.styles.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
// import { UserConntext } from "../../contexts/user.context";

const defaultForFields = {
  displaName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForFields);
  const { displayName, email, password, confirmPassword } = formFields;


  // const {setCurrentUser} = useContext(UserConntext);
  const resetFormFields = () => {
    setFormFields(defaultForFields);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match ");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      //  console.log(response);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      console.log("user createtion encountred an error", error);
    }
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
console.log("hit");
  return (
    
    <div className='sign-up-container'>
      <h2>Dont have an account?</h2>
      <span>Sign up with email and password</span>
      
      <form onSubmit={handleSubmit}>
      
        <FormInput
        label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        
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

       
        <FormInput
        label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
      
    </div>
  );
};
export default SignUpForm;
