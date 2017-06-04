import React, {Component} from 'react'
import {  withRouter } from 'react-router-dom'

class Preambole extends Component {
    stringifyListOfInterests = () => {
        let arr = []
        if (this.props.interests.business)
            arr.push("business")
        if (this.props.interests.code)
            arr.push("coding")
        if (this.props.interests.design)
            arr.push("design")
        if(arr.length===1)
            return arr[0]
        else if(arr.length===2)
            return arr[0]+" and "+arr[1]
        else
            return arr[0]+", "+arr[1]+" and "+arr[2]
    }
    
    render() {
        return (
            <div className="Preambole">
                I selected {this.props.initialNumberOfElements()} products for you. They are prioritised based on your interest in <b>{this.stringifyListOfInterests()}</b>.
            </div>
        )
    }
}

export default withRouter(Preambole)