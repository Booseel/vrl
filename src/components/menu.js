import { Link } from "gatsby"
import React from "react"

const Menu = () => (
    <div className="menu flex flex_align_center spc_arnd">
        <div className="menu_logo">
            <img src={require('../assets/img/logo.png')} alt="logo" />
        </div>
        <div className="menu_list flex spc-btwn">
            <Link
                to="/#about_courсe"
                className="menu_list__item"
            >
                О курсе
            </Link>
            <Link
                to="/#how_to_learn"
                className="menu_list__item"
            >
                Программа обучения
            </Link>
            <Link
                to="/#price"
                className="menu_list__item"
            >
                Купить
            </Link>
            <Link
                to="https://www.instagram.com/stories/highlights/18048682327257588/"
                className="menu_list__item"
                target="_blank"
            >
                Работы автора
            </Link>
            <Link
                to="https://www.instagram.com/stories/highlights/18109290601115879/"
                className="menu_list__item"
                target="_blank"
            >
                Отзывы
            </Link>
        </div>
    </div>
)

export default Menu
