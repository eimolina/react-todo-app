import React, {Fragment} from 'react'
import styles from './TodoError.module.css'
import {FaExclamation} from 'react-icons/fa';
function TodosError() {
  return (
    <Fragment>
      <FaExclamation size="3em" color='#ffa726'></FaExclamation>
      <h2 className={styles.text}>Algo ha ocurrido</h2>
      <small className={styles.text}>Lamentamos los inconvenientes</small>
    </Fragment>
  )
}

export default TodosError