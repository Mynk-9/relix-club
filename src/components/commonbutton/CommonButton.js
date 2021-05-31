import React from 'react';
import Styles from './CommonButton.module.scss';

const CommonButton = ({ onClick, text, style }) => {
    return (
        <button
            className={Styles.button}
            style={style}
            onClick={
                onClick
                || (() => { })
            }
        >
            { text}
        </button >
    );
};

export default CommonButton;