import React from 'react'
import styles from './ListItem.module.css'

const ListItem = ({ film }) => {
    return (
        <div className={styles.ListItem}>
            {film.poster_path ? <img src={'https://image.tmdb.org/t/p/w500/' + film.poster_path} alt='poster' className={styles.FilmPoster}>
            </img> : <img src={'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg'} alt='poster' className={styles.FilmPoster}>
                </img>}
            <div className={styles.ListItemOverlay}>
                <div className={styles.ItemTitle}>
                    <p>
                        {film.title ? film.title : film.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ListItem