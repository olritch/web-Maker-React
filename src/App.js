import React, { Component } from 'react';
import './App.css';

class App extends Component {
  title = "MSIMBO";

  sum() {
    return 1 + 1;
  }

  render() {
    return (
      <section>
    <div>

      <h1>Hello {this.sum()}</h1>
      <h1>Good Bye</h1>
    </div>
    <div>
      <h2>React Course</h2>
    </div>
    </section>
  );
  }
}

export default App;
