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

    orderedArray = ()=> {
        let share
        if(this.state.interests.design && this.state.interests.code && this.state.interests.business)
            share = .33
        else if((this.state.interests.design && this.state.interests.code) || 
                (this.state.interests.design && this.state.interests.business) ||
                (this.state.interests.business && this.state.interests.code))
            share = .5
        else 
            share = 1
        console.log(share)
    }
  
    render() {
        return(
            <div className="Work">
                <SmallForm routeState={this.getRouteState()} orderedArray={this.orderedArray}/>
                {this.getRouteState().minutes<5 && <ShortWork routeState={this.getRouteState()} />}
                <LongWork key="dasd" routeState={this.getRouteState()} />
            </div>
        )
    }
}