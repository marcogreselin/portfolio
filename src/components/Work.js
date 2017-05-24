import React, { Component } from 'react'
import SmallForm from './SmallForm'
import { ShortWork } from './ShortWork'
import { LongWork } from './LongWork'
import '../styles/Work.css'



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


    // arrayOfInterests = (interests) => {
    //     let _interests = []
    //     if(/b/.test(interests))
    //         _interests.push("Business")
    //     if(/c/.test(interests))
    //         _interests.push("Coding")
    //     if(/d/.test(interests))
    //         _interests.push("Design")
    //     return _interests
    // }
  
    render() {
        return(
            <div className="Work">
                <SmallForm routeState={this.getRouteState()}/>
                {this.getRouteState().minutes<5 ? 
                    <ShortWork routeState={this.getRouteState()} /> :  
                    <LongWork routeState={this.getRouteState()} /> }
                
                
            </div>
        )
    }
}
