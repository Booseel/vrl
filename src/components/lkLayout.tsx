import React from 'react'

const LkLayout = ({id, children}) => {
    return (
        <div className="lk" id={id}>
            <div className="blur wrapper_account">                
                {children}
            </div>
        </div>
    );
}

export default LkLayout