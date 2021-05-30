import React from 'react';
import Styles from './GlassCard.module.scss';

const GlassCard = ({ icon, title, desc, style, titleStyle, descStyle, iconStyle }) => {

    return (
        <div className={Styles.card} style={style}>
            <img className={Styles.icon} src={icon} alt={'logo'} style={iconStyle} />
            <div className={Styles.mobileWrapper}>
                <div className={Styles.title} style={titleStyle}>{title}</div>
                <div className={Styles.desc} style={descStyle}>{desc}</div>
            </div>
        </div>
    );
};

export default GlassCard;