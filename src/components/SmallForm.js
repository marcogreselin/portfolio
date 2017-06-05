import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/SmallForm.css'


class SmallForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: this.props.routeState.minutes,
            interests: {
                business: this.props.routeState.interests.business,
                code: this.props.routeState.interests.code,
                design: this.props.routeState.interests.design
            },
            errors: "",
            pressedEnter: false
        }
    }
    
    validateForm = () => {
        let _errors = []
        if(!this.state.interests.design && !this.state.interests.code && !this.state.interests.business)
            _errors.push("You must have some interests :)")
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

    //  This is just for the time changes
    handleSubmit = (e) => {
        if(e)
            e.preventDefault()
        this.refs.minutesRef.blur()
        if(this.validateForm()){
            this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
            this.props.changeWorkState(this.state)
        }   
        this.setState({pressedEnter: true})
        document.activeElement.blur()
    }

    handleChanges = (e, changeName) => {
        switch (changeName) {
            case "minutes": 
                this.setState({minutes: e.target.value}, this.checkErrorsAgain)
                break
            case "business":
                this.setState({interests:{...this.state.interests, business: e.target.checked}}, () => {
                    if(this.validateForm()){
                        this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
                        this.props.changeWorkState(this.state)
                        // sortArrayAgain()
                    }
                })
                break
            case "code":
                this.setState({interests:{...this.state.interests, code: e.target.checked}}, () => {
                    if(this.validateForm()){
                        this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
                        this.props.changeWorkState(this.state)
                    }
                })
                break
            case "design":
                this.setState({interests:{...this.state.interests, design: e.target.checked}}, () => {
                    if(this.validateForm()){
                        this.props.history.push("/work?mins="+this.state.minutes+"&interest="+this.interestsInitials())
                        this.props.changeWorkState(this.state)
                    }
                })
                break     
            default:
                console.log("Cannot identify the input: "+changeName)               
        }
    }

    render() {
        return(
            <div className="SmallForm">
                                
                <form onSubmit={this.handleSubmit}>
                    I have 
                    <input ref="minutesRef" type="number" value={this.state.minutes} onChange={ (e) => this.handleChanges(e, "minutes")} /> 
                    minutes and <span className="dont-break">I am interested in</span>
                    <div className="choice-wrapper">
                        <span className="choice" id="firstLabel" >
                            <input type="checkbox" id="business" checked={ this.state.interests.business }
                                    onChange={ (e) => this.handleChanges(e, "business") }/>
                            <label htmlFor="business"><span className="label-item">Business</span></label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="code" checked={ this.state.interests.code }
                                    onChange={ (e) => this.handleChanges(e, "code") }/>
                            <label htmlFor="code"><span className="label-item">Code</span></label>
                        </span>
                        <span className="choice">
                            <input type="checkbox" id="design" checked={ this.state.interests.design } 
                                    onChange={ (e) => this.handleChanges(e, "design") }/>
                            <label htmlFor="design"><span className="label-item">Design</span></label>
                        </span>
                    </div>
                </form>
                <div className="errors">
                    {this.state.errors}
                </div>
            </div>
        )
    }
}

export default withRouter(SmallForm)