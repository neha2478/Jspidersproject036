import React from 'react';
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";


import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <>
        <section className={styles.nav}>
            <article>
                <Logo/>
                <Menu/>
            </article>
        </section>
    </>
  )
}

export default Navbar
