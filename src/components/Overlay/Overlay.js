import React from 'react'

import styles from "./Overlay.module.scss";

const Overlay = (props) => {
  return (
    <div className={styles.Overlay}>
      {props.children}
    </div>
  )
}

export default Overlay
