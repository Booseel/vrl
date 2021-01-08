import { Link } from "gatsby"
import React from 'react'

const MenuList = ({active, setActive}) => (
    <div className={active ? 'menu_list show' : 'menu_list'}>
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
)

export default MenuList