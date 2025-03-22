import React from 'react'
import styles from './styles.module.css'
import Cards from '../Cards/Cards'
function Board(){

    return(
        <div className={styles.app}>
            <div className={styles.Board}>
                <Cards />
            </div>
        </div>
    );
}

export default Board;