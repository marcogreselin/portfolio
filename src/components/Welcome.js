import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import  WelcomeForm from './WelcomeForm'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' 

export default class Welcome extends Component {

    componentDidMount = () => {
        document.title = "Marco Greselin"
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Welcome">

                    <div className="Welcome">
                        <div className="hello">
                        <p>

                            { this.props.sayHello() } I'm <Link to="/life">Marco</Link>! <span className="dont-break">Welcome to my hood.</span>


                            </p>
                            <p>
                                This is the first user centred portfolio, built <span className="dont-break">just for you.</span> <br/>Let me ask you two questions:
                            </p>
                            <WelcomeForm />
                        </div>
                    </div> 
            </div>
        )
    }
}