import React, { Component } from 'react'
import * as MoviesAPI from '../services/moviesAPI'
import queryString from 'query-string'
import FilmsList from '../components/FilmsList/FilmsList'
import Search from '../components/Search/Search'

class Movies extends Component {
    state = {
        value: '',
        films: [],
    }

    handleChange = e => (this.setState({
        value: e.target.value
    }))

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.value) {
            MoviesAPI.fetchMovieByQuery(this.state.value).then(data => this.setState({
                films: data.results
            }))

            this.props.history.push({
                ...this.props.location,
                search: `search=${this.state.value}`
            })
        }
    }

    qsSearch = () => queryString.parse(this.props.location.search).search

    componentDidMount() {
        if (this.qsSearch()) {
            this.setState({
                value: this.qsSearch()
            });

            MoviesAPI.fetchMovieByQuery(this.qsSearch()).then(data => this.setState({
                films: data.results
            }))
        }
    }

    componentDidUpdate(prevProps) { // this is needed for updating when going back and forward in history
        if (this.props.location.search !== prevProps.location.search && this.qsSearch()) {
            this.setState({
                value: this.qsSearch() //changes value
            });

            MoviesAPI.fetchMovieByQuery(this.qsSearch()).then(data => this.setState({
                films: data.results  //fetchs movies
            }))
        }
    }


    render() {

        return (
            <div>
                <Search value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                {this.state.films.length > 0 ? <FilmsList films={this.state.films} /> : <p>Search your films</p>}
            </div>
        )
    }
}

export default Movies