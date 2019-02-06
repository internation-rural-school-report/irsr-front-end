import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    admin: false,
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name + ": " + event.target.value);
  };

  toggleAdmin = event => {
    this.setState({ admin: !this.state.admin });
  };

  submitForm = event => {
    const loginInfo = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    console.log(loginInfo);
    let endpoint;
    if (this.state.admin) {
      axios
        .post("https://irsr.herokuapp.com/api/admins/login/", loginInfo)
        .then(res => {
          localStorage.setItem("jwt", res.data.token);
          const history = this.props;
          window.location.reload();
        })
        .catch(err => {
          console.log(err.response);
        });
    } else {
      axios
        .post("https://irsr.herokuapp.com/api/boards/login/", loginInfo)
        .then(res => {
          localStorage.setItem("jwt", res.data.token);
          const history = this.props;
          window.location.reload();
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  render() {
    const user = this.state.admin;
    let button;
    if (user) {
      button = <button>To login as board member click here</button>;
    } else {
      button = <button>To login is school admin click here</button>;
    }
    return (
      <div className="loginContainer">
        <div className="loginContent">
          <h1>International Rural School Report</h1>
          <p>
            Solving educational challenges in remote and low-resource
            environments
          </p>
          <div className="loginInput">
            <input
              id="loginName"
              type="text"
              placeholder="username"
              onChange={this.handleInput}
              name="username"
            />

            <input
              id="loginPassword"
              type="password"
              placeholder="password"
              onChange={this.handleInput}
              name="password"
            />
            <button onClick={this.submitForm}>
              <Link to="/home">Login </Link>
            </button>
          </div>
          <div className="toggleAdmin" onClick={this.toggleAdmin}>{button}</div>
        </div>
      </div>
    );
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}

export default Login;
