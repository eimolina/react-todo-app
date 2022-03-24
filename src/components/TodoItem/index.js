import React, { Fragment } from 'react'
import styles from './TodoItem.module.css';
import { FaSquare, FaCheckSquare, FaWindowClose } from 'react-icons/fa';

export default function TodoItem(props) {
    return (
        <Fragment>
            <li className={styles["task"]}>
                <span>
                    {!props.completed ?
                        (<FaSquare size="1.5em" color='#66bb6a' onClick={props.completar} />) :
                        (<FaCheckSquare size="1.5em" color='#66bb6a' />)
                    }
                </span>
                <p className={props.completed ? styles["task-name-line"] : undefined}>{props.text}</p>
                <span><FaWindowClose size="1.5em" color='#ef5350' onClick={props.remover} /></span>
            </li>
        </Fragment>
    )
}
