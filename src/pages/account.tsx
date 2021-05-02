import React from 'react'

import LkLayout from '../components/lkLayout'
import Lessons from '../components/lessons'
import Homework from '../components/homework'

const accountPage = () => {
    return (
        <LkLayout id="account">             
            <Homework />
        </LkLayout>
    );
}

export default accountPage