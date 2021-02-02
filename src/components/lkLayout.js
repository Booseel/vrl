import React from 'react'

const LkLayout = ({children}) => {
    return (
        <div className="lk">
            <div className="blur wrapper_account">                
                {children}
            </div>
        </div>
    );
}

export default LkLayout