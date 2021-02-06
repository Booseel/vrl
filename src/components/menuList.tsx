import React from 'react'
import Link from 'next/link'

const MenuList = ({active, setActive}) => {
    return (
        <div className={active ? 'menu_list show' : 'menu_list'}>
            <Link href="/#about_courсe">
                <a className="menu_list__item" onClick={() => setActive(false)}>О курсе</a>
            </Link>
            <Link href="/#how_to_learn">
                <a className="menu_list__item" onClick={() => setActive(false)}>Порядок обучения</a>
            </Link>
            <Link href="/#price">
                <a className="menu_list__item" onClick={() => setActive(false)}>Купить</a>
            </Link>
            <Link href="https://www.instagram.com/stories/highlights/18048682327257588/">
                <a target="_blank" className="menu_list__item" onClick={() => setActive(false)}>Работы автора</a>
            </Link>
            <Link href="https://www.instagram.com/stories/highlights/18109290601115879/">
                <a target="_blank" className="menu_list__item" onClick={() => setActive(false)}>Отзывы</a>
            </Link>
        </div>
    );
    
}

export default MenuList