import React from 'react';
import Styles from './GlassCard.module.scss';

const GlassCard = props => {

    return (
        <div className={Styles.card}>
            <img className={Styles.icon} src={props.icon} alt={'logo'} />
            <div className={Styles.mobileWrapper}>
                <div className={Styles.title}>{props.title}</div>
                <div className={Styles.desc}>{props.desc}</div>
            </div>
        </div>
    );
};

export default GlassCard;