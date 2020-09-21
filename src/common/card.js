import React from 'react'

import Button from "../common/button"

const Card = ({variant, cardName, title, buttonVariant, children}) => {
    return(
        <div variant={variant}>
            <h5>{cardName}</h5>
            <p>{title}</p>
            {children}
            <Button className={buttonVariant} />
        </div>
    )
}

export default Card