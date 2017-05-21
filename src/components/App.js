import React, { Component } from 'react'
import '../styles/App.css';
import '../styles/Roboto-Regular.ttf'
import { Route, Switch, Link } from 'react-router-dom'
import { Welcome } from './Welcome'
import { Life } from './Life'
import { Work } from './Work'

class App extends Component {
  render() {    
    return (
      <div className="App">
          <div className="content">
          <div className="centered-wrapper">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/life" component={Life} />
              <Route path="/Work" component={Work} />
              <Route path="*" component={Welcome}/>
            </Switch>
          </div>                
          { (this.props.location.pathname !== "/life") && (<div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>)}
          { (this.props.location.pathname === "/life") && (<div className="back">[ <Link to="/">Go Back Home</Link> ]</div>)}
        </div>
        <footer>
          <a href="https://www.github.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">G.H.</a>
          <a href="https://www.linkedin.com/in/marcogreselin/" target="_blank" className="social" rel="noopener noreferrer">L.I.</a>
          <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!" className="social" rel="noopener noreferrer">E.M.</a>
          <a href="https://www.instagram.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">I.G.</a>
        </footer>
      </div>
    );
  }
}

export default App;