import React, { Component } from 'react'

export class ShortWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    render() {
        return(
            <div className="Work">
                Short Work
                {console.log(this.props.search)}
            </div>
        )
    }
}