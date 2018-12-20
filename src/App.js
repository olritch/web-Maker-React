import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/user/:uid" component={Profile} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </Router>
        );
  }
}

export default App;
