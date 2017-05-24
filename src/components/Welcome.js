import React from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import  WelcomeForm from './WelcomeForm'

export const Welcome = (props) => (
    <div className="Welcome">
        <div className="hello">{ props.sayHello() } I'm <Link to="/life">Marco</Link>! Welcome to my hood.</div>
        <WelcomeForm />
    </div>
)