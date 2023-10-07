import React from 'react';
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.home_page}>
      <h3 className={styles.emotions}>Express Your emotions!!</h3>
      <h1 className={styles.heading}>Dance Fever</h1>
      <h3 className={styles.quote}>Dance, Don't Need wings to Fly!!</h3>
    </div>
  )
}

export default Home;
