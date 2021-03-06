import React from "react"

const Footer = () => (
    <div className="contact flex flex_align_center justify_center">
        <div className="contact_info flex spc_arnd flex_align_center">
            <div className="legal">
                <p>ИП Штельвак А.В.</p>
                <p>ОГРН 320745600057632</p>
            </div>
            <div className="flex column flex_align_center justify_center">
                <h4>Остались вопросы? Свяжитесь с нами!</h4>
                <div className="info_social flex spc_arnd flex_align_center">
                    <a target="_blank" href="https://t.me/veca_rony"><img src='/telegram.svg' className="social_icon" alt="telegram" /></a>
                    <a target="_blank" href="https://www.instagram.com/veca_rony/"><img src='/instagram.svg' className="social_icon" alt="insta" /></a>
                    <a target="_blank" href="https://vm.tiktok.com/ZSvC6gEA/"><img src='/tiktok.svg' className="social_icon" alt="tiktok" /></a>
                </div>
            </div>
        </div>
    </div>
)

export default Footer