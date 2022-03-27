import React, { Fragment } from 'react';
import styles from './TodoSearch.module.css';
import { TodoContext } from '../../Context';

export default function TodoSearch({ loading, searchValue, setSearchValue }) {

  const onSetSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  
  return (
    <Fragment>
      <input
        className={styles["search-box"]}
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={onSetSearchValueChange}
        disabled={loading}
      />
    </Fragment>
  )
}
