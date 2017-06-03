import React from 'react'
import {  withRouter, Link } from 'react-router-dom'


const renderContent = (content, l) => {
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

const Product = (props) => (
    <div className="product-wrapper">
        <div className="subtitle"><span className="subtitle-span">{props.productData.subtitle}</span></div>
        <div className="title"><span className="title-span">{props.productData.title}</span></div>
        {props.productData.content.map((content, l) => {
            return(
                renderContent(content, l)
            )
        })}
        <div className="productLinks">
            {props.productData.links.password && (
            <div className="passwordProtected">
                Some files are password protected. <span className="dont-break"><a href="mailto:marcogreselin@me.com?subject=Unlock the magic" className="social" rel="noopener noreferrer">Email</a> me to unlock them.</span>
            </div>
            )}
            <ul>
                {props.productData.links.content.map((link, g)=>{
                    return <li key={g}><a target="_blank" rel="noopener noreferrer" href={link.url}>{link.title}</a></li>
                })}
            </ul>
        </div>
        {props.location.state && props.location.state.search ? <Link to={"/work"+props.location.state.search}>X</Link>: <Link to={"/"}>Go Home</Link>}
    </div>
)
export default withRouter(Product)