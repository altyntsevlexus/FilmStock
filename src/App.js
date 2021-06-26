import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import MainPage from './pages/MainPage'
// import Serials from './pages/Serials'
import Cartoons from './pages/Cartoons'
import SearchPage from './pages/SearchPage'
import SingleMoviePage from './pages/SingleMoviePage'
import Nav from './components/Nav/Nav'
import PreLoader from './helpers/PreLoader/PreLoader'

import styles from "./App.module.css";

export default class App extends Component {

    state = {
        isPreloading: false
    }

    componentDidMount() {
        this.setState({
            isPreloading: true
        })

        setTimeout(() => this.setState({ isPreloading: false }), 2200)
    }


    render() {

        return (
            <HashRouter basename='/'>
                { this.state.isPreloading ? <PreLoader /> : ''}
                <div className={styles.Wrapper} >
                    <Nav />
                    <Switch>
                        <Route exact path="/films" component={MainPage} />
                        <Route exact path="/seacrh" component={SearchPage} />
                        <Route path="/movies/:movieId" component={SingleMoviePage} />
                        <Route path="/cartoons" component={Cartoons} />
                        <Redirect from='/' to='/films' />
                    </Switch>
                </div >
            </HashRouter>
        )
    }
}