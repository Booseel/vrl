import React, { Children } from 'react'

const HomeworkItem = ({children}) => {
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