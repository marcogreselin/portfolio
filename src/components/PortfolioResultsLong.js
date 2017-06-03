import React, { Component } from 'react'
import {products} from './products'
import {PortfolioElement} from './PortfolioElement'

export class PortfolioResultsLong extends Component {

    orderedArray = () => {
        let sortedArray = products
        if(this.props.parentState.interests.design && this.props.parentState.interests.code && this.props.parentState.interests.business)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.code*b.scores.relevancy.design*b.scores.relevancy.business-a.scores.quality*a.scores.relevancy.code*a.scores.relevancy.design*a.scores.relevancy.business))
        else if(this.props.parentState.interests.design && this.props.parentState.interests.code)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.code*b.scores.relevancy.design/2)-(a.scores.quality*a.scores.relevancy.code*a.scores.relevancy.design/2))
        else if(this.props.parentState.interests.design && this.props.parentState.interests.business)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.business*b.scores.relevancy.design/2)-(a.scores.quality*a.scores.relevancy.business*a.scores.relevancy.design/2))
        else if(this.props.parentState.interests.business && this.props.parentState.interests.code)
            sortedArray.sort((a,b) => (b.scores.quality*b.scores.relevancy.business*b.scores.relevancy.code/2)-(a.scores.quality*a.scores.relevancy.business*a.scores.relevancy.code/2))
        else if(this.props.parentState.interests.business)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.business-a.scores.quality*a.scores.relevancy.business))
        else if(this.props.parentState.interests.code)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.code-a.scores.quality*a.scores.relevancy.code))
        else if(this.props.parentState.interests.design)
            sortedArray.sort((a,b)=> (b.scores.quality*b.scores.relevancy.design-a.scores.quality*a.scores.relevancy.design))        
        return sortedArray
    }


    addThree = () => this.props.changeWorkState({addedElements: this.props.addedElements+3})

    render() {
        return(
            <div className="LongWork">
                { this.orderedArray().slice(0,this.props.initialNumberOfElements()+this.props.addedElements).map((product, i) => 
                                 <PortfolioElement parentProps={this.props} product={product} key={i} />
                )}
                {products.length > (this.props.initialNumberOfElements()+this.props.addedElements) && <button onClick={this.addThree} className="see-more">See some more</button>}
            </div>
        )
    }
}