import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    return this.setState({ name: "", password: "" });
  };

  handleOnChange = (event) => {
    console.log('--',event)
    const { value, name } = event.target;
    

    return this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Already have an account</h2>
        <span>provide Email and password to login</span>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            type='email'
            value={this.state.email}
            name='email'
            handleChange={this.handleOnChange}
            label='Email'
          />
          

          <FormInput
            type='password'
            value={this.state.password}
            name='password'
            handleChange={this.handleOnChange}
            label='Password'
          />
          
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
