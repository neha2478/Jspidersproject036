import React from 'react';
import { Link } from 'react-router-dom';
import styles from './adminsidebar.module.css'

const AdminSidebar = () => {
  return (
    <>
        <section id={styles.adminSect}>
            <article>
                <div id={styles.sidebarList}>
                    <ul>
                    <h2>Admin Dashboard</h2>
                        <li><Link to={'/adminDashbord/addacamdymanager'}>Add Academy Manager</Link></li>
                        <li><Link to={'/adminDashbord/viewacamdymanager'}>View Academy Manager</Link></li>
                        <li><Link to={'/adminDashbord/viewacademy'}>View Academy</Link></li>
                        <li><Link to={'/adminDashbord/viewbranch'}>View Branch</Link></li>
                        <li><Link to={'/adminDashbord/viewcourse'}>View Course</Link></li>
                        <li><Link to={'/'}>Home</Link></li>
                    </ul>
                </div>
            </article>
        </section>
    </>
  )
}

export default AdminSidebar


//Notes:-
// have used Link here to navigate to the Home page from Admin Dashboard Page