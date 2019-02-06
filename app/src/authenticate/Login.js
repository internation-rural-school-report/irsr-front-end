import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import ItemCard from "../components/ItemCard";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name + ": " + event.target.value);
  };

  submitForm = event => { 
    const loginInfo = {
      user: {
        username: "bbob",
        password: "password"
      }
    };
    console.log(loginInfo);

    axios
      .post("https://irsr.herokuapp.com/api/boards/login", loginInfo)
      // /api/admins/login
      // /api/boards/login
      // bbob password
      // username and password
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        const history = this.props; 
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });  
  };
  render() {
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
           <Link to="/home"><button onClick={this.submitForm}>
           Login </button></Link>
          </div>
        </div>
      </div>
    );
  }

  // isAuthenticated() {
  //   let expiresAt = JSON.parse(localStorage("expires_at"));
  //   return new Date().getTime() < expiresAt;
  // }
}

export default Login;
