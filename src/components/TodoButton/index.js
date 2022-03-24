import React, { Fragment } from 'react'
import styles from './TodoButton.module.css'

export default function TodoButton({setOpenModal }) {

  return (
    <Fragment>
      <button
        className={styles["btn-accion"]}
        onClick={() => setOpenModal(prevState => !prevState)}>
        Añadir
      </button>
    </Fragment>
  )
}
