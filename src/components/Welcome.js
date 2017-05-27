import React, { Component } from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom'
import  WelcomeForm from './WelcomeForm'

export class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: false
        }
    }

    componentDidMount = () => document.title = "Marco Greselin"

    chooseView = () => {
        if(this.state.form===false) {
            return(
                <div className="Welcome">
                    <p>
                        { this.props.sayHello() } I'm <Link to="/life">Marco</Link>! <span className="dont-break">Welcome to my hood.</span>
                    </p>
                    <p>
                        Let me create a personalised portfolio for you!
                    </p>
                    <button onClick={()=>this.setState({form: true})}>Yes let's do this</button>
                </div>
            )
        } else {
            return (
                <div className="Welcome">
                    <div className="hello">
                        <p>
                            Welcome to the first user centred portfolio. <br/>Let me just ask you two questions.
                        </p>
                        <WelcomeForm />
                    </div>
                </div> 
            )
        }
    }

    render() {
        return (
            <div className="Welcome">
                {this.chooseView()}
            </div>
        )
    }
}
/*
const FirstPage = (props) => {
    return (
            <div className="Welcome">
                <div className="hello">
                    <p>
                        { props.sayHello() } I'm <Link to="/life">Marco</Link>! <span className="dont-break">Welcome to my hood.</span>
                    </p>
                    <p>
                        Let me create a personalised portfolio for you!
                    </p>
                    <button>Yes let's do this</button>
                </div>
            </div>
    )
}*/
