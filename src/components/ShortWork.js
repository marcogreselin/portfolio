import React, { Component } from 'react'

export class ShortWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.routeState.minutes,
            interests: {
                business: this.props.routeState.interests.business,
                code: this.props.routeState.interests.code,
                design: this.props.routeState.interests.design
            }
        }
    }

    render() {
        return(
            <div>This is the short work</div>
        )
    }
}