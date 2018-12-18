import React, { Component } from "react";
import "./App.css";
import Login from "./components/user/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
        );
  }
}

export default App;
