import React, {Fragment} from 'react'
import styles from './EmptyTodos.module.css'

function EmptyTodos() {
  return (
    <Fragment>
      <h2 className={styles.text}>¡No tienes tareas!</h2>
      <small className={styles.text}>Añade una con el boton "Añadir"</small>
    </Fragment>
  )
}

export default EmptyTodos