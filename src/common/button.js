import React from "react"
import Link from 'next/link'

const Button = (props) => (
    <Link href={props.link}>
        <a className={props.classes}>{props.linkText}</a>
    </Link> 
)

export default Button
