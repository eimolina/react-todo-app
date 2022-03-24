import React, { Fragment } from 'react'
import styles from './TodoList.module.css';

export default function TodoList(props) {
    return (
        <Fragment>
            <section className={styles["task-section"]}>
                <ul className={styles["task-container"]}>
                    {props.children}
                </ul>
            </section>
        </Fragment>
    )
}
