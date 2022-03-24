import React, { Fragment } from 'react'
import styles from './TodoCounter.module.css'
import { TodoContext } from '../../Context';

export default function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <Fragment>
      <h2 className={styles.title}>Has completado {completedTodos} de {totalTodos} tareas</h2>
    </Fragment>
  )
}
