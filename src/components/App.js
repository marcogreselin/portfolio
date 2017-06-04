import React, { Component } from 'react'
import '../styles/App.css';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom'
import Welcome  from './Welcome'
import { Life } from './Life'
import {Portfolio} from './Portfolio'
import Work from './Work'
import {products} from './products'
import Product from './Product'

export class App extends Component {

  sayHello = () => {
    const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoy', 'Aloha', 'Howdy', 'Ni Hao']
    return hellos[Math.floor((Math.random()*hellos.length))];
  }

  backButton = (location) => {
    // if(location.pathname === "/life" && location.state && location.state.search && location.state.product)
    //   return (<div className="back">[ <Link to={{pathname: "/work"+location.state.product, state:{search:location.state.search}}}>Back to work</Link> ]</div>)
    // else if(location.pathname === "/life" && location.state && location.state.product)
    //   return (<div className="back">[ <Link to={{pathname: "/work"+location.state.product}}>Back to work</Link> ]</div>)
    // else if(location.pathname === "/life" && location.state && location.state.search)
    //   return (<div className="back">[ <Link to={"/work"+location.state.search}>Back to work</Link> ]</div>)
    // else if(location.pathname==="/work")
    //   return (<div className="who-back"><div className="who">[ <Link to={{pathname: "/life", state: { search: this.props.location.search } }}>Who's Marco</Link> ]</div><div className="back">[ <Link to={{pathname: "/", state: {form: true} }}>Go Back Home</Link> ]</div></div>)
    // else if(location.pathname === "/life")
    //   return (<div className="back">[ <Link to="/">Go Back Home</Link> ]</div>)
    // else if(location.pathname.startsWith("/work/") && location.state && location.state.search)
    //   return (<div className="who-back"><div className="who">[ <Link to={{pathname: "/life", state: { product: location.pathname.substring(5), search: location.state.search} }}>Who's Marco</Link> ]</div></div>)
    // else if(location.pathname.startsWith("/work/"))
    //   return (<div className="who-back"><div className="who">[ <Link to={{pathname: "/life", state: { product: location.pathname.substring(5)} }}>Who's Marco</Link> ]</div></div>)
    // else
    //   return (<div className="who">[ <Link to="/life">Who's Marco</Link> ]</div>)
    return null
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
                  <NavLink className="hoverable" to={"/life"} activeClassName="selected">About</NavLink>
                  <a href="https://www.linkedin.com/in/marcogreselin/" rel="noopener noreferrer" target="_blank" ><i className="fa fa-linkedin" aria-hidden="true"></i><span className="hidden">Linkedin</span></a>
                  <a href="https://www.github.com/marcogreselin" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span className="hidden">GitHub</span></a>
                </div>
              </nav>
            <div className="centered-wrapper">
              <Switch>
                <Route exact path="/" render={props => <Welcome sayHello = { this.sayHello } />} />
                <Route path="/life"render={props => (!props.location.search) ? <Life sayHello = { this.sayHello } />:<Redirect to="/" />} />
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
            { this.backButton(this.props.location) }

          </div>
          {/*<footer>
            <a href="https://www.github.com/marcogreselin" target="_blank" className="social" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/marcogreselin/" target="_blank" className="social" rel="noopener noreferrer">Linkedin</a>
            <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!" className="social" rel="noopener noreferrer">Email</a>
          </footer>*/}
        </div>
    )
  }
}