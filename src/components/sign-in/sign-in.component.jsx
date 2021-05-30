import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleOnSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({ email: "", password: "" });
    try {
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;

    return this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Already have an account</h2>
        <span>provide Email and password to login</span>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleOnChange}
            label="Email"
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleOnChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
