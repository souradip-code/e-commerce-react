import React from "react";

import "./sign-in-and-sign-up-page.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className='forms'>
    <div className="sign-in">
      <h1>SIGN IN</h1>
      <SignIn />
    </div>
    <div className="sign-up">
      <h1>SIGN UP</h1>
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUp;
