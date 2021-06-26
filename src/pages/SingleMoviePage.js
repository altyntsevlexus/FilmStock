import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Movie from '../components/Movie/Movie'
import Cast from '../components/Cast/Cast'

import * as MoviesAPI from '../services/moviesAPI'


export default class SingleMoviePage extends Component {
    state = {
        id: '',
        title: '',
        overview: '',
        image: '',
        backdrop_path: '',
        release_date: '',
        vote_average: '',
    }

    componentDidMount() {
        MoviesAPI.fetchMovieById(this.props.match.params.movieId)
            .then(data => this.setState({
                title: data.title,
                overview: data.overview,
                image: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
                id: data.id,
                release_date: data.release_date,
                vote_average: data.vote_average * 10,
                backdrop_path: 'https://image.tmdb.org/t/p/w500' + data.backdrop_path,
            }))
    }


    render() {
        const { title, overview, image, id, backdrop_path, release_date, vote_average } = this.state

        return (
            <Fragment>
                <Movie title={title} overview={overview} image={image} id={id} backdrop_path={backdrop_path} release_date={release_date} vote_average={vote_average} />
                <Route path="/movies/:movieId/cast" component={Cast} />
            </Fragment>
        )
    }
}