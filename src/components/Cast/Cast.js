import React, { Component } from 'react'
import * as MoviesAPI from '../../services/moviesAPI'
import CastItem from './CastItem/CastItem'
import styles from './Cast.module.css'

class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        MoviesAPI.fetchMovieCast(this.props.match.params.movieId).then(data => this.setState({
            cast: data.cast
        }))
    }

    render() {
        return (
            <ul className={styles.CastList}>
                {this.state.cast.map(actor => (
                    <li key={actor.id}><CastItem actor={actor} /></li>
                ))}
            </ul>
        )
    }
}

export default Cast