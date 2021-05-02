import React from 'react'

import HomeworkItem from './homeworkItem'

const Homework = () => {
    return (
        <div id="homework">
            <div className="file">
                <input type="file" />
                <input type="submit" />
            </div>
            <div className="homeworks">
                <HomeworkItem />
                <HomeworkItem />
                <HomeworkItem />
                <HomeworkItem />
                <HomeworkItem />
                <HomeworkItem />
            </div>
        </div>
    );
}

export default Homework