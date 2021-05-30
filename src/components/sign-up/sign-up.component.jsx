import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
    return this.setState({ name: "", password: "" });
  };

  handleChange = (event) => {
   
    const { value, name } = event.target;

    return this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Please register before you login</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="displayName"
            value={this.state.displayName}
            name="displayName"
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            label="Password"
          />

          <FormInput
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
