import React, { Component } from 'react';
import '../styles/Welcome.css';

var hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa'];


class Welcome extends Component {
    sayHello = function() {
        return hellos[Math.floor((Math.random()*hellos.length))];
    }
    render() {
        return (
            <div className="Welcome">
                <div className="hello">{ this.sayHello() } I'm <a href="">Marco</a>! Welcome to my hood.</div>
                <div className="question-box">
                    <div className="question"><span className="underline">How much time do you have?</span></div>
                    <input className="minutes" type="number"/> minutes. 
                </div>
                <div className="question-box">
                    <div className="question"><span className="underline">What do you fancy?</span></div>
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
                  </div>{/* end .question-box*/}
                
                <button>Show me magic</button>

            </div>
        );
    }
}

export default Welcome;