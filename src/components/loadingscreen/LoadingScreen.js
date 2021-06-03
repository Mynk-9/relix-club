import React, { useEffect, useState } from 'react';
import { Ellipsis } from 'react-spinners-css';
import Styles from './LoadingScreen.module.scss';

const LoadingScreen = props => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.onreadystatechange = e => {
            if (document.readyState === 'complete') {
                setLoaded(true); 
                document.body.style.overflow = 'initial';
            } else {
                setLoaded(false);
                document.body.style.overflow = 'hidden';
            }
        };

        return () => {
            setLoaded(false);
        };
    }, []);

    return (
        loaded
            ? <></>
            : <div className={Styles.loadingScreen}>
                <div className={Styles.loader}>
                    <div style={{ textAlign: 'center', fontSize: '5vmin' }}>{'Loading'}</div>
                    <Ellipsis color={'var(--common-yellow-color)'} size={'25vmin'} />
                </div>
            </div>
    );
};

export default LoadingScreen;