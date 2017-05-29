import React, { Component } from 'react'
import {products} from './products'
import {Product} from './Product'

export class LongWork extends Component {

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
        console.log(JSON.stringify(sortedArray))
        return sortedArray
    }

    renderContent = (content, l) => {
        switch(content.type){
            case "text":
                return (
                    <div className="productText" key={l}>
                        {content.body}
                    </div>
                )
            case "image":
                return (
                    <img key={l} className="productImage" src={content.url} alt={content.alt}/>
                )
            case "emphasis":
                return (
                    <div className="emphasisTitle" key={l}>
                        <span className="emphasisTitleSpan">{content.body}</span>
                    </div>
                )
            case "video":
                return (
                    <div className="product-video" key={l}>
                        <iframe title={content.title} width='560' height='315' src={content.body} frameBorder='0' allowFullScreen></iframe>
                    </div>
                )
            default:
                return null
        }
    }

    addThree = () => this.props.changeWorkState({addedElements: this.props.addedElements+3})

    render() {
        return(
            <div className="LongWork">
                { this.orderedArray().slice(0,this.props.initialNumberOfElements()+this.props.addedElements).map((product, i) => 
                                 <Product product={product} renderContent={this.renderContent} key={i} />
                )}
                {products.length > (this.props.initialNumberOfElements()+this.props.addedElements) && <button onClick={this.addThree} className="see-more">See some more</button>}
            </div>
        )
    }
}