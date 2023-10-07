import React from 'react';
import AdminMainbar from './AdminMainbar';
import AdminSidebar from './AdminSidebar';
import styles from "./adminsidebar.module.css"

const AdminDashboard = () => {
  return (
    <section>
      <article id={styles.artadmin}>
        <AdminSidebar/>
        <AdminMainbar/>
      </article>
    </section>
  )
}

export default AdminDashboard
