import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginPage extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  //username = React.createRef();
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //const username = this.username.current.value;
    console.log("submit");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmitButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginPage;
