import React, { Component } from 'react'
import WelcomeForm from './WelcomeForm'

export class Work extends Component {

    render() {
        return (
            <div className="Welcome">
                <p>
                    This is the first user centred portfolio, built <span className="dont-break">just for you.</span> <br/>Let me ask you two questions:
                </p>
                <WelcomeForm />
                </div>
        )
    }
}
