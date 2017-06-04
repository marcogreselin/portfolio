import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import TypeWriter from 'react-typewriter'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' 

export default class Welcome extends Component {

    componentDidMount = () => {
        document.title = "Marco Greselin"
        window.scrollTo(0, 0)
    }

    typedText = () => {
        if(window.innerWidth>576)
            return (<span><TypeWriter fixed={true} delayMap={[{at: 12, delay: 700}, {at: 31, delay: 700}]} initDelay={300} typing={1}>Data Cruncher, Business Designer, <span className="dont-break">Product Manager</span></TypeWriter><br/>in London, trying to build a better world with technology.</span>)
        else
            return (<span>Data Cruncher, Business Designer and <span className="dont-break">Product Manager</span> in London, trying to build a better world with technology.</span>)
    }

    render() {
        return (
            <div className="Welcome">
                <div className="hello">
                    { this.props.sayHello() } I'm <Link to="/life">Marco</Link> ✌ 
                </div>
                <div className="hood">
                    Welcome to my hood.
                </div> 
                <div className="intro">
                    I'm a {this.typedText()}
                    <p>Have a look at my <Link to="/work">work</Link>!</p>
                </div> 
            </div>
        )
    }
}