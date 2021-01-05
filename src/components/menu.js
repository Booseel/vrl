import { Link } from "gatsby"
import React from "react"

const Menu = () => (
    <div className="menu flex flex_align_center">
        <div className="menu_logo">
            <img src={require('../assets/img/logo.png')} alt="logo" />
        </div>
        <div className="menu_list flex spc-btwn">
        <Link
            to="/"
            className="menu_list__item"
        >
            О курсе
        </Link>
        <Link
            to="/"
            className="menu_list__item"
        >
            Программа обучения
        </Link>
        <Link
            to="/"
            className="menu_list__item"
        >
            Цели курса
        </Link>
        <Link
            to="/"
            className="menu_list__item"
        >
            Работы автора
        </Link>
        <Link
            to="/"
            className="menu_list__item"
        >
            Отзывы
        </Link>
        </div>
    </div>
)

export default Menu
