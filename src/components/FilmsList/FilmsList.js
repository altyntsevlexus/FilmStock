import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FilmsList.module.css'
import ListItem from './ListItem/ListItem'

const FilmsList = ({ films }) => {
    return (
        <>
            <ul className={styles.FilmsList}>
                {films.map(film => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>
                            <ListItem film={film} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FilmsList