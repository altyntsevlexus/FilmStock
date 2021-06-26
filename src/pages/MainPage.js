import React, { Component } from 'react'
import FilmsList from '../components/FilmsList/FilmsList'
import * as MoviesAPI from '../services/moviesAPI'
import ClipLoader from "react-spinners/ClipLoader";
import InfiniteScroll from 'react-infinite-scroller';


const override = {
    display: 'block',
    margin: '0 auto',
}



export default class MainPage extends Component {


    state = {
        topFilms: [],
        loading: true
    }

    componentDidMount() {

        MoviesAPI.fetchTopMovies().then(data => this.setState({ topFilms: data.results }))
            .catch(error => console.log(error))
            .finally(() => this.setState({
                loading: false
            }))
    }


    fetchMoreData = (page) => {

        MoviesAPI.fetchTopMovies(page).then(data => this.setState({
            topFilms: [...this.state.topFilms, ...data.results]
        }))
    }

    render() {
        return (
            <>
                <ClipLoader
                    css={override}
                    size={50}
                    color={'#FFFF00'}
                    loading={this.state.loading}
                />
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.fetchMoreData}
                    hasMore={true}
                >
                    <FilmsList films={this.state.topFilms} />
                </InfiniteScroll>
            </>
        )
    }
}