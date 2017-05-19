import React, { Component } from 'react';
import './App.css';

var hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo'];


class Welcome extends Component {
    sayHello = function() {
        return hellos[Math.floor((Math.random()*hellos.length))];
    }
    render() {
        return (
            <div className="App">
                { this.sayHello() }
            </div>
        );
    }
}

export default Welcome;