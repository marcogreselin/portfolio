import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Roboto-Regular.ttf'
import { Route, Switch, Link } from 'react-router-dom'
import Life from './Life'
import Welcome from './Welcome'

class App extends Component {
  render() {    
    return (
      <div className="App">

        <div className="centered-wrapper">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/life" component={Life} />
            <Route path="*" component={Welcome}/>
          </Switch>

        </div>                
        <div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>
      </div>
    );
  }
}

export default App;