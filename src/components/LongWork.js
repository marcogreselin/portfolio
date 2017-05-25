import React, { Component } from 'react'
import fitvids from 'fitvids'
import {products} from './products'

export class LongWork extends Component {
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

    componentDidMount = () => {
        fitvids()
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
                    <div className="productVideo" key={l}>
                        <iframe title={content.title} width='560' height='315' src={content.body} frameBorder='0' allowFullScreen></iframe>
                    </div>
                )
            default:
                return null
        }
    }

    render() {
        return(
            <div className="LongWork">
                { products.map((product, i) => {
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



                <button className="see-more">See some more</button>
            </div>
        )
    }
}