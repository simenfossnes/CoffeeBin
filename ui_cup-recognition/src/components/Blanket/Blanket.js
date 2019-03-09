import React from 'react';
import styles from './Blanket.module.css';

class Blanket extends React.Component {
    
    static defaultProps = {
        isActive: false,
        showExit: true,
        fadeInSpeed: 500,
        fadeOutSpeed: 500,
        onExit: undefined,
    }
    
    render() {

        const { isActive, showExit, onExit, fadeInSpeed, fadeOutSpeed } = this.props;

        return (
            <div
                style={{
                    '--fadeInSpeed': fadeInSpeed+'ms',
                    '--fadeOutSpeed': fadeOutSpeed+'ms'
                }} 
                className={`${styles.blanket} ${!isActive ? styles.inactive : ''}`}>
                {showExit && 
                    <div className={styles.exit} onClick={onExit}>
                        <h1 className={styles.exitIcon}>X</h1>
                    </div>
                }
                <div className={styles.content}>
                    {this.props.children}
                </div>
          </div>
        )
    }
}

export default Blanket;