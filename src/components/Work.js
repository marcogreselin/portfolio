import React, { Component } from 'react'

export class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return(
            <div className="Work">
                Long Work
                {console.log(this.props.interests)}
                {console.log(this.props.minutes)}
                {console.log(this.props.arrayOfInterests)}
            </div>
        )
    }
}