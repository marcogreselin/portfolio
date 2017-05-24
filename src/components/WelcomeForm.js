import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class WelcomeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: "",
                interests: {
                business: false,
                code: false,
                design: false
                },
            errors: "",
            pressedEnter: false
        }
    }

    validateForm = () => {
        let _errors = []
        if(!this.state.interests.design && !this.state.interests.code && !this.state.interests.business)
            _errors.push("Select something you fancy")
        if(this.state.minutes==="" || this.state.minutes <1 || this.state.minutes>120)
            _errors.push("Enter a reasonable amount of time")
        if(_errors.length===0){
            this.setState({...this.state, errors: ""})
            return true
        }
        else{
            if(_errors.length===2){
                this.setState({...this.state, errors: "Make your selection above"})
            } else {
                 this.setState({...this.state, errors: _errors[0]})
            }
            return false
        }
    }

    interestsInitials = () => {
        let initials=""
        if(this.state.interests.design)
            initials+="d"
        if(this.state.interests.code)
            initials+="c"
        if(this.state.interests.business)
            initials+="b"
        return initials
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(JSON.stringify(this.state))
        if(this.validateForm())
            this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
        this.setState({...this.state, pressedEnter: true})
    }


    handleChanges = (e, changeName) => {
        switch (changeName) {
            case "minutes": 
                this.setState({...this.state, minutes: e.target.value})
                break
            case "business":
                this.setState({...this.state, interests:{...this.state.interests, business: e.target.checked} })
                break
            case "code":
                this.setState({...this.state, interests:{...this.state.interests, code: e.target.checked} })
                break
            case "design":
                this.setState({...this.state, interests:{...this.state.interests, design: e.target.checked} })
                break     
            default:
                console.log("Cannot identify the input")               
        }
    }


    render() {
        return (
            <form className="WelcomeForm" onSubmit={this.handleSubmit}>
                <div className="question-box">
                    <div className="question"><span className="underline">How much time do you have?</span></div>
                    <input className="minutes" type="number" value={this.state.minutes}
                            onChange={ (e) => this.handleChanges(e, "minutes")}/> minutes. 
                </div>
                <div className="question-box">
                    <div className="question"><span className="underline">What do you fancy?</span></div>
                    <div className="answer">
                        <span className="choice">
                            <input type="checkbox" id="business" checked={ this.state.interests.business }
                                   onChange={ (e) => this.handleChanges(e, "business") }/>
                            <label htmlFor="business">Business</label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="code" checked={ this.state.interests.code }
                                   onChange={ (e) => this.handleChanges(e, "code") }/>
                            <label htmlFor="code">Code</label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="design" checked={ this.state.interests.design } 
                                   onChange={ (e) => this.handleChanges(e, "design") }/>
                            <label htmlFor="design">Design</label>
                        </span>
                    </div>{/* end of .answer*/}
                </div>{/* end .question-box*/}
                <button>Show me magic</button>
                <div className="errors">
                    {this.state.errors}
                </div>
            </form>  
        )
    }
}

export default withRouter(WelcomeForm);    