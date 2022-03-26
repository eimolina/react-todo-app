import React, { Fragment } from 'react'
import styles from './TodoList.module.css';

export default function TodoList(props) {

    const renderFunction = props.children || props.render;
    return (
        <Fragment>
            <section className={styles["task-section"]}>
                {props.error && props.onError()}
                {(props.loading && !props.error) && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
                {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchValue)}
                <ul className={styles["task-container"]}>
                    {props.searchedTodos.map(renderFunction)}
                    {/* {props.children} */}
                </ul>
            </section>
        </Fragment>
    )
}
