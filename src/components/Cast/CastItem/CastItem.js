import React from 'react'
import styles from './CastItem.module.css'

const CastItem = ({ actor }) => {
    return (
        <div className={styles.ListItem}>
            {actor.profile_path ? <img src={'https://image.tmdb.org/t/p/w500/' + actor.profile_path} alt='poster' className={styles.ActorPoster}>
            </img> : <img src={'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg'} alt='poster' className={styles.ActorPoster}>
                </img>}
            <div className={styles.ListItemOverlay}>
                <div className={styles.ItemTitle}>
                    <p>
                        {actor.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CastItem