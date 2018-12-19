import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
        <div className="container">
        <h1>Register</h1>
        <form> 
            <div className="alert alert-danger">This username is taken, please try another one</div>
            <div className="alert alert-danger">The two passwords are not match, please try it again</div>
            <div className="form-group">
                <input required name="username" className="form-control" type="text" placeholder="Username" />
                    
            </div>
            <div className="alert alert-warning">Username cannot be empty</div>
            <div className="form-group">
               <input className="form-control" required name="password" type="password" placeholder="Password" />
                   
            </div>
            <div className="alert alert-warning">Password cannot be empty</div>
            <div className="form-group">
                    <input className="form-control" required name="verifyPassword" type="password" 
                          placeholder="Verify Password" />
                 </div>
                 <div className="alert alert-warning">Please Enter The Password Again</div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            <Link to="/login" className="btn btn-danger btn-block">Cancel</Link>
        </form>
      </div>
    )
  }
}
