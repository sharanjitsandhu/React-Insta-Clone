import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleLoginSubmit = e => {
  //   const user = this.state.username;
  //   localStorage.setItem("user", user);
  //   window.location.reload();
  // };

  handleLoginSubmit = e => {
    const user = this.state.username;
    if (!user) {
      localStorage.setItem("user", user);
      window.location.reload();
    } else {
      return this.setState({ login: !user });
    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="container">
            <h2>
              <i className="fa fa-instagram iconss"> | Instagram</i>
            </h2>
            <label htmlFor="username">
              <b className="b">Username</b>
            </label>
            <input
              className="input-field"
              type="text"
              value={this.state.username}
              placeholder="username"
              name="username"
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="password">
              <b className="b">Password</b>
            </label>
            <input
              className="input-field"
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />

            <Link to="/">
              <button
                type="submit"
                className="login-btn"
                onClick={this.handleLoginSubmit}
              >
                Log in
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
