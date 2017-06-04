import React, { Component } from 'react'
import {  withRouter, Link } from 'react-router-dom'
import '../styles/Product.css'

export class Product extends Component {
    componentDidMount = () => {
        document.title = this.props.productData.title
        window.scrollTo(0, 0)
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

    render() {
        return (
            <div className="Product">
                <div className="subtitle"><span className="subtitle-span">{this.props.productData.subtitle}</span></div>
                <div className="title"><span className="title-span">{this.props.productData.title}</span></div>
                {this.props.productData.content.map((content, l) => {
                    return(
                        this.renderContent(content, l)
                    )
                })}
                <div className="productLinks">
                    {this.props.productData.links.password && (
                    <div className="passwordProtected">
                        Some files are password protected. <span className="dont-break"><a href="mailto:marcogreselin@me.com?subject=Unlock the magic" className="social" rel="noopener noreferrer">Email</a> me to unlock them.</span>
                    </div>
                    )}
                    <ul>
                        {this.props.productData.links.content.map((link, g)=>{
                            return <a target="_blank" rel="noopener noreferrer" href={link.url}><li className="link" key={g}>{link.title}</li></a>
                        })}
                    </ul>
                </div>
                {(this.props.location.state && this.props.location.state.search) && <Link className="X" to={"/work"+this.props.location.state.search}>X</Link>}
            </div>
        )
    } 
}
export default withRouter(Product)