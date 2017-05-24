import React from 'react'
import '../styles/App.css';
import '../styles/Roboto-Regular.ttf'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { Welcome } from './Welcome'
import { Life } from './Life'
import { Work } from './Work'

const sayHello = () => {
  const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa']
  return hellos[Math.floor((Math.random()*hellos.length))];
}

export const App = (props) => (
  <div className="App">
      <div className="content">
      <div className="centered-wrapper">
        <Switch>
          <Route exact path="/" render={props => <Welcome sayHello = { sayHello } />} />
          <Route path="/life"render={props => (!props.location.search) ? <Life sayHello = { sayHello } />:<Redirect to="/" />} />
          <Route path="/work" render={props => {
            let re = /^\?mins=0*([1-9]|[1-9][0-9]|1[0-1][0-9]|120)(\.[0-9]*)?&interest=(b|c|d|bc|cb|bd|db|cd|dc|bcd|bdc|cbd|cdb|dcb|dbc)$/
            let dottedRe = /^\?mins=0*([1-9]|[1-9][0-9]|1[0-1][0-9]|120)\.[0-9]*&interest=(b|c|d|bc|cb|bd|db|cd|dc|bcd|bdc|cbd|cdb|dcb|dbc)$/
            if(re.test(props.location.search))
              if(dottedRe.test(props.location.search))
                return <Redirect to={"/work"+props.location.search.split('&')[0].split('.')[0]+'&'+props.location.search.split('&')[1]} />
              else
                return <Work search={props.location.search} />
            else 
              return <Redirect to="/" />
          }}  />
          <Route path="*" render={ props=> <Redirect to="/"/>} />
        </Switch>
      </div>                
      { (props.location.pathname !== "/") ? (<div className="back">[ <Link to="/">Go Back Home</Link> ]</div>) 
        : (<div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>)}
       
    </div>
    <footer>
      <a href="https://www.github.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">G.H.</a>
      <a href="https://www.linkedin.com/in/marcogreselin/" target="_blank" className="social" rel="noopener noreferrer">L.I.</a>
      <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!" className="social" rel="noopener noreferrer">E.M.</a>
      <a href="https://www.instagram.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">I.G.</a>
    </footer>
  </div>
)
