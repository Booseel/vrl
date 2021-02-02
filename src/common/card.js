import React from 'react'

const Card = ({cardId, cardName, cardDescription, currentPrice, lowerPrice, higherPrice, children}) => {
    return(
        <div id={cardId} className="card flex column flex_align_center spc-btwn blur">
            <div className="cardheader">
                <h3>{cardName}</h3>
                <div className="prices flex flex_align_center spc_arnd">
                    <h6>{lowerPrice}</h6>
                    <h4>{currentPrice}</h4>
                    <h6>{higherPrice}</h6>
                </div>
                <p>{cardDescription}</p>
            </div>
            {children}
        </div>
    );
}

export default Card