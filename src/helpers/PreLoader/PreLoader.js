import React, { Component } from 'react'
import styles from './PreLoader.module.css'

class PreLoader extends Component {

    render() {
        return (
            <div className={styles.PreLoader} >
                <img src="https://media1.giphy.com/media/2vlmZAD3Kxeta9QxLV/giphy.gif" className={styles.PreLoader__image}></img>
            </div>
        )
    }
}


export default PreLoader