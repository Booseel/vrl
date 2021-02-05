import React from 'react'

const Modal = ({active, setActive, modalHeader, modalPrice, modalId, children}) => {

    return (
        <div id={modalId} className={active ? "wrapper_modal active" : "wrapper_modal"} onClick={() => setActive(false)}>            
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="close_modal" onClick={() => setActive(false)}>закрыть</div>
                <h3 className="modal_header">{modalHeader}</h3>
                <div className="modal_price">
                    <h5>{modalPrice}</h5>
                </div>
                <p className="modal_info">Введите данные для регистрации личного кабинета на платформе обучения</p>
                {children}
            </div>
        </div>
    );
}

export default Modal