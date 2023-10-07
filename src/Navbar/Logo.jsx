import React from 'react'
import dance from './Assets/Dance logo.png'

import styles from "./navbar.module.css";

const Logo = () => {
  return (
    <div className = {styles.logo_nav}>
      <img src={dance} height={70}/>
    </div>
  )
}

export default Logo
