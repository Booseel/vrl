import React from 'react'

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? "wrapper_modal active" : "wrapper_modal"} onClick={() => setActive(false)}>            
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="close_modal" onClick={() => setActive(false)}>закрыть</div>
                {children}
            </div>
        </div>
    );
}

export default Modal