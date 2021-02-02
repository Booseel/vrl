import React from "react"
import Link from 'next/link'

const Button = ({link, linkText, classes, children}) => (
    <Link href={link}>
        <a className={classes}>
            {linkText}
            {children}
        </a>
    </Link> 
)

export default Button
