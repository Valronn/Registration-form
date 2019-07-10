import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserRegistration from "./components/UserRegistration";
import axios from "axios";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    dataDB: [],
    isLogged: false,
    passwordConfirm: "",
    UserNameErrors: "",
    emailErrors: "",
    passwordValidated: true,
    usernameValidated: true,
    emailValidated: true,
    passwordError: "",
    passwordMatchingError: "",
    passwordMatchingValidated: true
  };
  async componentDidMount() {
    this.getDataForValid();
  }
  getDataForValid = async () => {
    const response = await axios.get("http://localhost:2000/users/");
    this.setState({
      dataDB: response.data
    });
  };
  onSubmitCreateUser = async e => {
    const err = "Passwords must match!";
    this.setState({
      passwordMatchingError: err,
      passwordMatchingValidated: false
    });
    const error = "Password must contain at least 8 chars";
    this.setState({
      passwordError: error,
      passwordValidated: false
    });
    e.preventDefault();
    if (this.state.password === this.state.passwordConfirm) {
      const usernameUnique = this.state.dataDB.find(
        value => this.state.username === value.username
      );
      const check = /^[a-zA-Z0-9]+$/;
      const match = this.state.username.match(check);
      const emailUnique = this.state.dataDB.find(
        value => this.state.email === value.email
      );
      if (usernameUnique) {
        const error = "Username already exists!";
        this.setState({
          UserNameErrors: error,
          usernameValidated: false
        });
        e.preventDefault();
      } else if (this.state.username.length < 3) {
        const error = "Username must be at lest 3 chars long!";
        this.setState({
          UserNameErrors: error,
          usernameValidated: false
        });
        e.preventDefault();
      } else if (!match) {
        const error =
          "Username must be written in latin and contain A-z, a-Z, 0-9!";
        this.setState({
          UserNameErrors: error,
          usernameValidated: false
        });
        e.preventDefault();
      } else if (emailUnique) {
        const error = "Email is already registered!";
        this.setState({
          emailErrors: error,
          emailValidated: false
        });
        e.preventDefault();
      } else {
        this.setState({
          passwordValidated: true,
          usernameValidated: true,
          emailValidated: true,
          passwordMatchingValidated: true
        });
        const newUser = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          name: this.state.firstName + " " + this.state.lastName,
          age: this.state.age
        };
        const response = await axios.post(
          "http://localhost:2000/users/add",
          newUser
        );
        console.log(response);
        window.location.reload();
      }
    }
  };
  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onChangePasswordConfirm = e => {
    this.setState({
      passwordConfirm: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  onChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  onChangeAge = e => {
    this.setState({
      age: e.target.value
    });
  };
  render() {
    return (
      <UserRegistration
        onChangePasswordConfirm={this.onChangePasswordConfirm}
        onSubmitCreateUser={this.onSubmitCreateUser}
        onChangeAge={this.onChangeAge}
        onChangeLastName={this.onChangeLastName}
        onChangeFirstName={this.onChangeFirstName}
        onChangeEmail={this.onChangeEmail}
        onChangeUsername={this.onChangeUsername}
        onChangePassword={this.onChangePassword}
        value={this.state}
      />
    );
  }
}
