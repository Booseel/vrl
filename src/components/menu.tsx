import React, {useState} from "react"

import MenuList from './menuList'

const Menu = () => {

    const [menuActive, setMenuActive] = useState(false);
    
    return (
    <div className="menu flex flex_align_center spc_arnd">
        <div className="menu_logo">
            <img src='/logo.png' alt="logo" />
        </div>
        <div className="burger" onClick={() => setMenuActive(!menuActive)}>{menuActive ? <img src="/cancel.png"className="social_icon" /> : <img src="/burger.png"className="social_icon" />}</div>
        <MenuList active={menuActive} setActive={setMenuActive}/>
    </div>
)}

export default Menu
