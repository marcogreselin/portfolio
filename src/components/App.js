import React, { Component } from 'react';
import '../styles/App.css';
import Welcome from './Welcome';
import '../styles/Roboto-Regular.ttf'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="centered-wrapper">
          <Welcome />
        </div>                
        <div className="who">[ <a href="">Who's Marco</a> ]</div>
      </div>
    );
  }
}

export default App;