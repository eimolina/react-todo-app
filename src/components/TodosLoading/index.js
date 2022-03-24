import React from 'react'
import styles from './TodosLoading.module.css'

function TodoosLoading() {
  return (
    <div className={styles.container}>
      <span className={styles.completeIcon}></span>
      <p className={styles.text}>Cargando TODOs...</p>
      <span className={styles.removeIcon}></span>
    </div>
  )
}

export default TodoosLoading