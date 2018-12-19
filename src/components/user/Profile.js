import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <a className="navbar-brand"><b>Profile</b></a>
          <button className="btn bg-transparent color-white" type="submit" form="myForm"><i className="fas fa-check"></i></button>
        </nav>
        <br />
        <div className="container">
          <form id="myForm">
              <div className="alert alert-danger">This username is taken, please try another one.</div>
              <div className="alert alert-success">Update Successfully</div>
              <div className="form-group">
                  <label htmlFor="username"><b>Username</b></label>
                  <input required id="username" type="text" className="form-control" name="username" 
                        placeholder="Enter Username..." />
              </div>
              <div className="alert alert-warning">Username can't be empty</div>
              <div className="form-group">
                  <label htmlFor="email" ><b>Email</b></label>
                  <input id="email" type="email" className="form-control" name="email" placeholder="Enter Email..." />
              </div>
              <div className="form-group">
                  <label htmlFor="firstName" ><b>First Name</b></label>
                  <input id="firstName" type="text" className="form-control" name="firstName" placeholder="Enter First Name..." />
              </div>
              <div className="form-group" >
                  <label htmlFor="lastName" ><b>Last Name</b></label>
                  <input id="lastName" type="text" className="form-control" name="lastName"   placeholder="Enter Last Name..." />
              </div>
              <a className="btn btn-primary btn-block">Websites</a>
              <button type="button" className="btn btn-danger btn-block">Logout</button>
              <br />
              <a className="btn btn-outline-dark" >User List</a>
          </form>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <div className="full-width">
              <a className="color-white float-right" ><i className="fas fa-user"></i></a>
          </div>
        </nav>
        </div>
        )
    }
  }
