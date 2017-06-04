import React from 'react'
import { Link } from 'react-router-dom'


export const PortfolioElement = (props) => (
    <div className="PortfolioElement">
        
        <Link to={{pathname: "/work/"+props.product.name, state: { search: props.parentProps.workProps.search } }}><p className="title">{props.product.title}</p><img src={props.product.portfolio_image} alt={props.product.title}/></Link>
        
    </div>
)