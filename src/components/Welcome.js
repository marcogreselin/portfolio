import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import  WelcomeForm from './WelcomeForm'

export default class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: false
        }
    }

    componentDidMount = () => document.title = "Marco Greselin"

    chooseView = () => {
            return(
                <div className="Welcome">
                    <div className="hello">
                       <p>
                         { this.props.sayHello() } I'm <Link to="/life">Marco</Link>! <span className="dont-break">Welcome to my hood.</span>
                        </p>
                        <p>
                            This is the first user centred portfolio. <br/>Let me just ask you two questions:
                        </p>
                        <WelcomeForm />
                    </div>
                </div> 
            )
    }

    render() {
        return (
            <div className="Welcome">
                {this.chooseView()}
            </div>
        )
    }
}