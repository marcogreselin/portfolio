import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <footer>
          <a href="https://www.github.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">G.H.</a>
          <a href="https://www.linkedin.com/in/marcogreselin/" target="_blank" className="social" rel="noopener noreferrer">L.I.</a>
          <a href="mailto:marcogreselin@me.com?subject=Yoo" className="social" rel="noopener noreferrer">E.M.</a>
          <a href="https://www.instagram.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">I.G.</a>
        </footer>
      </div>
    );
  }
}

export default App;