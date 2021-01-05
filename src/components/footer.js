import React from "react"

const Footer = () => (
    <div className="contact flex column flex_align_center justify_center">
        <h4>Остались вопросы? Свяжитесь с нами!</h4>
        <div className="contact_info flex spc_arnd flex_align_center">
        <div className="legal">
            <p>ИП Штельвак А.В.</p>
            <p>ОГРН 320745600057632</p>
        </div>
        <div className="info_social flex spc_arnd flex_align_center">
            <a href="https://t.me/veca_rony"><img src={require('../assets/img/telegram.svg')} className="social_icon" alt="telegram" /></a>
            <a href="https://www.instagram.com/veca_rony/"><img src={require('../assets/img/instagram.svg')} className="social_icon" alt="insta" /></a>
            <a href="https://vm.tiktok.com/ZSvC6gEA/"><img src={require('../assets/img/tiktok.svg')} className="social_icon" alt="tiktok" /></a>
        </div>
        </div>
    </div>
)

export default Footer