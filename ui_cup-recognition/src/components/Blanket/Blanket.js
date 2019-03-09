import React from 'react';
import styles from './Blanket.module.css';

class Blanket extends React.Component {
    
    static defaultProps = {
        isActive: false,
        showExit: true,
        color: 'rgba(31, 35, 46, 0.9)',
        fadeInSpeed: 500,
        fadeOutSpeed: 500,
        onExit: undefined,
    }
    
    render() {

        const { isActive, showExit, color, onExit, fadeInSpeed, fadeOutSpeed } = this.props;

        return (
            <div
                style={{
                    '--fadeInSpeed': fadeInSpeed+'ms',
                    '--fadeOutSpeed': fadeOutSpeed+'ms',
                    '--blanketColor': color,
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