import React from "react"
import Button from "../common/button"

export const Banner = () => (
    <div className="banner flex flex_align_center spc_arnd bg_gradient_secondary">
        <div className="banner_text flex column">
            <h3>Стань AR-разработчиком с нуля до профи</h3>
            <p>Пройди полный курс и выйди на большой доход!</p>
        </div>
        <Button link="/" linkText="КУПИТЬ КУРС" classes="button secondary_button"/>
    </div>
)
