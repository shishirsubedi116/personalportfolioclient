import React from 'react'
import styles from '../components/Loading/loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loading