import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'



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
                I selected {this.props.initialNumberOfElements()} products for you. They are ordered like this since you're into {this.stringifyListOfInterests()}.
                <div className="checkout">
                    Who's Marco, you may say. You can find a quick intro <Link to={{pathname: "/life", 
                                                                          state: { search: this.props.location.search } }}>here</Link>.
                </div>
                <div className="checkout">
                    And if you fancy getting in touch just drop me an <a href="mailto:marcogreselin@me.com?subject=Let&#8217;s get a coffee!" className="social" rel="noopener noreferrer">email</a>.
                </div>
            </div>
        )
    }
}

export default withRouter(Preambole)