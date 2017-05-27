import React, { Component } from 'react'
import '../styles/App.css';
import '../styles/Roboto-Regular.ttf'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Welcome  from './Welcome'
import { Life } from './Life'
import { Work } from './Work'

export class App extends Component {

  sayHello = () => {
    const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoy', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa']
    return hellos[Math.floor((Math.random()*hellos.length))];
  }

  backButton = (location) => {
    if(location.pathname === "/life" && location.state && location.state.search)
      return (<div className="back">[ <Link to={"/work"+location.state.search}>Back to work</Link> ]</div>)
    if(location.pathname==="/work")
      // return (<div className="back">[ <Link to="/">Go Back Home</Link> ]</div>)
      return (<div className="who-back"><div className="who">[ <Link to={{pathname: "/life", state: { search: this.props.location.search } }}>Who's Marco</Link> ]</div><div className="back">[ <Link to={{pathname: "/", state: {form: true} }}>Go Back Home</Link> ]</div></div>)
    if(location.pathname === "/life")
      return (<div className="back">[ <Link to="/">Go Back Home</Link> ]</div>)
    else
      return (<div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>)
  }

  adjustCenteredWrapperHeight = () => {
    if(this.props.location.pathname==="/work")
      return {minHeight: "calc(100vh - 168px - 29px)"}
    else 
      return {}
  }

  render() {
    return(
      <div className="App">
            <div className="content">
            <div className="centered-wrapper" style={this.adjustCenteredWrapperHeight()}>
              <Switch>
                <Route exact path="/" render={props => <Welcome sayHello = { this.sayHello } />} />
                <Route path="/life"render={props => (!props.location.search) ? <Life sayHello = { this.sayHello } />:<Redirect to="/" />} />
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
            { this.backButton(this.props.location) }

          </div>
          <footer>
            <a href="https://www.github.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/marcogreselin/" target="_blank" className="social" rel="noopener noreferrer">Linkedin</a>
            <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!" className="social" rel="noopener noreferrer">Email</a>
            {/*<a href="https://www.instagram.com/marcogreselin" target="_blank" className="iphone-hidden social" rel="noopener noreferrer">Instagram</a>*/}
          </footer>
        </div>
    )
  }
}