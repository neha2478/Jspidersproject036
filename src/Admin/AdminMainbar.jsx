import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './adminsidebar.module.css'

const AdminMainbar = () => {
    return(
        <div id={styles.designoutlet}>
            <Outlet/>
        </div>
    )
}

export default AdminMainbar