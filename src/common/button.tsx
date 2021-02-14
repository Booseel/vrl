import React from "react"
import Link from 'next/link'

interface Props {
    link: string;
    linkText: string;
    classes: string;
    children?: any;
}

const Button: React.FC<Props> = ({link, linkText, classes, children}) => (
    <Link href={link}>
        <a className={classes}>
            {linkText}
            {children}
        </a>
    </Link> 
)

export default Button
