import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' 

export default class Welcome extends Component {

    componentDidMount = () => {
        document.title = "Marco Greselin"
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Welcome">

            
                        <div className="hello">
                        <p>

                            { this.props.sayHello() } I'm <Link to="/life">Marco</Link>! <span className="dont-break">Welcome to my hood.</span>
                            <Link to={"/work"}>Work</Link>


                            </p>
                            
                    </div> 
            </div>
        )
    }
}