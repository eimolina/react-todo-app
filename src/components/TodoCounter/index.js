import React, { Fragment } from 'react'
import styles from './TodoCounter.module.css'

export default function TodoCounter({ loading, totalTodos, completedTodos } ) {
  return (
    <Fragment>
      <h2 className={`${styles.counter} ${loading ? styles.disabled : ''}`}>Has completado {completedTodos} de {totalTodos} tareas</h2>
    </Fragment>
  )
}
