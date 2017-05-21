import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'

const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa']

export class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    sayHello = function() {
        return hellos[Math.floor((Math.random()*hellos.length))];
    }

    checkError = function() {
        
    }

    addMinutes = function() {

    }
    
    addInterest = function() {
        
    }

    render() {
        return (
            <form className="Welcome">
                <div className="hello">{ this.sayHello() } I'm <Link to="/life">Marco</Link>! Welcome to my hood.</div>
                <div className="question-box">
                    <div className="question"><span className="underline" >How much time do you have?</span></div>
                    <input className="minutes" type="number" /> minutes. 
                </div>
                <div className="question-box">
                    <div className="question"><span className="underline">What do you fancy?</span></div>
                    <div className="answer">
                        <span className="choice">
                            <input type="checkbox" id="business"/>
                            <label htmlFor="business">Business</label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="code"/>
                            <label htmlFor="code">Code</label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="design"/>
                            <label htmlFor="design">Design</label>
                        </span>
                    </div>{/* end of .answer*/}
                  </div>{/* end .question-box*/}
                <button>Show me magic</button>
                <div className="errors">
                    No error. All good.
                </div>
            </form>
        );
    }
}

