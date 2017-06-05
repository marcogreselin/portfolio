import React, { Component } from 'react'
import '../styles/App.css';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom'
import Welcome  from './Welcome'
import { About } from './About'
import {Portfolio} from './Portfolio'
import Work from './Work'
import {products} from './products'
import Product from './Product'

export class App extends Component {

  sayHello = () => {
    const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoy', 'Aloha', 'Howdy', 'Ni Hao']
    return hellos[Math.floor((Math.random()*hellos.length))];
  }

  checkProduct = (props) => {
    for(let i=0;i<products.length;i++){
      if(products[i].name===props.match.params.productparam)
        return true
    }
    return false

  }

  productData = (props)=> {
    for(let i=0; i<products.length;i++) {
        if(products[i].name===props.match.params.productparam)
          return products[i]
    }
  }

  render() {
    return(
      <div className="App">
            <div className="content">
              <nav>
                <Link className="logo" to={"/"}>mg.</Link>
                <div className="items">
                  <NavLink className="hoverable" to={"/work"} activeClassName="selected">Work</NavLink>
                  <NavLink className="hoverable" to={"/me"} activeClassName="selected">About</NavLink>
                  <a href="https://www.linkedin.com/in/marcogreselin/" rel="noopener noreferrer" target="_blank" ><i className="fa fa-linkedin" aria-hidden="true"></i><span className="hidden">Linkedin</span></a>
                  <a href="https://www.github.com/marcogreselin" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span className="hidden">GitHub</span></a>
                </div>
              </nav>
            <div className="centered-wrapper">
              <Switch>
                <Route exact path="/" render={props => <Welcome sayHello = { this.sayHello } />} />
                <Route path="/me"render={props => (!props.location.search) ? <About sayHello = { this.sayHello } />:<Redirect to="/" />} />
                <Route exact path="/work" render={props => {
                  let re = /^\?mins=0*([1-9]|[1-9][0-9]|1[0-1][0-9]|120)(\.[0-9]*)?&interest=(b|c|d|bc|cb|bd|db|cd|dc|bcd|bdc|cbd|cdb|dcb|dbc)$/
                  let dottedRe = /^\?mins=0*([1-9]|[1-9][0-9]|1[0-1][0-9]|120)\.[0-9]*&interest=(b|c|d|bc|cb|bd|db|cd|dc|bcd|bdc|cbd|cdb|dcb|dbc)$/
                  if(props.location.search==="")
                    return <Work />
                  if(re.test(props.location.search))
                    if(dottedRe.test(props.location.search))
                      return <Redirect to={"/work"+props.location.search.split('&')[0].split('.')[0]+'&'+props.location.search.split('&')[1]} />
                    else
                      return <Portfolio search={props.location.search} />
                  else 
                    return <Redirect to="/" />
                }}  />
                <Route path="/work/:productparam"render={props => (this.checkProduct(props)) ? <Product productData={this.productData(props)} />:<Redirect to="/" />} />
                <Route path="*" render={ props=> <Redirect to="/"/>} />
              </Switch>
            </div>                
          </div>
        </div>
    )
  }
}