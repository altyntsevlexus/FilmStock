import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'



const Movie = ({ title, overview, image, id, backdrop_path, release_date, }) => (
    <>
        <img src={backdrop_path} className={styles.backgroundImage} alt='background' />
        <section className={styles.AboutMovie}>
            <img src={image} alt={title} className={styles.MoviePoster} />
            <div className={styles.MovieDescriptionBlock}>
                <h1 className={styles.MovieTitle}>{title}</h1>
                <p>{release_date}</p>
                <p className={styles.MovieOverview}>{overview}</p>
            </div>
        </section>
        <section className={styles.MovieAdditionalBlock}>
            <Link to={`/movies/${id}/cast`} replace> <button className={styles.CastButton}> Cast </button> </Link>
        </section>
    </>
)
export default Movie