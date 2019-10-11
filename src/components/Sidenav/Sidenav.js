import React from 'react'
import styles from './Sidenav.module.scss'

const Sidenav = () => {
  return (
    <aside className={styles.Sidenav}>
      <ul>
        <li><a href="/">Notes</a></li>
        <li><a href="/">Reminders</a></li>
      </ul>
    </aside>
  )
}

export default Sidenav
