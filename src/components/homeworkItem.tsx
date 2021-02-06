import React from 'react'

interface Item {
    children?: any,
}

const HomeworkItem: React.FC<Item> = ({children}) => {
    return (
        <div className="homework_item">
            <img src='/ahsoka.jpg' alt="homework image" className="homework_img"/>
            <div>feedback</div>
            <div>files</div>
            {children}
        </div>
    );
}

export default HomeworkItem