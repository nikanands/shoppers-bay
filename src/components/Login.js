import React from "react";

import FormInput from "../utils/FormInput";
import Button from "../utils/Button";
import { auth, signInWithGoogle } from "../utils/Firebase";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login__wrapper">
        <h2 className="login__title">I already have an account</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            placeholder="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            placeholder="Password"
            required
          />

          <div className="login__btn_wrapper">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogle>
              Sign in with GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
