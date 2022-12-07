import React from 'react'
import styles from "../styles/Title.module.css";
const Title = ({title}) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  )
}

export default Title