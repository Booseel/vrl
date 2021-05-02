import React from 'react'

import LkLayout from '../components/lkLayout'
import Revview from './../components/review'
import Lessons from '../components/lessons'

const AdminPage = () => {
    return (
        <LkLayout id="admin">
            <Lessons />
        </LkLayout>
    );
}

export default AdminPage