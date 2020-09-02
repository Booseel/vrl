import React from "react"
import { Link } from "gatsby"

const Button = (props) => (
    <Link 
    to={props.link}
    style={{
        background: `red`,
        borderRadius: `85px`,
        padding: `1rem`,
        color: `white`
    }}>
    {props.linkText}
    </Link> 
)

export default Button
