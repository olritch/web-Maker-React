import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          errors: {}
      };
  }

  onChange = e => {
        this.setState({
        [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
     e.preventDefault();
      if (this.state.username === "") {
          this.setState({
              errors: { username: "Username is required" }
          });

          return;
      }

      if (this.state.password === "") {
          this.setState({
              errors: { password: "Password is required" }
          });

          return;
      }

      this.login(this.state.username, this.state.password);
  };

  async login(username, password) {
        const user = {
            username: username,
            password : password
        };
        const res = await axios.post("/api/login", user);
  }

  render() {
    return (
        <div className="container">
  <h1>Login</h1>
  <form onSubmit={this.onSubmit}>
        <div className="alert alert-danger">
        The username and password don't match our records, 
        please try it again
        </div>

      <div className="form-group">
          <input 
                className="form-control" 
                required 
                name="username"
                type="text" 
                placeholder="Username" 
                value={this.state.username}
                onChange ={this.onChange}
          />
      </div>
      {this.state.errors.username && (
            <div className="alert alert-warning">
                {this.state.errors.username}
            </div>
      )}
      <div className="form-group">
         <input 
                className="form-control" 
                required 
                 name="password" 
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange ={this.onChange} 
        />
      </div>
      {this.state.errors.password && (
            <div className="alert alert-warning">
                {this.state.errors.password}
            </div>
      )}
      <button type="submit" className="btn btn-primary btn-block">
      Login
      </button>
      <Link to="/register" className="btn btn-success btn-block">Register</Link>
  </form>
</div>
    );  
  }
}
