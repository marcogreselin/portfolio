import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/font-awesome/css/font-awesome.min.css'


class Work extends Component {
    constructor(props) {
        super(props)
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
            this.setState({errors: ""})
            return true
        }
        else{
            if(_errors.length===2){
                this.setState({errors: "Make your selection above"})
            } else {
                 this.setState({errors: _errors[0]})
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
        this.refs.minutesRef.blur()
        if(this.validateForm())
            this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
        this.setState({pressedEnter: true})
    }


    handleChanges = (e, changeName) => {
        switch (changeName) {
            case "minutes": 
                this.setState({minutes: e.target.value}, this.checkErrorsAgain )
                break
            case "business":
                this.setState({interests:{...this.state.interests, business: e.target.checked}}, this.checkErrorsAgain )
                break
            case "code":
                this.setState({interests:{...this.state.interests, code: e.target.checked}}, this.checkErrorsAgain )
                break
            case "design":
                this.setState({interests:{...this.state.interests, design: e.target.checked}}, this.checkErrorsAgain )
                break     
            default:
                console.log("Cannot identify the input")               
        }
    }

    checkErrorsAgain = () => {
        if(this.state.pressedEnter)
            this.validateForm()
    }


    render() {
        return (
            <form className="Work" onSubmit={this.handleSubmit}>
                <p className="left">
                    <span className="chatbox">This is the first user centred portfolio, <span className="dont-break">built just for you.</span> <br/>Let me ask you two questions:</span>
                </p>

                <p className="left">
                    <span className="chatbox">How much time do you have?</span>
                </p>
                <p className="right">
                    <span className="chatbox"><input  ref="minutesRef" className="minutes" type="number" value={this.state.minutes}
                           onChange={ (e) => this.handleChanges(e, "minutes")} /> minutes. </span>
                </p>
                <p className="left">
                    <span className="chatbox">What do you fancy?</span>
                </p>
                <p className="right">
                    <span className="chatbox">
                        <input type="checkbox" id="business" checked={ this.state.interests.business }
                            onChange={ (e) => this.handleChanges(e, "business") }/>
                        <label htmlFor="business"><span className="label-item">Business</span></label>
                        <input type="checkbox" id="code" checked={ this.state.interests.code }
                            onChange={ (e) => this.handleChanges(e, "code") }/>
                        <label htmlFor="code"><span className="label-item">Code</span></label>
                        <input type="checkbox" id="design" checked={ this.state.interests.design }
                            onChange={ (e) => this.handleChanges(e, "design") }/>
                        <label htmlFor="design"><span className="label-item">Design</span></label>
                    </span>
                </p>

                <button type="submit">Show me your work</button>
                <div className="errors">
                    {this.state.errors}
                </div>


            </form>  
        )
    }
}

export default withRouter(Work)