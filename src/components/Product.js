import React from 'react'

export const Product = (props) => (
                <div className="product-wrapper">
                    <div className="subtitle"><span className="subtitle-span">{props.product.subtitle}</span></div>
                    <div className="title"><span className="title-span">{props.product.title}</span></div>
                    {props.product.content.map((content, l) => {
                        return(
                            props.renderContent(content, l)
                        )
                        
                    })}
                    <div className="productLinks">
                        {props.product.links.password && (
                        <div className="passwordProtected">
                            Some files are password protected. <span className="dont-break"><a href="mailto:marcogreselin@me.com?subject=Unlock the magic" className="social" rel="noopener noreferrer">Email</a> me to unlock them.</span>
                        </div>
                        )}
                        <ul>
                            {props.product.links.content.map((link, g)=>{
                                return <li key={g}><a target="_blank" rel="noopener noreferrer" href={link.url}>{link.title}</a></li>
                            })}
                        </ul>
                    </div>
                    
                </div>
    )
