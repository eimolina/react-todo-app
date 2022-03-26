import React, {Fragment} from 'react'
import styles from './EmptyTodos.module.css'

function EmptyTodos() {
  return (
    <Fragment>
      <h3 className={styles.text}>¡No tienes tareas!</h3>
      <small className={styles.text}>Añade una con el boton "Añadir"</small>
    </Fragment>
  )
}

export default EmptyTodos