import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ShortWork extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return(
            <div className="Work">
                Short Work
                {console.log(this.props.interests)}
                {console.log(this.props.minutes)}
                {console.log(this.props.arrayOfInterests)}
                <Link to="/">Go Back Home</Link>
            </div>
        )
    }
}