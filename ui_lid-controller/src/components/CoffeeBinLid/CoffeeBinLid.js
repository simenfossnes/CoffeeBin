import React from 'react';
import styles from './CoffeeBinLid.module.css';


class CoffeeBinLid extends React.Component {
    render() {
        const { isOpen } = this.props;
        return (
            <div className={styles['lid-container']}>
                <div className={`${styles['lid-left']} ${isOpen ? styles.openl : ''}`}></div>
                <div className={`${styles['lid-right']} ${isOpen ? styles.openr : ''}`}></div>
            </div>
        )
    }
}

export default CoffeeBinLid;
