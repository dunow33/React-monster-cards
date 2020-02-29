import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      string: 'Hello Brian'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: 'dan' })}>Change text</button>
      </div>
    );
  }
}

export default App;
