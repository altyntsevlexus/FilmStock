import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    return (

        <header>
            <NavLink to="/films" className={styles.Logo}>FilmStock</NavLink>
            <div className={styles.NavBar}>
                <nav className={styles.Nav}>
                    <NavLink to="/films" className={styles.NavLink} activeClassName={styles.Selected}>
                        <p>Films</p>
                    </NavLink>
                    {/* <NavLink to="/serials" className={styles.NavLink} activeClassName={styles.Selected}>
                        <p>Serials</p>

                    </NavLink> */}
                    <NavLink to="/cartoons" className={styles.NavLink} activeClassName={styles.Selected}>
                        <p>Cartoons</p>

                    </NavLink>
                    <NavLink to="/seacrh" className={styles.NavLink} activeClassName={styles.Selected}>
                        <p>Search</p>

                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Nav

