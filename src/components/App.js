import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Roboto-Regular.ttf'
import { Route, Switch, Link } from 'react-router-dom'
import Welcome from './Welcome'
import Life from './Life'

class App extends Component {
  render() {    
    return (
      <div className="App">

        <div className="centered-wrapper">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/life" component={Life} />
            <Route path="*" component={Welcome}/>
          </Switch>

        </div>                
        { (this.props.location.pathname !== "/life") && (<div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>)}
      </div>
    );
  }
}

export default App;