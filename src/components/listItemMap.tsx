import React from 'react'

const ListItemMap = ({ cardList }) => {
    return (
        cardList.map((item) => (
            <li className="about_cource__list_item">
                <span key={item.id}>{item.content}</span>
            </li>
        ))
    )
}

export default ListItemMap