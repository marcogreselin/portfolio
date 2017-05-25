import React, { Component } from 'react'
import SmallForm from './SmallForm'
import { ShortWork } from './ShortWork'
import { LongWork } from './LongWork'
import '../styles/Work.css'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'



export class Work extends Component {
    getRouteState = ()=> {
        return {
            minutes: parseInt(this.props.search.substring(6).split("&")[0],10),
            interests: {
                    business: /b/.test(this.props.search.substring(6).split("&")[1].substring(9)),
                    code: /c/.test(this.props.search.substring(6).split("&")[1].substring(9)),
                    design: /d/.test(this.props.search.substring(6).split("&")[1].substring(9))
            }
        }
    }

    componentDidMount = () => document.title = "Marco's Work"
  
    render() {
        return(
            <div className="Work">
                <SmallForm routeState={this.getRouteState()}/>
                {this.getRouteState().minutes<5 && <ShortWork routeState={this.getRouteState()} />}
                <LongWork key="dasd" routeState={this.getRouteState()} />
            </div>
        )
    }
}