import React from 'react'
import { Link } from 'react-router-dom'


export const PortfolioElement = (props) => (
    <div className=".PortfolioElement">
        <Link to={{pathname: "/work/"+props.product.name, state: { search: props.parentProps.workProps.search } }}><img src={props.product.portfolio_image} width="50%" alt={props.product.title}/></Link>
        <p>{props.product.title}</p>
    </div>
)