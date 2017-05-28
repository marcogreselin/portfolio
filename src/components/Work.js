import React, { Component } from 'react'
import SmallForm from './SmallForm'
import { ShortWork } from './ShortWork'
import { LongWork } from './LongWork'
import Preambole from './Preambole' 
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



    componentDidMount = () => {
        document.title = "Marco's Work"
        window.scrollTo(0, 0)
    }

    changeWorkState = (newState) => {
        this.setState(newState)
        this.setState({addedElements: 0})
        console.log(JSON.stringify(this.state))
    }


    changeWorkStateAddElements = (newState) => {
        this.setState(newState)
    }

    initialNumberOfElements = () => {
        
        if(this.state.minutes<5)
            return 0
        else if(this.state.minutes<=10)
            return 3
        else 
            return  Math.min(4+parseInt((this.state.minutes-10)/4,10), products.length)
    }

    render() {
        return(
            <div className="Work">
                <SmallForm routeState={this.state} changeWorkState={this.changeWorkState}/>
                
                    {this.state.minutes<5 ? <ShortWork /> : <Preambole minutes={this.state.minutes} 
                                                                    initialNumberOfElements={this.initialNumberOfElements}
                                                                    interests = {this.state.interests}/>}
                    
                    <LongWork parentState={this.state} initialNumberOfElements={this.initialNumberOfElements}
                              
                              changeWorkState={this.changeWorkStateAddElements} 
                              addedElements={this.state.addedElements} />
            </div>
        )
    }
}