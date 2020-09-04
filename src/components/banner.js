import React from "react"
import Button from "../common/button"

const Banner = () => (
    <div className="flex flex_align_center spc_arnd bg_gradient_secondary">
        <div className="banner_text flex">
            <h5>Освойте профессию в комплексе и станьте профи</h5>
            <p>Вам подойдет мой специальный “комплексный курс”, который позволит выйти на большой доход!</p>
        </div>
        <Button link="/" linkText="Купить комплексный курс" classes="button secondary_button"/>
    </div>
)

export default Banner
