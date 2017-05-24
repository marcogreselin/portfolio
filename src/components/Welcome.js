import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import  WelcomeForm from './WelcomeForm'

export class Welcome extends Component {

    componentDidMount = () => document.title = "Marco's Page"

    render() {
        return(
            <div className="Welcome">
                <div className="hello">{ this.props.sayHello() } I'm <Link to="/life">Marco</Link>! Welcome to my hood.</div>
                <WelcomeForm />
            </div>
        )
    }
}