import React from "react";
import ReactDOM  from "react-dom";
import styles from './Modal.module.css'


function Modal({children}){
    return ReactDOM.createPortal(
        <div className={styles.modalBackground}>
            {children}
        </div>,
        document.getElementById('modal')
      )
}
export {Modal}