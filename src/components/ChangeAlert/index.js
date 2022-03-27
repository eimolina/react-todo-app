import React from 'react';
import withStorageListener from './withStorageListener';
import styles from './ChangeAlert.module.css';

function ChangeAlert(props) {
    if (props.show) {
        return (
            <div className={styles.bg}>
                <div className={styles.container}>
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegadoor</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button type='button' className={styles.btnSincronizar} onClick={props.toggleShow}>Si, sincronizar</button>
                </div>
            </div>
        )
    } else {
        return null;
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlert, ChangeAlertWithStorageListener }
