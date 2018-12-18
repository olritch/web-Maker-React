import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <div className="container">
  <h1>Login</h1>
  <form>
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
          />
      </div>
      <div className="alert alert-warning">Please Enter Username</div>
      <div className="form-group">
         <input 
                className="form-control" 
                required 
                name="password" 
                type="password" 
                placeholder="Password" 
        />
      </div>
      <div className="alert alert-warning">Please Enter Password</div>
      <button type="submit" className="btn btn-primary btn-block">
      Login
      </button>
      <a className="btn btn-success btn-block">
      Register
      </a>
  </form>
</div>
    );  
  }
}
