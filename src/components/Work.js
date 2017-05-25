import React, { Component } from 'react'
import SmallForm from './SmallForm'
import { ShortWork } from './ShortWork'
import { LongWork } from './LongWork'
import '../styles/Work.css'
import {products} from './products'

export class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: parseInt(this.props.search.substring(6).split("&")[0],10),
            interests: {
                    business: /b/.test(this.props.search.substring(6).split("&")[1].substring(9)),
                    code: /c/.test(this.props.search.substring(6).split("&")[1].substring(9)),
                    design: /d/.test(this.props.search.substring(6).split("&")[1].substring(9))
            },
            addedElements: 0
        }
    }

    componentDidMount = () => document.title = "Marco's Work"

    changeWorkState = (newState) => {
        // console.log("changeWorkState being called with this state: "+JSON.stringify(newState))
        this.setState(newState)
        this.setState({addedElements: 0})
    }

    changeWorkStateAddElements = (newState) => {
        this.setState(newState)
    }

    orderedArray = () => {
        let sortedArray = products
        if(this.state.interests.design && this.state.interests.code && this.state.interests.business)
            sortedArray.sort((a,b)=> (b.scores.quality-a.scores.quality))
        else if(this.state.interests.design && this.state.interests.code)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.code*b.scores.relevancy.design/2)-(a.scores.quality*a.scores.relevancy.code*a.scores.relevancy.design/2))
        else if(this.state.interests.design && this.state.interests.business)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.business*b.scores.relevancy.design/2)-(a.scores.quality*a.scores.relevancy.business*a.scores.relevancy.design/2))
        else if(this.state.interests.business && this.state.interests.code)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.business*b.scores.relevancy.code/2)-(a.scores.quality*a.scores.relevancy.business*a.scores.relevancy.code/2))
        else if(this.state.interests.business)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.business-a.scores.quality*a.scores.relevancy.business))
        else if(this.state.interests.code)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.code-a.scores.quality*a.scores.relevancy.code))
        else if(this.state.interests.design)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.design-a.scores.quality*a.scores.relevancy.design))
        // console.log(JSON.stringify(sortedArray[1]))
        return sortedArray
    }




  
    render() {
        return(
            <div className="Work">
                <SmallForm routeState={this.state} changeWorkState={this.changeWorkState}/>
                {this.state.minutes<5 && <ShortWork />}
                <LongWork orderedArray={this.orderedArray()} parentState={this.state} 
                          changeWorkState={this.changeWorkStateAddElements} addedElements={this.state.addedElements} />
            </div>
        )
    }
}