import React from 'react'
import styles from './Search.module.css'

const Search = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className={styles.FormStyle} >
        <input type='text' placeholder='SEARCH' value={value} onChange={onChange} className={styles.SearchStyle}></input>
    </form>
)

export default Search