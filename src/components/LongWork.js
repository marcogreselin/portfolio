import React, { Component } from 'react'
// import fitvids from 'fitvids'

export class LongWork extends Component {

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

    initialNumberOfElements = () => {
        if(this.props.parentState.minutes<5)
            return 1
        else if(this.props.parentState.minutes<=10)
            return 3
        else 
            return  4+parseInt((this.props.parentState.minutes-10)/3,10)
    }

    render() {
        return(
            <div className="LongWork">
                { this.props.orderedArray.slice(0,this.initialNumberOfElements()+this.props.addedElements).map((product, i) => {
                    return(<div className="product-wrapper" key={i}>
                        <div className="subtitle"><span className="subtitle-span">{product.subtitle}</span></div>
                        <div className="title"><span className="title-span">{product.title}</span></div>
                        {product.content.map((content, l) => {
                            return(
                                this.renderContent(content, l)
                            )
                            
                        })}
                        <div className="productLinks">
                            {product.links.password && (
                            <div className="passwordProtected">
                                Some files are password protected. <span className="dont-break"><a href="mailto:marcogreselin@me.com?subject=Unlock the magic" className="social" rel="noopener noreferrer">Email</a> me to unlock them.</span>
                            </div>
                            )}
                            <ul>
                                {product.links.content.map((link, g)=>{
                                    return <li key={g}><a target="_blank" rel="noopener noreferrer" href={link.url}>{link.title}</a></li>
                                })}
                            </ul>
                        </div>
                        
                    </div>)
                } )}
                <button onClick={this.addThree} className="see-more">See some more</button>
            </div>
        )
    }
}