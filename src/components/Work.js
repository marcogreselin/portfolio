import React, { Component } from 'react'

export class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    render() {
        return(
            <div className="Work">
                {console.log(this.props.search)}
            </div>
        )
    }
}
