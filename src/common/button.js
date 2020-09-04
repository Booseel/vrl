import React from "react"
import { Link } from "gatsby"

const Button = (props) => (
    <Link 
    to={props.link}
    className={props.classes}>
    {props.linkText}
    </Link> 
)

export default Button
