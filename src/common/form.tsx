import React from 'react'

const Form = ({id, actionForm, children}) => {
    return (
        <form id={id} action="POST" className="modal_form">
            <input className="modal_inputs" placeholder="email" type="text" required/>
            <input className="modal_inputs" placeholder="пароль" type="password" required/>
            {children}
        </form>
    );
}

export default Form