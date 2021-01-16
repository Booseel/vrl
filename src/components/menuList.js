import React from 'react'
import Link from 'next/link'

const MenuList = ({active, setActive}) => {
    return (
        <div className={active ? 'menu_list show' : 'menu_list'}>
        <Link href="/#about_courсe">
            <a className="menu_list__item">О курсе</a>
        </Link>
        <Link href="/#how_href_learn">
            <a className="menu_list__item">Программа обучения</a>
        </Link>
        <Link href="/#price">
            <a className="menu_list__item">Купить</a>
        </Link>
        <Link
            href="https://www.instagram.com/shrefries/highlights/18048682327257588/"
            target="_blank"
        >
            <a className="menu_list__item">Работы автора</a>
        </Link>
        <Link
            href="https://www.instagram.com/shrefries/highlights/18109290601115879/"
            target="_blank"
        >
            <a className="menu_list__item">Отзывы</a>
        </Link>
    </div>
    );
    
}

export default MenuList